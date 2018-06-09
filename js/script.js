window.onload = () => {
  document.getElementById('button_bissexto').addEventListener('click', verificaBissexto);
  document.getElementById('button_isograma').addEventListener('click', verificaIsograma);
  document.getElementById('button_combustivel').addEventListener('click', verificaCombustivel);
}

// exibe mensagens
function mensagem(local, txt, type){
  var local = document.getElementById(local);
  var msg = document.getElementById('msg');
  if (msg !== null){
    msg.parentNode.removeChild(msg);
  }
  var msg = document.createElement('div');
  msg.setAttribute('id', 'msg');
  local.insertBefore(msg, local.lastChild);
  msg.innerHTML = ('<span>'+txt+'</span>');
  msg.removeAttribute('class');
  msg.classList.add(type);
}

// ano bissexto
function verificaBissexto(evento){
  evento.preventDefault();
  var ano = document.getElementById('ano');

  if (ano.value == ''){
    mensagem('form_bissexto', 'Por favor, digite o ano!', 'attention');
    ano.focus();
  } else {
    if(((ano.value % 4 == 0) && (ano.value % 100 != 0)) || (ano.value % 400 == 0)){
      mensagem('form_bissexto', 'Esse ano é bissexto', 'sucess');
    } else {
      mensagem('form_bissexto', 'Esse ano não é bissexto', 'error');
    }
  }
}

// isograma
function verificaIsograma(evento){
  evento.preventDefault();
  var palavra = document.getElementById('palavra');

  if (palavra.value == ''){
    mensagem('form_isograma', 'Por favor, digite uma palavra!', 'attention');
    palavra.focus();
  } else {
    var arrayPalavra = palavra.value.replace(/\s/g, '').split('');
    palavra = palavra.value;

    var posicaoLetra = 0;
    for( i=0; i < arrayPalavra.length; i++ ) {
      if(posicaoLetra != arrayPalavra.indexOf(arrayPalavra[posicaoLetra]) ){
        mensagem('form_isograma', 'Essa palavra não é isograma!', 'error');
      } else {
        mensagem('form_isograma', 'Essa palavra é isograma!', 'sucess');
        posicaoLetra++;
      }
    }
  }
}

// combustivel
function verificaCombustivel(evento){
  evento.preventDefault();
  Promise.resolve(null)
  .then(valores)
  .then(validaInput)
  .then(convertInput)
  .then(calculo)
  .catch((reason) => {
    mensagem('form_combustivel', 'Informe os 2 valores', 'attention');
  });
}

function valores(){
  let valEtanol = document.getElementById('etanol').value;
  let valGasolina = document.getElementById('gasolina').value;
  let valores = {
    etanol: valEtanol,
    gasolina: valGasolina,
  }
  return valores;
}

function validaInput(valores) {
  if ( valores.etanol == '' || valores.gasolina == '' || isNaN(valores.etanol) || isNaN(valores.gasolina)  ) {
    return Promise.reject();
  } else {
    return valores;
  }
}

function convertInput(valores){
  valores.etanol = parseFloat(valores.etanol);
  valores.gasolina = parseFloat(valores.gasolina);
  return valores;
}

function calculo(valores){
  let resultado = valores.etanol / valores.gasolina;
  if( resultado > 0.7 ){
    mensagem('form_combustivel', 'Compensa abastecer GASOLINA', 'sucess');
  } else {
    mensagem('form_combustivel', 'Compensa abastecer ETANOL', 'sucess');
  }
}
