import styles from "./index.module.css";
import {useState, useEffect} from "react";
import {getAllPairs} from "@lib/api";
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Link from "next/link";


export default function IndexPage() {

    const [pairs, setPairs] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const loadPairs = async () => {
            try {
                const pair = await getAllPairs()
                setPairs(pair.response)
                console.log(pairs.length)
            } catch (e) {
                console.log(e)
            }
        }
        loadPairs()
    }, [pairs])

    return (
        <div className={styles.posts}>
            <Form.Control className={styles.searchBar} type={"text"} placeholder="Search..." onChange={event => {
                setSearchTerm(event.target.value)
            }}/>
            {
                pairs.filter(pair => pair.symbol.toLowerCase().includes(searchTerm.toLowerCase())).map((pair) => {
                    return (
                        <div key={pair.id} className={styles.key}>
                            <Link href={`/pairs/${pair.id}`}>
                                <h1 className={styles.title}>{pair.symbol}</h1>
                            </Link>
                        </div>
                    )
                })

            }
        </div>
    )
}