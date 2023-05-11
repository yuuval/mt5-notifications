import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getPairById} from "@lib/api";
import styles from "./index.module.css"

export default function PairIdPage({session}) {
    const router = useRouter()
    const {id} = router.query
    const [pair, setPair] = useState(null)

    useEffect(() => {
        if (!id) return
        const loadPair = async () => {
            try {
                const pair = await getPairById(id)
                setPair(pair.response[0])
            } catch (e) {
                if (e.status === 404) router.push("/404")
            }
        }
        loadPair()
    }, [id, router])

    if (!pair) {
        return <div>Loading...</div>;
    }

    function addTwoHoursToDateString(dateString) {
        const originalDate = new Date(dateString);
        const twoHoursLater = new Date(originalDate);
        twoHoursLater.setUTCHours(originalDate.getHours());
        twoHoursLater.toISOString().replace('T', ' ').substring(0, 19);
        return twoHoursLater.getHours() + ":" + twoHoursLater.getMinutes() + ":" + twoHoursLater.getUTCSeconds()
    }

    const colorHandling = () => {
        if (pair.cp.includes("-")) {
            return "red";
        } else if (pair.cp === 0) {
            return "black"
        } else {
            return "green";
        }
    }


    return pair && (

        <div className={styles.key}>
            <h1>{pair.s}</h1>
            <p>Last Time Updated: {addTwoHoursToDateString(pair.tm)}</p>
            <p>Price: {pair.c} <p style={{color: colorHandling()}}>{pair.cp}</p></p>
        </div>
    )
}