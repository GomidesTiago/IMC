
calcular = () => {
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const imc = peso / (altura * altura);
  document.getElementById("titulo").innerHTML = `Seu Imc é `;
  document.getElementById("resultado").innerHTML = `${imc.toFixed(2)}`;
  detalhetitulo = document.getElementById('detalhetitulo');
  detalheparagrago = document.getElementById('detalheparagrago');
  if (imc < 18.5) {
    detalhetitulo.innerHTML = `MAGREZA `;
    detalheparagrago.innerHTML = ` Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.`;
  }
  else if (imc >= 18.5 && imc <= 24.9) {
    detalhetitulo.innerHTML = `NORMAL `;
    detalheparagrago.innerHTML = `Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.`;
  }
  else if (imc >= 25 && imc <= 29.9) {
    detalhetitulo.innerHTML = `SOBREPESO `;
    detalheparagrago.innerHTML = `Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.`;
  }
  else if (imc >= 30 && imc <= 39.9) {
    detalhetitulo.innerHTML = `OBESIDADE `;
    detalheparagrago.innerHTML = `Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.`;
  }
  else if (imc >= 40) {
    detalhetitulo.innerHTML = `OBESIDADE GRAVE `;
    detalheparagrago.innerHTML = `Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente. `;
  }
  else {
    document.getElementById("titulo").innerHTML = `Digite um valor valido para ALTURA e o PESO e calcule novamente`;
    document.getElementById("resultado").innerHTML = ``;
  }


  if (localStorage.getItem("lista")) {
    const lista = JSON.parse(localStorage.getItem("lista"));
    lista.push({
      peso,
      altura,
      imc
    });
    if (lista.length > 5) {
      lista.splice(0, 1);
    }
    localStorage.setItem("lista", JSON.stringify(lista));
  } else {
    localStorage.setItem("lista", JSON.stringify([{
      peso,
      altura,
      imc
    }]));
  }
}


let limpar = (peso, altura) => {
  detalhetitulo.innerHTML = "";
  detalheparagrago.innerHTML = "";
  document.getElementById("titulo").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("peso").value = "";
  document.getElementById("altura").value = "";
}



function resultadoImc() {

  const section = document.createElement("section");
  let titulo = document.createElement("p");
  let textTitulo = document.createTextNode("Seu Imc é: ");

  titulo.appendChild(textTitulo);
  section.appendChild(titulo);

  const container = document.querySelector("#app");
  container.appendChild(section);

  console.log(textTitulo)
}

