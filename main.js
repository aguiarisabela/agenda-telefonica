const form = document.getElementById('form')
const contatos = []


form.addEventListener('submit', function(e){
    e.preventDefault()

    const nomePessoa = document.getElementById('nome-form').value
    const numeroPessoa = document.getElementById('telefone').value
    
    const contatosExistentes = contatos.some(function (contato) {
        return contato.nome === nomePessoa || contato.numero === numeroPessoa;
    });

    if(contatosExistentes){
        alert(`Número ou nome já inserido, por favor verifique corretamente os dados.`)
    } else{

        contatos.push({nome: nomePessoa, numero: numeroPessoa})

    let linha = '<tr>'
    linha += `<td>${nomePessoa}</td>`
    linha += `<td>${numeroPessoa}<img src="imagens/telefone-fixo.png" alt="Telefone" style="vertical-align: middle;"></td>`;
    linha += '</tr>'

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML += linha

    form.reset();
}}
)