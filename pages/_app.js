import Header from "@components/Header"
import useSession from "@lib/session"
import Link from "next/link"
import "./_app.css"
import "bootstrap/dist/css/bootstrap.min.css"
import SSRProvider from 'react-bootstrap/SSRProvider'
import Footer from "@components/Footer";

export default function App({Component, pageProps}) {
    const session = useSession()
    const newPageProps = {
        ...pageProps,
        session
    }
    return (
        <>
            <Header>
                <Link className="link" href="/" passHref>
                    Schützenstube Platten
                </Link>
            </Header>
            {/*Alle Dateien die im Pages verzeichnis sind, werden in diesem Bereich angezeigt.*/}
            <main className="page">
                <SSRProvider>
                    <Component {...newPageProps} />
                </SSRProvider>
            </main>
            <Footer/>
        </>
    )
}