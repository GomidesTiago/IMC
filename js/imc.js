
calcular = () => {
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;
  const imc = peso / (altura * altura);
  document.getElementById("resultado").innerHTML = `Seu Imc e ${imc.toFixed(2)}`

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
  document.getElementById('altura').value = "";
  document.getElementById('peso').value = "";
  document.getElementById("resultado").innerHTML = "";
}





for (var i = 0; i < 10; i++) {
  console.log("teste");
}

