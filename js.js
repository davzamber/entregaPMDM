

function ejecutar(){
  document.getElementById("buscar").onclick=showTime;
}
window.onload = ejecutar;

function callApi(idCiudad, idPais) {
    const key = 'baa3eef4b4ac0f3e67ed933da5cb4ce5';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${idCiudad},${idPais}&appid=${key}&lang=es`;
    fetch(url)
        .then(function (resp) { 
          return resp.json() 
        }) 
        .then(function (data) {
            tiempo(data);
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La petición no ha podido ser procesada"',
          })
        });
}

function showTime(evt) {
  
  evt.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let ciudad = document.getElementById("ciudad").value;
  let pais = document.getElementById("pais").value;
  errorDatos(nombre, ciudad, pais);
  callApi(ciudad, pais);
}
function tiempo(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
    Swal.fire({
      title: 'Resultados',
      html: 'Actualmente en '+d.name+'<br>Temperatura: '+celcius+'°<br>Fahrenheit: '+fahrenheit+'°',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
  }
function errorDatos(idNombre, idCiudad, idPais){
    if( idNombre == null || idNombre.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha surgido un error',
      })
      };
    if( idCiudad == null || idCiudad.length == 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha surgido un error',
      })
      };
    if( idPais == null || idPais.length == 0 || /^\s+$/.test(idPais) ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ha surgido un error',
      })
      };

}
