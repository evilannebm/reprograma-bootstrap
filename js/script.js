const botaoEnviar = document.querySelector('#enviar');

botaoEnviar.addEventListener('click', function(evento){
    evento.preventDefault();
    let nome = document.getElementById('formGroupNameInput');
    let email = document.getElementById('formGroupEmailInput');
    let telefone = document.getElementById('formGroupPhoneInput');
    let mensagem = document.getElementById('formGroupMessageInput');
    let erro1 = document.querySelector('.erro1');
    let erro2 = document.querySelector('.erro2');
    let erro3 = document.querySelector('.erro3');
    let erro4 = document.querySelector('.erro4');

    if(nome.value === null || 
       nome.value.trim() === "" || 
       nome.value === undefined){
        erro1.textContent = 'Escreva seu nome.'
        erro1.style.color = 'red';
    }else{
        erro1.textContent = ''
    }
    
    if(email.value === null || 
        email.value.trim() === "" || 
        email.value === undefined ||
        email.value.indexOf('@') === -1){
            erro2.textContent = 'Digite um email válido.'
            erro2.style.color = 'red';
    }else{
        erro2.textContent = ''
    }

    if(telefone.value === undefined||
        telefone.value === null||
        telefone.value.trim()===""||
        telefone.value.length<10){
        erro3.textContent = 'Digite um número de telefone válido com DDD.'
        erro3.style.color = 'red';
    }else{
         erro3.textContent = ''
    }

    if(mensagem.value === null || 
        mensagem.value.trim() === "" || 
        mensagem.value === undefined){
         erro4.textContent = 'Não deixe de escrever a mensagem.'
         erro4.style.color = 'red';
     }else{
         erro4.textContent = ''
     }
})