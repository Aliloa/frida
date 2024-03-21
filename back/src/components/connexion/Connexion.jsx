import React, { useState } from 'react';

const Connexion = () => {
  const [login, setLogin] = useState('');
  const [mdp, setMdp] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('login', login);
    formData.append('mdp', mdp);

    fetch('http://localhost/frida/api/authorization.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          localStorage.setItem('token', data.token);
          console.log(data.token)
          window.location.href = '/tableau';
        } else {
          alert(data.error);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
      <input type="password" name="mdp" value={mdp} onChange={(e) => setMdp(e.target.value)} />
      <button type="submit">Valider</button>
    </form>
  );
};

export default Connexion;
