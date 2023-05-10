import Link from "next/link";
import styles from "./impressum.module.css"

export default function ImpressumPage() {
    return (
        <>
            <h1>Impressum</h1>
            <p  className={styles.image}><img width="100" src={"/favicon.ico"} alt="logo"></img></p>
            <article style={{textAlign: "center"}}>
                <h1 className={styles.title}>Restaurant Schuetzenstube Schliern</h1>
                <p>Plattenweg 62</p>
                <p>3098 Schliern b. Köniz</p>
                <p>Telefonnummer: +41 xx xxx xx xx</p>
                {/* eslint-disable-next-line react/no-unknown-property */}
                <p typeof={"email"}>Email: remo-schuetzenstube@outlook.com</p>
                <br/>
                <h2 className={styles.title}>Inhaber</h2>
                <p>Ramadan Shala</p>
                <br/>
            </article>
            <h1 className={styles.title}>Quellen</h1>
            <div className={styles.posts}>
                <Link style={{textAlign: "center"}} href="https://react-bootstrap.github.io/">React Bootstrap</Link>
                <Link style={{textAlign: "center"}} href="https://www.google.ch/maps">Google Maps</Link>
                <Link style={{textAlign: "center"}} href="https://www.emailjs.com/">E-MailJS</Link>
            </div>
        </>
    )
}