function bot1() {
    document.getElementById("bodyy").style.backgroundColor = 'black';

}

function bot2() {
    document.getElementById("bodyy").style.backgroundColor = 'blue';

}

function bot3() {
    document.getElementById("bodyy").style.backgroundColor = 'gray';
}


function enviarMensagem() {
    var li = document.createElement("li");
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var msg_node = document.createTextNode(`${nome}: ${mensagem}`);
    var close = document.getElementsByClassName("excluir");

    if (nome !== "" || mensagem !== "") {
        document.getElementById("containermsgs").appendChild(li);
    }

    li.appendChild(msg_node);

    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";

    var button = document.createElement("BUTTON");
    var txt = document.createTextNode("\u00D7");
    button.className = "excluir";
    button.appendChild(txt);
    li.appendChild(button);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }

}

function popup(){
    alert("Disciplina: Desenvolvimento de Software para Web \n Participantes: Cícero Romão Ribeiro Pereira Filho \n Matrícula: 411674");
}