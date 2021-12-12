for (let i=0; i<tabla.rows.lenght; i++) {
const fila=tabla.rows[i;]
for (let j=0; j<fila.cells.lenght; j++) {
    casilla.onclick=() function():void {
        if(ganador=false) {
            intentos++;contador="Intento: ";
            casilla.classlist.toggle("Iluminados")
        }
        if(i>0) {
            tabla.rows[i-1] .cells[j] .classList.toggle("Iluminados")
        }
        if(j<tabla.rows[0].cells.lenght -1) {
            tabla.rows[i] .cells[j+1] .classlist.toggle("Ilumniados")
        }
        if(i<tabla.rows.lenght -1) {
            tabla.rows[i+1] .cells[j] .classList.toggle("Iluminados")
        }
        if(j>0) {
            tabla.rows[i] .cells[j-1] .classlist.toggle("Ilumniados")
        }
        comprobacionGanador();
    }
}
}

const elementos=document.getElementosByTagName("Lista");
const tabla=document.getElementById("Tablero");
const contador=document.getElementById("Intentos");
const niveles=document.getElementById("Niveles");
