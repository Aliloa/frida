"use client";
import React, { useState, useEffect } from 'react';
import { Delete } from '../supprimer/Delete';

export const Statistiques = () => {
  const [statistiques, setStatistiques] = useState(null);

  useEffect(() => {
    const API = `http://frida.fatimarajan.fr/api/reservations.php`;

    fetch(API)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la requête.');
        }
        return response.json();
      })
      .then(data => {
        setStatistiques(data);
      })
      .catch(error => {
        console.error('Erreur lors de la requête:', error);
      });
  }, []);

  return (
    <div>
      <h1>Statistiques</h1>
      {statistiques ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Mail</th>
              <th>Date</th>
              <th>Heure</th>
              <th>Adulte</th>
              <th>Enfant</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {statistiques.map((reservation, index) => (
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
      ) : (
        <p>Chargement des statistiques...</p>
      )}
    </div>
  );
};
