// script.js
let alunos = [];
 
function cadastrarAlunos() {
    for (let i = 0; i < 20; i++) {
        const nome = prompt(`Digite o nome do aluno ${i + 1}:`);
        if (nome === null) { // Se o usuário clicar em "Cancelar"
            alert('Cadastro cancelado.');
            return; // Sai do loop e do cadastro
        }
        
        // Validação de nome vazio
        if (nome.trim() === "") {
            alert("Nome não pode ser vazio. Tente novamente.");
            i--; // Repetir a iteração
            continue; // Continua para o próximo aluno
        }
 
        const notas = [];
        for (let j = 0; j < 4; j++) { // 4 bimestres
            let nota;
            do {
                nota = prompt(`Digite a nota do bimestre ${j + 1} para ${nome}:`);
                if (nota === null) { // Se o usuário clicar em "Cancelar"
                    alert('Cadastro de notas cancelado.');
                    return; // Sai do loop e do cadastro
                }
                nota = parseFloat(nota);
            } while (isNaN(nota) || nota < 0 || nota > 10); // Validação de notas
            notas.push(nota);
        }
        const media = calcularMedia(notas);
        alunos.push({ nome, notas, media });
    }
    alunos.sort((a, b) => a.nome.localeCompare(b.nome)); // Classificação por nome
    alert('Cadastro concluído!');
}
 
function calcularMedia(notas) {
    const soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}
 
function pesquisarAluno() {
    const nome = prompt('Digite o nome do aluno para pesquisa:');
    if (nome === null) { // Se o usuário clicar em "Cancelar"
        alert('Pesquisa cancelada.');
        return; // Sai da função
    }
 
    const aluno = alunos.find(a => a.nome.toLowerCase() === nome.toLowerCase());
    
    if (aluno) {
const status = aluno.media >= 5 ? "Aprovado" : "Reprovado";
alert(`Nome: ${aluno.nome}\nMédia: ${aluno.media.toFixed(2)}\nStatus: ${status}`);
    } else {
        alert('Aluno não encontrado.');
    }
}
 
function apresentarRegistros() {
    if (alunos.length === 0) {
        alert('Nenhum registro encontrado.');
        return;
    }
 
    let output = 'Registros dos Alunos:\n\n';
    alunos.forEach(aluno => {
const status = aluno.media >= 5 ? "Aprovado" : "Reprovado";
output += `Nome: ${aluno.nome}\nMédia: ${aluno.media.toFixed(2)}\nStatus: ${status}\n\n`;
    });
    alert(output);
}
 
function sair() {
    const confirmacao = confirm('Você tem certeza que deseja sair do programa?');
    if (confirmacao) {
        alert('Saindo do programa.');
    }
}
