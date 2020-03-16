// Habilita/desabilita campo "Quais:"
function mostra(id){
	document.getElementById(id).style.display='block' 
	

}

function oculta(id){
	document.getElementById(id).style.display='none' 
}


	
// Validando campos

function validacao(){
	var formulario = document.forms["formulario"]
	var nome = formulario.nome.value
	var telefone = formulario.telefone.value

	var  erro = false;

	
	if (nome == "") {
		alert("Preencha o campo Nome")
		formulario.nome.focus()
		erro = true;
	}
		else{
			if (nome.indexOf(" ")  == -1) {
			alert("Escreva pelo menos um sobrenome!")
			formulario.nome.focus()
			
			erro = true;
			}
		}

	if (telefone == "") {
		alert("Preencha o campo Telefone")
		formulario.telefone.focus()
		erro = true;
	}
	else{
		if (telefone.length  != 10) {
		alert("Telefone inválido!")
		formulario.telefone.focus()
		erro = true;
	}
}

	if (formulario.selecione[0].checked==false && formulario.selecione[1].checked==false) {
		alert("Preencha o campo Rede social");
		formulario.selecione[0].focus()
		erro = true;
	}
      if (formulario.selecione[0].checked==true) {
		if (formulario.redes_1.checked==false &&
			formulario.redes_2.checked==false &&
			formulario.redes_3.checked==false){
			alert("Selecione pelo menos um rede social");
			return false;

        }
    }
		
	if (erro) {
		return false
	}
	else
		return true
}	