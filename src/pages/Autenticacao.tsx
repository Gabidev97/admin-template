import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { Google, Warning } from "../components/icons/index";
import useAuth from "../data/hooks/UseAuth";


export default function Autenticacao() {
  const { cadastrar, login, LoginGoogle } = useAuth();

  const [erro, setErro] = useState(null);
  const [modo, setModo] = useState<"login" | "cadastro">("login");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg);
    setTimeout(() => setErro(null), tempoEmSegundos * 1000);
  }

  async function submit() {

    try {

      if (modo === "login") {
      await  login(email, senha)
  
      } else {
       await cadastrar(email, senha)
        
      }

    } catch (err) {
exibirErro(err?.message ?? "Erro Desconhecido")
    }

  }

  return (
    <div className={`flex   h-screen justify-center items-center`}>
      <div className="hidden md:block md:w-1/2">
        
        <img
          src="https://source.unsplash.com/random"
          alt="imagem tela autenticação"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="m-10 w-full md:w-1/2">
        <h1
          className={`
    text-3xl font-bold mb-5 
    
    `}
        >
          {modo === "login"
            ? "Entre com sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>

        {erro ? (
          <div
            className={`
flex items-center 
bg-red-500 text-white py-3 px-5 my-2
 border border-red-800 rounded-lg
`}
          >
            {Warning(7)}
            <span className={`ml-5`}>{erro}</span>
          </div>
        ) : (
          false
        )}

        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />

        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button
          onClick={submit}
          className={`first-letter:
    w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6
    
    `}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className={`my-6 w-full bg-gray-900`} />

        <button
          onClick={LoginGoogle}
          className={`
    w-full bg-red-600 hover:bg-red-400 text-white rounded-lg px-4 py-3 
    
    `}>
        Entrar com o Google
        
        </button>

        {modo === "login" ? (
          <p className={`mt-8`}>
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className={`
    text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Crie sua Conta gratuitamente
            </a>
          </p>
        ) : (
          <p className={`mt-8`}>
            Já possui conta?
            <a
              onClick={() => setModo("login")}
              className={`
    text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}
            >
              {" "}
              Entrar com sua Conta
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
