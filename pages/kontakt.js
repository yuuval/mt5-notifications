import {useRouter} from "next/router";
import {useRef, useState} from "react";
import styles from "./KontaktForm.module.css"
import Form from 'react-bootstrap/Form';
import {isBefore} from 'date-fns'
import emailjs from "@emailjs/browser";

{/*Model des Error Handlings*/
}
const defaultModel = {
    title: "", message: "", reservationTime: "", email: ""
}

function validateModel(formular) {
    {/*Funktion die überprüft ob die unten angegebene Validierung stimmt, falls nicht erscheint ein Text auf*/
    }
    const errors = {
        title: "", message: "", reservationTime: "", email: ""
    }
    let isValid = true;

    {/*Falls unter 5 Zeichen*/
    }
    if (formular.title.trim().length < 5) {
        errors.title = "Titel darf nicht < 5 Zeichen sein"
        isValid = false;
    }
    {/*Falls unter 5 Zeichen*/
    }
    if (formular.message.trim().length === null || formular.message.trim().length < 5) {
        errors.message = "Message darf nicht <5 Zeichen sein"
        isValid = false;
    }
    let date = new Date();
    /* Date format you have */
    let dateMDY = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    console.log(dateMDY)
    /* Date converted to MM-DD-YYYY format */
    if (isBefore(new Date(dateMDY), new Date(formular.reservationTime)) === false) {
        errors.reservationTime = "Reservationszeit muss mindestens einen Tag später gewählt werden"
        isValid = false
    }
    {/*E-Mail nicht leer*/
    }
    if (formular.email.trim().length === 0) {
        errors.email = "E-Mail darf nicht leer sein"
        isValid = false;
    }

    return {errors, isValid}
}

export default function KontaktForm() {
    {/*React Feature. Ist wie ein Navigator, der dich durch das Web navigieren kann*/
    }
    const router = useRouter()
    {/*Getter und Setter im Frontend*/
    }
    const [formular, setFormular] = useState(defaultModel)
    const [isLoading, setIsLoading] = useState(false)
    const [errors, setErrors] = useState(defaultModel)
    {/*Refferenziert auf angegebenes <form>*/
    }
    const form = useRef();

    {/*Falls Änderungen in den Eingabefeldern gemacht werden, werden diese hier entdeckt und die Werte neu gesetzt*/
    }
    const handleChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        setFormular({
            ...formular, [field]: value
        })
    }

    {/*Beim Abschicken des Formulares*/
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setErrors(defaultModel)

        {/*Aufruf Validierungsmethode*/
        }
        const result = validateModel(formular)
        if (!result.isValid) {
            setErrors(result.errors)
            setIsLoading(false)
            return
        }
        {/*Falls Alles ok*/
        }
        // Email funktion und alert der nach home führt.
        if (result.isValid) {
            // Sendet Email mit angegebenen Daten.
            emailjs.sendForm('service_pjxcw8w', 'template_xrzmdbc', form.current, 'UjqS-5rIq1BHm8GNV')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            // Alert Nachricht
            alert("Die Nachricht wurde erfolgreich gesendet. Der Besitzer wird Sie so schnell wie möglich kontaktieren.")
            // Homepage navigation
            router.push("/")
        }
        setIsLoading(false)
    }

    return (
        <>
            <form ref={form} onSubmit={handleSubmit}>
                <fieldset className={styles.form}>
                    <p>Vor und Nachname*</p>
                    <Form.Control type="text" name="title" onChange={handleChange} value={formular.title} required/>
                    {errors.title && <div className={styles.error}>{errors.title}</div>}
                </fieldset>

                <fieldset className={styles.form}>
                    <p>Nachricht*</p>
                    <Form.Control name="message" onChange={handleChange} value={formular.message} required/>
                    {errors.message && <div className={styles.error}>{errors.message}</div>}
                </fieldset>

                <fieldset className={styles.form}>
                    <p>Reservationszeitpunkt*</p>
                    <Form.Control type="date" name="reservationTime" onChange={handleChange}
                                  value={formular.reservationTime} required/>
                    {errors.reservationTime && <div className={styles.error}>{errors.reservationTime}</div>}
                </fieldset>

                <fieldset className={styles.form}>
                    <p>E-Mail*</p>
                    <Form.Control type="email" name="email" onChange={handleChange} value={formular.email} required/>
                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                </fieldset>

                <button disabled={isLoading}>
                    {isLoading ? "...Loading" : "Submit"}
                </button>
            </form>
        </>
    )
}


