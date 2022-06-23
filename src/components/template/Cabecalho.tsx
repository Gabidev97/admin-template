import Titulo from '../template/Titulo'
import BotaoAlternar from '../template/Botao'
import useAppData from '../../data/hooks/UseAppData'
import Avatar from './Avatar'


interface  CabecalhoProps{
    titulo: string
    subtitulo: string

}
     


export default function Layout(props: CabecalhoProps){
    const {tema, alternarTema} = useAppData()

    
    return (
        <div className={`flex`}>
             <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center `}>
             <BotaoAlternar tema={tema} alternarTema={alternarTema}/>
             <Avatar className={`ml-4`}/>
            </div>
 
        </div>
    )
}