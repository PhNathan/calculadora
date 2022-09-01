let num1 = "0";
let operacao = null;
let num2 = "";
// Adiciona os números
function incluirDigito(num) {
  if (num2 && operacao && clicadoIgual) {
    clicadoIgual = false;
    limpar();
    num1 = num;
    mostrarDisplay(num1);
    return;
  }
  if (operacao !== null) {
    num2 += num;
    mostrarDisplay(num2);
  } else {
    if (num1 === "0") {
      num1 = num;
    } else {
      num1 += num;
    }

    mostrarDisplay(num1);
  }
}

function calcular() {
  let calc = 0;
  let n1 = parseFloat(num1);
  let n2 = parseFloat(num2);

  switch (operacao) {
    case "+":
      calc = n1 + n2;
      break;
    case "-":
      calc = n1 - n2;
      break;
    case "/":
      calc = n1 / n2;
      calc.toFixed(2);
      break;
    case "*":
      calc = n1 * n2;
      calc.toFixed(2);
      break;
  }
  return calc;
}

// Mostrando os números no display
function mostrarDisplay(num1) {
  let display = document.querySelector("#display");
  display.textContent = num1;
}

function iniciarCalculo(op) {
  if (clicadoIgual) {
    clicadoIgual = false;
    num2 = "";
  }

  if (op === null || num2 == "") {
    operacao = op;
  } else {
    let resultado = calcular();
    num1 = resultado;
    operacao = op;
    num2 = "";
    mostrarDisplay(num1);
  }
}

function incluirPonto() {
  if (operacao && num2 === "") {
    num2 = "0.";
  } else if (operacao && num2) {
    num2 += ".";
  } else {
    num1 += ".";
  }
}

let clicadoIgual = false;

function finalizarCalculo() {
  clicadoIgual = true;
  let final = calcular();
  num1 = final;

  mostrarDisplay(num1);
}

function obterPorcento() {
  let porcento = null;
  if (!num2) {
    limpar();
    mostrarDisplay(num1);
  } else {
    if (operacao === "+" || operacao === "-") {
      porcento = (num1 * num2) / 100;
    } else {
      porcento = num2 / 100;
    }
    num2 = porcento;
    mostrarDisplay(num2);
  }
}

// Limpa a Tela
function limpar() {
  num1 = "0";
  operacao = null;
  num2 = "";
  mostrarDisplay(num1);
}
