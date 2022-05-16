var sendBtn = document.querySelector("#send");
        sendBtn.addEventListener("click", function(event){
        event.preventDefault();

    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("assunto").value;
    var message = document.getElementById("mensagem").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Por favor, digite um nome válido.";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Por favor, insira o assunto que deseja tratar.";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Por favor, digite um email válido.";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length < 20){
      text = "Por favor, digite sua mensagem.";
      error_message.innerHTML = text;
      return false;
    }
    alert("Formulário enviado com sucesso!");
    return true;

});