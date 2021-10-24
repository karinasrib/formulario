
function Concluido() {

    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var cpf = document.getElementById("cpf");
    var ddd = document.getElementById("ddd");
    var telefone_celular = document.getElementById("telefone_celular");
    var endereco = document.getElementById("endereco");
    var nmr = document.getElementById("nmr");


    if (nome.value != "" && sobrenome.value != "" && cpf.value != "" && ddd.value != "" && telefone_celular.value != "" && endereco.value != "" && nmr.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    else {
        alert('Favor preencher os campos obrigatórios!');
    }

}