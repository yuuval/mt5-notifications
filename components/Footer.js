import styles from "./Footer.module.css"
import Container from 'react-bootstrap/Container'
import {Col, Row} from "react-bootstrap";
import {SocialIcon} from 'react-social-icons';

export default function Footer() {
    return (
        <div>
            {/*Durchgezogene Linie*/}
            <hr style={{"borderWidth": "100%"}}/>
            {/*Footer Inhalt*/}
            <Container>
                <Row>
                    <Col style={{textAlign: "left"}}><img src="/favicon.ico" alt="logo" width="137px"
                                                          height="80px"/></Col>
                    <Col style={{textAlign: "center"}}><p className={styles.openingTimes}>Ramadan Shala</p></Col>
                    <Col style={{textAlign: "right", marginBottom: "1em"}}><SocialIcon style={{height: 25, width: 25}}
                                                                                       url="https://twitter.com/"/><br/>
                        <SocialIcon style={{height: 25, width: 25}} url="https://instagram.com/"/><br/>
                        <SocialIcon style={{height: 25, width: 25}} url="https://whatsapp.com/"/></Col>
                </Row>
            </Container>
        </div>
    )
}