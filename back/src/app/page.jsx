"use client";

import { Tableau } from "@/components/affichage/Tableau";
import { Formulaire } from "@/components/insertion/Formulaire";
import { Nav } from "@/components/nav/Nav";
import React from "react";
import Connexion from "@/components/connexion/Connexion";

import { useState, useEffect } from 'react';



const Home = () => {

  return (
      <section>
      <h1>TABLEAU</h1>
      <Connexion />
    </section>
  )

};

export default Home;
