document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementsByClassName('boton')[0];

    btn.addEventListener('click', enviarDatos);

    function enviarDatos() {
        const urlParams = new URLSearchParams(window.location.search);
        const tipoUsuario = urlParams.get('tipoUsuario'); // Esto no se usa en el código, considera si realmente necesitas obtenerlo

        const direccion = document.querySelector('.campos input:nth-child(1)').value;
        const estado = document.querySelector('.campos input:nth-child(2)').value;
        const municipio = document.querySelector('.campos input:nth-child(3)').value;
        const cp = document.querySelector('.campos input:nth-child(4)').value;
        const cedula = document.querySelector('.campos input:nth-child(5)').value;
        const especialidad = document.querySelector('.campos input:nth-child(6)').value;

        const nuevoElemento = {
            'nombre': urlParams.get('nombre'),
            'apellidoPaterno': urlParams.get('apellidoPaterno'),
            'apellidoMaterno': urlParams.get('apellidoMaterno'),
            'telefono': urlParams.get('telefono'),
            'especialidad': especialidad
        };

        const url = 'http://localhost:8080/enfermeras';

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoElemento)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // Redirigir a una nueva página después de recibir una respuesta exitosa
            window.location.href = 'index.html'; // Cambia 'nueva_pagina.html' por la URL deseada
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch', error);
        });
    }
});
