var horasTrabajadas = prompt("Ingrese horas trabajadas en la semana");
   	horasTrabajadas = parseInt(horasTrabajadas);
var pagoPorHora = prompt("Ingrese pago por hora en s/.");
   	pagoPorHora = parseInt(pagoPorHora);
var sueldoSemanal = horasTrabajadas*pagoPorHora;
document.write("su sueldo semanal es: s/.");
document.write(sueldoSemanal);


/*
<--Otra forma-->

var num1 = prompt ("Horas de trabajo en la semana");
var num2 = prompt ("Pago por hora");
document.write("El salario de la semana es: ");
document.write(parseInt(num1)*parseInt(num2));
*/