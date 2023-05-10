import styles from "./Header.module.css"
import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Header({children, props}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <header className={styles.header}>
                <div>
                    {/*Hamburger Menu*/}
                    <Button variant="outline-dark" onClick={handleShow} className="me-2">☰</Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Restaurant Schuetzenstube</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Link id="link" href="/impressum" passHref className={styles.standort}>Impressum</Link>
                            <br/>
                            <Link id="link" href="/aboutUs" passHref className={styles.standort}>Über mich</Link>
                            <br/>
                            <Link id="link" href="/kontakt" passHref className={styles.standort}>Kontakt</Link>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                {/*Titel*/}
                {children}
                <div className={styles.headerDiv}>
                    {/*Link zu Standort*/}
                    <Link id="link"
                          href="https://www.google.com/maps/dir//Plattenweg+62,+3098+K%C3%B6niz/@46.9029909,7.423146,17z/data=!4m17!1m7!3m6!1s0x478e3871754b83f1:0x15fbf7817f39ec80!2sPlattenweg+62,+3098+K%C3%B6niz!3b1!8m2!3d46.9029909!4d7.423146!4m8!1m0!1m5!1m1!1s0x478e3871754b83f1:0x15fbf7817f39ec80!2m2!1d7.423146!2d46.9029909!3e3"
                          passHref className={styles.standort}>Standort</Link>
                    <Image className={styles.locationImg} src={"/location_on_FILL0_wght400_GRAD0_opsz48.png"} width={30}
                           height={30} alt="image"></Image>
                </div>
            </header>
        </>
    )

}