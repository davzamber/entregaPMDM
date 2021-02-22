window.onload = () => {
    document.getElementById("buscar").addEventListener('click', buscarTiempo);
};

function buscarTiempo(evt) {
    evt.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const ciudad = document.getElementById("ciudad").value;
    const pais = document.getElementById("pais").value;
    datos(nombre, ciudad, pais);

    if( nombre.length > 0 && pais.length > 0 && ciudad.length > 0 ){
        weatherBalloon(ciudad, pais);
      }
    
    if( nombre.length == 0 && pais.length == 0 && ciudad.length == 0 ) {
          
      Swal.fire({
        title: '¡Hubo un error!',
        text: 'Por favor, rellene los campos',
        icon: 'error',
        confirmButtonText: 'Cool'
      })

      }else if(nombre.length == 0 && pais.length == 0){
        Swal.fire({
          title: '¡Hubo un error!',
          text: 'Por favor, escriba su nombre y el país',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      }else if(pais.length == 0 && ciudad.length == 0 ){
        Swal.fire({
          title: '¡Hubo un error!',
          text: 'Por favor, escriba el país y ciudad',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      
      }else if(nombre.length == 0 && ciudad.length == 0 ){
        Swal.fire({
          title: '¡Hubo un error!',
          text: 'Por favor, escriba su nombre y la ciudad',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      }else if(nombre.length == 0){
        Swal.fire({
          title: '¡Hubo un error!',
          text: 'Por favor, escriba su nombre',
          icon: 'error',
          confirmButtonText: 'Cool'
        })

      }else if(ciudad.length == 0){
        Swal.fire({
          title: '¡Hubo un error!',
          text: 'Por favor, escriba la ciudad',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        
      }else if(pais.length == 0 ){

        Swal.fire({
          title: '¡Hubo un error!',
          text: 'Por favor, escriba el país',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      }
    
}

function weatherBalloon(idCiudad, idPais) {
    const key = 'baa3eef4b4ac0f3e67ed933da5cb4ce5';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${idCiudad},${idPais}&appid=${key}&lang=es`)
        .then(function (resp) { return resp.json() }) 
        .then(function (data) {
            verTiempo(data);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
        });
}

function verTiempo(data) {
  
    var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
    var maxCelcius = Math.round(parseFloat(data.main.temp_max) - 273.15);
    var minCelcius = Math.round(parseFloat(data.main.temp_min) - 273.15);
    Swal.fire({
      title: 'Resultados',
      html: 'Actualmente en '+data.name+'<br>Temperatura: '+celcius+'°<br>Máximo: '+maxCelcius+'°'+'<br>Mínimo: '+minCelcius+'°',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    })
  }
function datos(idNombre, idCiudad, idPais){
    if( idNombre == null || idNombre.length == 0 || /^\s+$/.test(idNombre) ) {
        console.log("Error de nombre");
        document.getElementById('nombre').style.border = "1px solid #f00";
        document.getElementById('nombreIncorrecto').style.display = "block";
        document.getElementById('nombreCorrecto').style.display = "none";
      } else {
        document.getElementById('nombre').style.border = "1px solid #198754";
        document.getElementById('nombreCorrecto').style.display = "block";
        document.getElementById('nombreIncorrecto').style.display = "none";
      };
    if( idCiudad == null || idCiudad.length == 0 || /^\s+$/.test(idCiudad) ) {
        console.log("Error en la ciudad");
        document.getElementById('ciudad').style.border = "1px solid #f00";
        document.getElementById('ciudadIncorrecto').style.display = "block";
        document.getElementById('ciudadCorrecto').style.display = "none";
      }else{
        document.getElementById('ciudad').style.border = "1px solid #198754";
        document.getElementById('ciudadCorrecto').style.display = "block";
        document.getElementById('ciudadIncorrecto').style.display = "none";
      };
    if( idPais == null || idPais.length == 0 || /^\s+$/.test(idPais) ) {
        console.log("Error en el país");
        document.getElementById('pais').style.border = "1px solid #f00";
        document.getElementById('paisIncorrecto').style.display = "block";
        document.getElementById('ciudadCorrecto').style.display = "none";
      }else{
        document.getElementById('pais').style.border = "1px solid #198754";
        document.getElementById('paisCorrecto').style.display = "block";
        document.getElementById('paisIncorrecto').style.display = "none";
      };

}
