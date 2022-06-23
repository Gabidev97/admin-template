import Head from 'next/head'
import router from 'next/router'
import loading from '../../../public/images/loading.gif'
import useAuth from '../../data/hooks/UseAuth'
import Image from 'next/image'

export default function ForcarAutenticacao(props) {

    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {
        return (
            <>
                <Head>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                if(!document.cookie?.includes("template-admin-dev-auth")) {
                                    window.location.href = "/Autenticacao"
                                }
                            `
                        }}
                    />
                </Head>
                {props.children}
            </>
        )
    }

    function renderizarCarregando() {
        return (
            <div className={`
                flex justify-center items-center h-screen
            `}>
                <Image src={loading} />
            </div>
        )
    }

    if(!carregando && usuario?.email) {
        return renderizarConteudo()
    } else if(carregando) {
        return renderizarCarregando()
    } else {
        router.push('/Autenticacao')
        return null
    }
}