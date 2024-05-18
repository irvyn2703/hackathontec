document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementsByClassName('boton')[0];

    btn.addEventListener('click', enviarDatos);

    function enviarDatos() {
        const urlParams = new URLSearchParams(window.location.search);
        const nuevoElemento = {
            'nombre': urlParams.get('nombre'),
            'apellidoPaterno': urlParams.get('apellidoPaterno'),
            'apellidoMaterno': urlParams.get('apellidoMaterno'),
            'telefono': urlParams.get('telefono'),
            'especialidad': urlParams.get('especialidad')
        }

        const url = 'http://localhost:8080/enfermeras';

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(nuevoElemento)
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error('Hubo un problema con la solicitud de la base fetch', error)
        })
    }
});
