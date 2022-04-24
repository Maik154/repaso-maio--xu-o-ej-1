var listadocentros = ["IES DE TEIS", "IES DA GUIA", "IES ROU", "IES POLITECNICO"];
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
                window.alert("Ya existe el centro o el campo está vacío.");
            }
            break;
        case "change":
            if (!existeCentro(nomeCentro) || nomeCentro == "" || isNaN(pos) || listadocentros.length < pos || pos <= 0) {
                window.alert("El centro o la posición están vacías, el centro no existe o la posición no es válida.");
            } else {
                if (listadocentros[pos - 1].localeCompare(nomeCentro) == 0) {
                    window.alert("La posición es la misma de donde ya estaba");
                } else {
                    listadocentros.splice(listadocentros.indexOf(nomeCentro), 1);
                    listadocentros.splice(pos - 1, 0, nomeCentro);
                }
            }
            break;
        case "del":
            if (existeCentro(nomeCentro) && nomeCentro != "") {
                listadocentros.splice(listadocentros.indexOf(nomeCentro), 1);
            }else{
                window.alert("El centro no existe o está vacío.");
            }
            break;
    }
    displayCentros();
    limpiar('nome');
    limpiar("pos");

}

function existeCentro(nomecentro) {
    if (listadocentros.indexOf(nomecentro) == -1) {
        return false;
    } else {
        return true;
    }
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
}


function limpiar(limpiarQue) {
    if (limpiarQue.localeCompare("nome") == 0) {
        document.getElementById("nomecentro").value = "";
    } else if (limpiarQue.localeCompare("pos") == 0) {
        document.getElementById("pos").value = "";
    }
}