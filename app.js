window.addEventListener("load",function(){
	var button = document.getElementById("calcular");
	button.addEventListener("click",function(){
		var nombre=document.getElementById("nombre").value;
		var edad=parseInt(document.getElementById("edad").value); 
		var sexo= document.getElementById("sexo").value;        		
		function Persona(nombreper,edadper,sexoper){
			this.nombreper = nombreper;
			this.edadper = edadper;
			this.sexoper = sexoper;
			this.mayorDeEdad =(this.edadper>=18) //- esta funcion tambien es valida
			this.presentacion = function(){
				return `Hola, mi nombre es ${this.nombreper}, tengo ${this.edadper} y soy ` +((this.mayorDeEdad)? "mayor": "menor")+` edad.`;
				//return "Hola, mi nombre es" +`${this.nombreper}`+", tengo "+`${this.edadper}`+ " y soy " +((this.mayorDeEdad) ? " mayor ": " menor ")+"edad";
				/*mayorDeEdad =(edad>=18)? true:false;// esta es otra forma de hacer y no es necesario poner el operador ternario
				if(mayorDeEdad==true){
					return `Hola, mi nombre es ${this.nombreper}, tengo ${this.edadper} y soy mayor de edad`;		
				}
				else{
					return `Hola, mi nombre es ${this.nombreper}, tengo ${this.edadper} y soy menor de edad`;
				}*/
			}		
		}
		var newpersona= new Persona(nombre,edad,sexo);
		document.getElementById("resultado").innerHTML = newpersona.presentacion();
		});
});