import { createContext, useEffect, useState } from "react";
import firebase from "../../firebase/Config";
import Usuario from "../../model/Usuario";
import router from "../../../node_modules/next/router";
import Cookies from "js-cookie";

interface AuthContextProps {
  usuario?: Usuario;
  carregando?: boolean
  cadastrar?: (email: string, senha: string) => Promise<void>
  login?: (email: string, senha: string) => Promise<void>
  LoginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

async function usuarioNormalizado(
  usuarioFireBase: firebase.user
): Promise<Usuario> {
  const token = await usuarioFireBase.getIdToken();
  return {
    uid: usuarioFireBase.uid,
    nome: usuarioFireBase.displayName,
    email: usuarioFireBase.email,
    token,
    provedor: usuarioFireBase.providerData[0].providerId,
    imagemURL: usuarioFireBase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    Cookies.set("template-admin-dev-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("template-admin-dev-auth");
  }
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function configurarSessao(usuarioFireBase) {
    if (usuarioFireBase?.email) {
      const usuario = await usuarioNormalizado(usuarioFireBase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }


  async function login(email, senha) {
    try {
        setCarregando(true)
        const resp = await firebase.auth()
            .signInWithEmailAndPassword(email, senha)

        await configurarSessao(resp.user)
        router.push('/')
    } finally {
        setCarregando(false)
    }
}

async function cadastrar(email, senha) {
    try {
        setCarregando(true)
        const resp = await firebase.auth()
            .createUserWithEmailAndPassword(email, senha)

        await configurarSessao(resp.user)
        router.push('/')
    } finally {
        setCarregando(false)
    }
}






  

  async function LoginGoogle() {
    try {

setCarregando(true)
      const resp = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());

    configurarSessao(resp.user);
    router.push("/");


    } finally {
setCarregando(false)
    }
  }



  async function logout() {
    try {
        setCarregando(true)
        await firebase.auth().signOut()
        await configurarSessao(null)
    } finally {
        setCarregando(false)
    }
}


useEffect(()=> {
  if(Cookies.get('template-admin-dev-auth')){
    const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
  return () => cancelar()
  } else {
    setCarregando(false)
  }
  
},[])



  return (
    <AuthContext.Provider
      value={{
        usuario,
        LoginGoogle,
        logout,
        carregando,
        login,
        cadastrar
       
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
