import MenuLateral from "./MenuLateral";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import useAppData from "../../data/hooks/UseAppData";
import ForcarAutenticacao from "../auth/Autenticacao";

interface layoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: layoutProps) {
const {tema} = useAppData()

  return (
    <ForcarAutenticacao>
    <div className={`${tema} flex  h-screen w-screen`}>
      <MenuLateral />
      <div className={`flex flex-col w-full p-7 
      dark:bg-gray-800 dark:text-grey-200`}>
      <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
      <Conteudo>
        {props.children}
      </Conteudo>
      </div>
     
    </div>
    </ForcarAutenticacao>
  )
}
