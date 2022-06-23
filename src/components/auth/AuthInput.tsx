interface AuthInputProps {
    label: string
    valor: any
    tipo?: 'text' | 'email' | 'password'
    obrigatorio: boolean
    valorMudou: (NovoValor: any) => void
}

export default function AuthInput(props: AuthInputProps){
  
  
  
  
    return (
        <div className={`flex flex-col mt-5` }>
            <label>{props.label}</label>
            <input 
            type={props.tipo?? 'text'}
            value={props.valor}
            onChange={e => props.valorMudou?.(e.target.value)}
            required={props.obrigatorio}
            className={`py-3 px-4 rounded-lg bg-gray-200 mt-2 
            border focus:border-blue-700 focus:bg-white
            focus:outline-none
            
            `}
            
            
            />
        </div>
    )
}