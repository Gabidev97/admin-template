import Link from '../../../node_modules/next/link'
import useAuth from '../../data/hooks/UseAuth'


interface AvatarProps {
    className?: string
}

export default function Avatar(props: AvatarProps){
    const { usuario} = useAuth()
    return (
       <Link href="/perfil">
        <img
        src={usuario?.imagemURL ?? '/images/avatar.svg'}
         alt="Avatar" 
         className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}
         />
       </Link>
    )
}