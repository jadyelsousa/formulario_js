
<?php
//recebendo os dados 
    if (isset($_POST["enviar"])){

    $nome = $_POST["nome"];
    $telefone= $_POST["telefone"];
    $combobox= $_POST["combobox"];
    $selecione= $_POST["selecione"];
    
// os dados de checkbox só são enviados se o campo radio estiver selecionado como sim
}
    if($selecione=='sim'){
 	foreach ($_POST["redes"] as $key => $value) {
    echo '<br />' . $key . ' => ' . $value;
}
}
	echo "<p>Olá, ".$nome."</p>"; echo "<p>seus dados foram enviados com sucesso</p>";

?>