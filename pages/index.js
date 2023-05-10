import styles from "./index.module.css";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";

export default function IndexPage() {
    return (
        <div className={styles.posts}>
            {/*Titel*/}
            <h1>Schützenstube Platten</h1>
            {/*Bildergallerie (Bootstrap)*/}
            <Carousel>
                <Carousel.Item>
                    <Image width="1000" height="500"
                           className="d-block w-100"
                           src="/restaurant-schutzenstube-62671.jpg"
                           alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image width="1000" height="500"
                           className="d-block w-100"
                           src="/Schliern-bei-Köniz,Plattenweg-62.jpg"
                           alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Image width="1000" height="500"
                           className="d-block w-100"
                           src="/reastaurant-vorne.jpg"
                           alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <aside className={styles.aside}>Menükarte</aside>
            {/*Menu kärtchen (Bootstrap)*/}
            <section>
                <Container>
                    <Row>
                        <Col sm>
                            <article>
                                <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Montag</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.menuTitle}>
                                                <Table responsive="sm">
                                                    <thead className={styles.alignCenter}>
                                                    <tr>
                                                        <th>Gericht1</th>
                                                        <th>Gericht2</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className={styles.alignCenter}>
                                                    <tr>
                                                        <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                                        <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </article>
                        </Col>
                        <Col sm>
                            <article>
                                <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Dienstag</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.menuTitle}>
                                                <Table responsive="sm">
                                                    <thead className={styles.alignCenter}>
                                                    <tr>
                                                        <th>Gericht1</th>
                                                        <th>Gericht2</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className={styles.alignCenter}>
                                                    <tr>
                                                        <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                                        <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </article>
                        </Col>
                        <Col sm>
                            <article>
                                <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Mittwoch</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.menuTitle}>
                                                <Table responsive="sm">
                                                    <thead className={styles.alignCenter}>
                                                    <tr>
                                                        <th>Gericht1</th>
                                                        <th>Gericht2</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className={styles.alignCenter}>
                                                    <tr>
                                                        <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                                        <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </article>
                        </Col>
                        <Col sm>
                            <article>
                                <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Donnerstag</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.menuTitle}>
                                                <Table responsive="sm">
                                                    <thead className={styles.alignCenter}>
                                                    <tr>
                                                        <th>Gericht1</th>
                                                        <th>Gericht2</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className={styles.alignCenter}>
                                                    <tr>
                                                        <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                                        <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </article>
                        </Col>
                        <Col sm>
                            <article>
                                <Accordion className={styles.accordion} defaultActiveKey={['0']} alwaysOpen>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Freitag</Accordion.Header>
                                        <Accordion.Body>
                                            <div className={styles.menuTitle}>
                                                <Table responsive="sm">
                                                    <thead className={styles.alignCenter}>
                                                    <tr>
                                                        <th>Gericht1</th>
                                                        <th>Gericht2</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className={styles.alignCenter}>
                                                    <tr>
                                                        <td><p>000.-</p><span>Vegi &#10005;</span></td>
                                                        <td><p>000.-</p><span>Vegi &#10003;</span></td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </article>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/*Öffnungszeiten*/}
            <section className={styles.openingTimes}>
                <aside className={styles.aside}>Öffnungszeiten</aside>
                <br/>
                <aside>Montag-Freitag</aside>
                <p>13:00-20:00</p>
                <br/>
                <aside>Samstag</aside>
                <p>15:00-22:00</p>
                <br/>
                <aside>Sonntag</aside>
                <p>Geschlossen</p>
            </section>
            <aside className={styles.aside}>Standort</aside>
            {/*Google Maps*/}
            <div className={styles.mapResponsive}>
                <iframe
                    src="https://maps.google.ch/maps?q=Plattenweg%2062%203098%20Schliern&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%" height="100%"></iframe>
            </div>
            <div className={styles.openingTimes}>
                <aside className={styles.aside}>Reservationen unter:</aside>
                {/*Kontaktmöglichkeiten*/}
                <p>+41 xx xxx xx xx <br/>oder<br/><Link href="/kontakt">Kontaktformular</Link></p>
                <hr style={{"borderWidth": "100%"}}/>
                <aside>Adresse</aside>
                <p>Plattenweg 62 <br/>3098 Schliern</p>
            </div>
        </div>
    )
}