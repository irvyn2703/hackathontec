const btns = document.getElementsByClassName('btnTarjeta');
const url = 'http://10.49.175.250/enfermeras';

const fetchData = () => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos obtenidos:', data);
            const contentDiv = document.getElementById('content');
            contentDiv.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
};

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', fetchData);
}
