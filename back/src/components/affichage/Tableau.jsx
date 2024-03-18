"use client";
import { useEffect, useState } from "react";

import { Delete } from "../supprimer/Delete";

export const Tableau = () => {

    //RECUPERER L'API
    const API = `http://localhost/frida/api/reservations.php`;
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(API);
                const data = await result.json();
                setReservations(data); // Set fetched data to state
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
    return (
        <tbody>
                    {reservations.map((reservation, index) => (
                        <tr key={index}>
                            <td>{reservation.id}</td>
                            <td>{reservation.nom}</td>
                            <td>{reservation.mail}</td>
                            <td>{reservation.date}</td>
                            <td><Delete id={reservation.id}/></td>
                        </tr>
                    ))}
                </tbody>
    );
}