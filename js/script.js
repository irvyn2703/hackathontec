const btns = document.getElementsByClassName('btnTarjeta');
const url = 'http://localhost:8080/enfermeras';

const fetchData = () => {
    fetch(url, { method: 'GET', mode: 'cors' })  // Método GET explícito y modo cors
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const seccionTarjetas = document.querySelector('.tarjetas');
            seccionTarjetas.innerHTML = '';
            let num = 0;
            data.forEach(item => {
                const tarjeta = document.createElement('a');
                tarjeta.className = 'btnTarjeta';
                tarjeta.href = `acerca.html?id=${num}`;
                num++;

                // Insertar el HTML con los datos dinámicos
                tarjeta.innerHTML = `
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4 imagenT">
                                <img src="./img/enfermera.png" style="width: 100%; height: 100%; border-radius: 100%;" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${item.nombre} ${item.apellidoPaterno} ${item.apellidoMaterno}</h5>
                                    <p class="card-text">${item.especialidad}</p>
                                    <p class="card-text">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </p>
                                    <p>${item.telefono}</p>
                                </div>
                            </div>
                        </div>
                    </div>`;

                seccionTarjetas.appendChild(tarjeta);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud fetch:', error);
        });
};

document.addEventListener('DOMContentLoaded', fetchData);
