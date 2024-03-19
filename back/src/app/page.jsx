"use client";

import { Tableau } from "@/components/affichage/Tableau";
import { Formulaire } from "@/components/insertion/Formulaire";
import { Nav } from "@/components/nav/Nav";
import React from "react";
import Connexion from "@/components/connexion/Connexion";

import { useState, useEffect } from 'react';



const Home = () => {

  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch('/components/admin.php');
        const data = await response.json();

        if (data.success) {
          setAuthenticated(true);
        } else {
          setError('Authentication failed');
        }
      } catch (error) {
        console.error('Error during authentication:', error);
        setError('An error occurred during authentication');
      }
    };

    checkAuthentication();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!authenticated) {
    return <div>Authenticating...</div>;
  }
  
  return (
      <section>
      <h1>TABLEAU</h1>
      <Tableau />
    </section>
  )

};

export default Home;
