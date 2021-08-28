alert ("CECREA es una agrupación que promueve la creatividad en un espacio de colaboración y aprendizaje.")

function cambiacontenido() {
  document.getElementById('photo').src = "emplazamiento1.jpg"
  document.getElementById('photo-caption').innerHT = "emplazamiento1"
}
function cambiacontenido1() {
  document.getElementById('photo').src = "emplazamiento2.jpg"
  document.getElementById('photo-caption').innerHT = "emplazamiento2"
}
function vista1() {
    document.getElementById('vista').src="9.png";
}
function vista2() {
    document.getElementById('vista').src="10.png";
}
function PROGRAMA1() {
    document.getElementById('PROGRAMA').src="20.png";
}
function PROGRAMA2() {
    document.getElementById('PROGRAMA').src="21.png";
}
function final1() {
    document.getElementById('final').src="36.png";
}
function final2() {
    document.getElementById('final').src="37.png";
}

var player = document.getElementById("player");
var mensaje = document.getElementById("mensaje");
            function commentBox(){
            	var name=document.getElementById('name').value;
            	var comment=document.getElementById('comment').value;

            	if(name =="" || comment ==""){
            		alert("Porfavor introduce la informacion requerida!");
            	}else{
            		var parent=document.createElement('div');
            		var el_name=document.createElement('h5');
            		var el_message=document.createElement('p');
            		var el_line=document.createElement('hr');
            		var txt_name=document.createTextNode(name);
            		var txt_message=document.createTextNode(comment);
            		el_name.appendChild(txt_name);
            		el_message.appendChild(txt_message);
            		el_line.style.border='1px solid #000';
            		parent.appendChild(el_name);
            		parent.appendChild(el_line);
            		parent.appendChild(el_message);
            		parent.setAttribute('class', 'pane');
            		document.getElementById('result').appendChild(parent);

            		document.getElementById('name').value="";
            		document.getElementById('comment').value="";
            	}

            }
            // QUE CUANDO APRETE UNA IMAGEN ESTA SE AGRANDE
            var imagenes = document.querySelectorAll(".imagen__img");
            var modal = document.querySelector("#modal");
            var img = document.querySelector("#modal__img");
            var boton = document.querySelector("#modal__boton");
            var botonNext = document.querySelector("#modal__botonNext");

            for (var i = 0; i < imagenes.leght; i++){
              imagenes[i].addEventListener("click",function(e){
                modal.classList.toggle("modal--open");
                var src = e.target.sr;
                img.setAtrribute("src", src);
              });
            }
            //boton.addEventListener("click", function(){
             //   modal.clasList.toggle("modal--open");
            //});
