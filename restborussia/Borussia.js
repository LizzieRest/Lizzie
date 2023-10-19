$(document).ready(function(){$('.carousel').carousel({interval: 2000})})

<!DOCTYPE html>
<html>
<body>

<h2>Reservar mesa</h2>

<p>Introduzca el número de mesa y haga click en aceptar:</p>

<input id="id1" type="number" min="1" max="17" required>
<button onclick="myFunction()">OK</button>

<p>Coloque en el campo vacío el número de mesa que desea reservar. Luego, se le ofrecerán fechas y horas disponibles lo más próximas posibles.</p>

<p id="demo"></p>

<script>
function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Reservada ";
  } 
} 
</script>



</body>
</html>
