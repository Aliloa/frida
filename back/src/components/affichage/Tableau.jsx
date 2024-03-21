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
            const token = localStorage.getItem('token'); // Retrieve token from localStorage
            console.log('Token:', token);
            const result = await fetch(API, {
                headers: {
                    'Authorization': `Bearer ${token}` // Include token in the request headers
                }
            });
            if (result.ok) {
                const data = await result.json();
                setReservations(data); // Set fetched data to state
            } else {
                console.error('Error fetching data:', result.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, []);

    
    return (
        <tbody>
            <h1>nsm</h1>
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