function enviarForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmacao_senha = document.getElementById('confirmacao-senha').value;
    const nascimento = document.getElementById('nascimento').value;
    const ddd = document.getElementById('ddd').value;
    const telefone = document.getElementById('telefone').value;
    const departamento = document.getElementById('departamento').value;

    const sexoRadio = document.querySelector('input[name="sexo"]:checked');
    const sexo = sexoRadio ? sexoRadio.value : '';

    const termos = document.querySelector('input[name="termos"]').checked;
    const notificacoes = document.querySelector('input[name="notificacoes"]').checked;

    if (!senha || !confirmacao_senha) {
        if (!senha) document.getElementById('senha').classList.add('borda-erro');
        if (!confirmacao_senha) document.getElementById('confirmacao-senha').classList.add('borda-erro');
        return;
    } else if (senha !== confirmacao_senha) {
        alert('Senhas diferentes, formulário não enviado!');
        return;
    } else {
        alert('Formulário enviado com sucesso!');
    }

    const dadosFormulario = {
        nome,
        email,
        senha,
        confirmacao_senha,
        nascimento,
        ddd,
        telefone,
        sexo,
        departamento,
        termos,
        notificacoes
    };

    console.log(dadosFormulario);

    

}