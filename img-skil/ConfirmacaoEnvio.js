const formContato = document.getElementById('formularioContato');
const confirmationMessage = document.getElementById('confirmationMessage');

formContato.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Aqui você pode enviar `nome` e `email` para o Firebase
    enviarDadosFormulario(nome, email)
        .then(() => {
            console.log('Dados do formulário de contato enviados com sucesso!');
            confirmationMessage.style.display = "block";
            formContato.reset();
        })
        .catch((error) => {
            console.error('Erro ao enviar dados do formulário de contato:', error);
        });
});
