var listadocentros = ["IES DE TEIS", "IES DA GUÍA", "IES ROU", "IES POLITÉCNICO"];
displayCentros();

function modify(action) {
    let pos = parseInt(document.getElementById("pos").value.trim());
    let nomeCentro = document.getElementById("nomecentro").value.toUpperCase().trim();
    switch (action) {
        case "start":
            if (nomeCentro != "") {
                listadocentros.unshift(nomeCentro);
            } else {
                window.alert("Campo do nome do centro vacío.");
            }
            break;

        case "insert":
            if (!existeCentro(nomeCentro) && !isNaN(pos)) {
                listadocentros.splice(pos - 1, 0, nomeCentro);
            } else {
                window.alert("Ya existe el centro," +
                    "la posición está vacía o no es válida.");
            }
            break;

        case "end":
            if (!existeCentro(nomeCentro)) {
                listadocentros.push(nomeCentro);
            } else {
                window.alert("Ya existe el centro.");
            }

            break;
        case "change":
            
            break;
        case "del":
            
            break;
    }
    displayCentros();
    limpiar('nome');
    limpiar("pos");

}

function displayCentros() {
    document.getElementById("tabla").innerHTML =
        `<tr><td id="indice">Índice</td><td id = "centro" >Centro</td></tr>`;
    for (let i in listadocentros) {
        let fila = document.createElement("tr");
        let celdaIndice = document.createElement("td");
        let indice = document.createTextNode(parseInt(i) + 1);
        celdaIndice.appendChild(indice);
        fila.appendChild(celdaIndice);

        let celdaCentro = document.createElement("td");
        let centro = document.createTextNode(listadocentros[i]);
        celdaCentro.appendChild(centro);
        fila.appendChild(celdaCentro);
        document.getElementById("tabla").appendChild(fila);
    }
    /*for (let i in listadocentros) {
        if (listadocentros[i].localeCompare(nome) == 0) {
            window.alert("El centro ya existe.")
        }
        if (i == pos) {
            window.alert("Esa posición ya está asignada.")
        }
    }
    */
}

function existeCentro(nomecentro) {
    if (listadocentros.indexOf(nomecentro) == -1 && nomecentro != "") {
        return false;
        //no existe
    } else {
        return true;
        //efectivamente, existe
    }
}

function limpiar(limpiarQue) {
    if (limpiarQue.localeCompare("nome") == 0) {
        document.getElementById("nomecentro").value = "";
    } else if (limpiarQue.localeCompare("pos") == 0) {
        document.getElementById("pos").value = "";
    }
}