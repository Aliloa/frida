import "./delete.css";
export const Delete = ({ id }) => {
    const API = `http://localhost/frida/api/reservations.php` + '?id=' + id;
    
    const supprimerReservation = (e) => {
            
        fetch(API, {
            method: 'DELETE',
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête.');
            }
        }).catch(error => {
            console.error('Erreur lors de la requête:', error);
        });
        window.location.reload();
    }    

    return <button onClick={supprimerReservation}><img src="Delete.svg" alt="supprimer" /></button>;
}

export default Delete;
