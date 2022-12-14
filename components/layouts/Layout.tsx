import { FC } from "react"
import Head from "next/head"
import { Navbar } from '../ui';

interface Props {
    children: React.ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {



    return (
        <>
            <Head>
                <title>{title || 'Pokemon App'}</title>
                <meta name="author" content="Johan Gonzalez" />
                <meta name="description" content={`Información del pokemon ${title}`} />
                <meta name="keywords" content={`${title} pokemon, pokedex, pokeapi`} />

                <meta property="og:title" content={`Información sobre el ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={`${ origin }/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0 20px',
            }}>
                {children}
            </main>
        </>
    )
}
