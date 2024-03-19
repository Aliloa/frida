import React, { useState } from 'react';

const Connexion = () => {
  const [login, setLogin] = useState('');
  const [mdp, setMdp] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    try {
      const response = await fetch('/traite_login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, mdp }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.success) {
        // Authentication successful, perform desired action (e.g., redirect)
        console.log('Authentication successful');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred during authentication');
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Login" />
      <input type="password" name="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} placeholder="Password" />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Connexion;
