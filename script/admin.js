import React, { useState } from 'react';

const Connexion = () => {
  // Déclarer les états locaux pour suivre les valeurs des champs de formulaire
  const [login, setLogin] = useState('');
  const [mdp, setMdp] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le comportement de soumission par défaut du formulaire
    
    // Créer un objet FormData pour envoyer les données du formulaire
    const formData = new FormData();
    formData.append('login', login);
    formData.append('mdp', mdp);

    // Envoyer les données du formulaire à l'API via fetch
    fetch('authorization.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Stocker le jeton dans le stockage local
        localStorage.setItem('token', data.token);
        // Rediriger ou effectuer d'autres actions
        window.location.href = '/frida/api/reservations.php';
      } else {
        alert(data.error);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='login' value={login} onChange={e => setLogin(e.target.value)} />
      <input type="password" name='mdp' value={mdp} onChange={e => setMdp(e.target.value)} />
      <button type='submit'>Valider</button>
    </form>
  );
};

export default Connexion;