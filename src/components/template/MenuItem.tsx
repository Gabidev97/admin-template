import Link from "../../../node_modules/next/link"

interface MenuProps {
  url?: string 
  texto: string
  icone: any
  className?: string
  onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuProps) {
 function RendezirarLink(){
  return (
    <a className={`
    flex flex-col justify-center
     items-center h-20 w-20
    text-gray-600
    dark:text-gray-200
    ${props.className}`}>
    {props.icone}
      <span className={`text-xs  font-light `}>
          {props.texto}
      </span>
  </a>
  )
 }
 
 
  return (
    <li onClick={props.onClick} className={`
    hover:bg-gray-300  dark:hover:bg-gray-800 
    cursor-pointer` }>

      {props.url ? (
      <Link href={props.url}>
    {   RendezirarLink()}
         </Link>
      ) : (
        RendezirarLink()
      )}
  
    </li>
  );
}
