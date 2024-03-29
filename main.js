const form = document.getElementById('formulario');
const usuarios = [];
const telefones = [];

let linhas = '';
let numeroUsuarios = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizarTabela();
    atualizarUsuarios();
})

function adicionaLinha() {

    const inputNome = document.getElementById('nome-usuario');
    const inputFone = document.getElementById('fone-usuario');

    if (telefones.includes(parseInt(inputFone.value))) {
        alert(`o numero : ${inputFone.value} ja foi cadastrado `);
    } else {
        telefones.push(parseInt(inputFone.value));
        usuarios.push(inputNome.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputFone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNome.value = '';
    inputFone.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calcularUsuarios() {

    numeroUsuarios.push(1);

    let somaCadastro = 0;

    for (let i = 0; i < numeroUsuarios.length; i++) {
        somaCadastro += numeroUsuarios[i];
    }
    return somaCadastro;
}

function atualizarUsuarios() {

    const totalUsuarios = calcularUsuarios();

    document.getElementById('soma-usuarios').innerHTML = totalUsuarios;
}