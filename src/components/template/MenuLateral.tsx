import MenuItem from "./MenuItem";
import { icone, Ajustes, notificacao, Logout } from "../icons/index";
import Logo from "./Logo";
import useAuth from '../../data/hooks/UseAuth'

export default function MenuLateral() {

const { logout } = useAuth()

  return (
    <aside className={`
    bg-gray-200 text-gray-800
    dark:bg-gray-900 dark:text-gray-200
    
    flex flex-col`}>
      <div
        className={`flex flex-col justify-center items-center
         bg-gradient-to-r from-indigo-400 to-purple-900 h-20 w-20`}
      >
        <Logo />
      </div>

      <ul className={`flex-grow`}>
        <MenuItem url="/" texto="Inicio" icone={icone} />
        <MenuItem url="/Ajustes" texto="ajustes" icone={Ajustes} />
        <MenuItem url="/Notificacoes" texto="notificação" icone={notificacao} />
      </ul>

      <ul>
        <MenuItem 
     
        onClick={logout} 
        texto="Sair" icone={Logout}
        className={`text-red-700 dark:text-red-400
        hover:bg-red-600 hover:text-white dark:hover:bg-white`} />
       
      </ul>
    </aside>
  );
}
