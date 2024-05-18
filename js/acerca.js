// Definir la URL fuera de la función fetchData
const url = 'http://localhost:8080/enfermeras';

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log(id);
    fetchData(id);
});

const fetchData = (id) => {
    fetch(url, { method: 'GET', mode: 'cors' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            const nombre = document.getElementById('nombre');
            const puesto = document.querySelector('.puesto');
            const telefono = document.querySelector('.telefono');

            let temp = data[id].nombre;
            temp += ' ' + data[id].apellidoPaterno;
            temp += ' ' + data[id].apellidoMaterno;

            nombre.innerHTML = temp;
            puesto.innerHTML = data[id].especialidad;
            telefono.innerHTML = data[id].telefono;
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
};
