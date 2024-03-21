"use client";
import { useEffect, useState } from "react";
import "./tableau.css";

import { Delete } from "../supprimer/Delete";

const formatDateString = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}`;
};

const formatTimeString = (timeString) => {
    const [hour, minute] = timeString.split(":");
    return `${hour}:${minute}`;
};

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
            // mettre la date au bon format
            data.forEach(reservation => {
            reservation.date = formatDateString(reservation.date);
            reservation.heure = formatTimeString(reservation.heure);
            });
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
        <div className="container">
        <table>
            <thead>
                <tr>
                    <th className="corner">ID</th>
                    <th>Nom prenom</th>
                    <th>E-mail</th>
                    <th>Date</th>
                    <th>Heure</th>
                    <th>Billet adulte</th>
                    <th>Billet enfant</th>
                    <th className="corner">Supprimer</th>
                </tr>
            </thead>
        <tbody>
                    {reservations.map((reservation, index) => (
                        <tr key={index}>
                            <td>{reservation.id}</td>
                            <td>{reservation.prenom} {reservation.nom}</td>
                            <td>{reservation.mail}</td>
                            <td>{reservation.date}</td>
                            <td>{reservation.heure}</td>
                            <td>{reservation.adulte}</td>
                            <td>{reservation.enfant}</td>
                            <td><Delete id={reservation.id}/></td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>
    );
}