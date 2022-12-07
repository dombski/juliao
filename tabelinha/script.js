var qtdAlunos = 1;
var qtdNotas = 4;
var infos_aluno = [];

function criarLinha() {
    if (qtdAlunos <= 10) {
        qtdAlunos += 1;
        let row, rowValue;
        let rowValueInput;
        let rowValueOutput ;
        row = document.createElement('tr');
        rowValue = document.createElement('td');
        row.setAttribute("id", `linha${qtdAlunos}`);
        rowValueInput = document.createElement('input');
        rowValueInput.classList.add("form-control");
        rowValueInput.setAttribute("id", `nome${qtdAlunos}`);
        rowValueInput.type = "text";
        rowValue.appendChild(rowValueInput);
        row.appendChild(rowValue);

        for (let x = 1; x <= qtdNotas; x++) {
            rowValue = document.createElement('td');
            rowValue.setAttribute("id", `coluna${qtdAlunos}${x}`);
            rowValueInput = document.createElement('input');
            rowValueInput.classList.add("form-control");
            rowValueInput.setAttribute("id", `nota${qtdAlunos}${x}`);
            rowValueInput.type = "number";
            rowValueInput.min = 0;
            rowValueInput.max = 100;
            rowValue.appendChild(rowValueInput);
            row.appendChild(rowValue);
        }
        rowValue = document.createElement('td');
        rowValue.setAttribute("id", `coluna_media${qtdAlunos}`);
        rowValueOutput  = document.createElement('output');
        rowValueOutput .setAttribute("id", `media${qtdAlunos}`);
        rowValue.appendChild(rowValueOutput );
        row.appendChild(rowValue);
        rowValue = document.createElement('td');
        rowValueOutput  = document.createElement('output');
        rowValueOutput .setAttribute("id", `situacao${qtdAlunos}`);
        rowValue.appendChild(rowValueOutput );
        row.appendChild(rowValue);
        document.getElementById('tableBody').appendChild(row);
    }
}


function deletarLinha(){
    if(qtdAlunos > 1){
        let child = document.getElementById(`linha${qtdAlunos}`)
        document.getElementById('tableBody').removeChild(child);
        qtdAlunos -= 1
    }
}


function criarColuna() {
    if (qtdNotas < 6) {
        qtdNotas += 1
        let coluna;
        let coluna_media;
        let rowValue;
        let rowValueInput;
        coluna = document.createElement('th');
        coluna.setAttribute("id", `coluna0${qtdNotas}`);
        coluna.innerHTML = `Nota ${qtdNotas}`;
        coluna = document.getElementById('coluna_media0');
        document.getElementById('linha0').insertBefore(coluna, coluna_media)

        for (let x = 1; x <= qtdAlunos; x++) {
            rowValue = document.createElement('td');
            rowValue.setAttribute("id", `coluna${x}${qtdNotas}`);
            rowValueInput = document.createElement('input');
            rowValueInput.classList.add("form-control");
            rowValueInput.setAttribute("id", `nota${x}${qtdNotas}`);
            rowValueInput.type = "number";
            rowValueInput.min = 0;
            rowValueInput.max = 100;
            rowValue.appendChild(rowValueInput);
            media = document.getElementById(`coluna_media${x}`);
            document.getElementById(`linha${x}`).insertBefore(rowValue, media)
        }
    }
}


function verificaMedias() {
    let mediaGeral = 0;
    
    for (let y = 1; y <= qtdAlunos; y = y + 1) {
        let media = 0;
        let resultado = 0;
        
        for (let x = 1; x <= qtdNotas; x++) {
            let nota = parseFloat(document.getElementById(`nota${y}${x}`).value);
            console.log(nota)
            resultado = nota + resultado;
        }
        media = (resultado / qtdNotas);
        console.log(media)
        mediaGeral += media;
        document.getElementById(`media${y}`).innerText = media
        
        let mediaTotal = (mediaGeral/qtdAlunos).toFixed(2);
        document.getElementById(`mediaGeral`).innerText = mediaTotal;

        if (media >= 60) {
            document.getElementById(`situacao${y}`).innerText = "Aprovado";
            document.getElementById(`situacao${y}`).style.color = "Green";
            debugger;

        }

        else if (media >= 40 && media < 60) {
            document.getElementById(`situacao${y}`).innerText = "Recuperação";
            document.getElementById(`situacao${y}`).style.color = "Yellow";
            debugger;

        }
        else if (media < 40) {
            
            document.getElementById(`situacao${y}`).innerText = "Reprovado";
            document.getElementById(`situacao${y}`).style.color = "Red";
            debugger;
        }
    }
}

function deletarColuna(){
    if(qtdNotas > 1){

        for(let x = 0; x <= qtdAlunos; x++){
            let child = document.getElementById(`coluna${x}${qtdNotas}`)
            console.log(child)
            document.getElementById(`linha${x}`).removeChild(child);

        }
        
        qtdNotas -= 1
    }
}

















































// function calculate() {
//     var mediaSoma = 0;

//     for (let aluno = 1; aluno <= qtdAluno.length; aluno++) {
//         let notaParcial;
//         let notaSoma = 0;

//         for (let nota = 1; nota <= qtdNota; nota++) {
//             notaParcial = Number(document.getElementById(Nota${aluno}${nota}).value);
//             notaSoma = notaSoma + notaParcial;
//         }

//         let mediaTemp = ((notaSoma) / qtdNota);

//         mediaSoma = (mediaSoma + mediaTemp);
//         console.log(mediaSoma)
//         document.getElementById(media${aluno}).innerText = mediaTemp;
//         // document.getElementById("mediaGeral").innerText = mediaSoma;
//         if (mediaTemp >= 50) {
//             document.getElementById(status${aluno}).innerText = "Aprovado";
//             document.getElementById(status${aluno}).style.backgroundColor = 'green';
//         } else if (mediaTemp >= 45 && mediaTemp < 50) {
//             document.getElementById(status${aluno}).innerText = "Recuperacao";
//             document.getElementById(status${aluno}).style.backgroundColor = 'yellow';
//         } else if (mediaTemp < 50) {
//             document.getElementById(status${aluno}).innerText = "Reprovado";
//             document.getElementById(status${aluno}).style.backgroundColor = 'red';
//         }
//     }

//     var mediaGeral = mediaSoma / qtdAluno.length
//     console.log(mediaSoma)
//     document.getElementById("mediaGeral").innerText = mediaGeral;
// }