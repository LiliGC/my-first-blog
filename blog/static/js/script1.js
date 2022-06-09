// Creamos array con los meses del año//
const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días de la semana //
const dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
// Creamos el objeto fecha instanciándolo con la clase Date//
const fecha = new Date();

function horafecha() {
    Swal.fire({
        title: 'Fecha y hora actuales',
        text: "Hoy es" + " " + dias_semana[fecha.getDay()] + ', ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getFullYear() + " y son las " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds(),
        imageUrl: 'https://cdn.datosmundial.com/pics/uhr.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
}; //Conteo para el nuevo año
const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Jan 1, 2023 00:00:00').getTime(),
    x = setInterval(function() {

        let now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById('dias').innerText = Math.floor(distance / (day)),
            document.getElementById('horas').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutos').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('segundos').innerText = Math.floor((distance % (minute)) / second);

    }, second)