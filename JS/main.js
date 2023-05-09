function mensagem(){
    const dataForm = new FormData(document.querySelector('form'));
    const inputValue = dataForm.get("email")
      return  alert("Seu E-mail foi registrado em nosso sistema. Agradecemos pela preferência, volte para ver mais novidades.");

}

