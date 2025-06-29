
    const texto = "Ficha de Investigação: Caso 07X\nSuspeito principal: Dra. Helena Vasques\nÚltimo acesso: 01:15h...";
    const elemento = document.getElementById("maquina");
    const somTecla = document.getElementById("somTecla");
    const botao = document.getElementById("iniciarBtn");

    botao.addEventListener("click", () => {
      botao.disabled = true; // desativa o botão após iniciar

      let i = 0;
      function escrever() {
        if (i < texto.length) {
          elemento.textContent += texto.charAt(i);

        if (texto.charAt(i) !== " " && texto.charAt(i) !== "\n") {
            somTecla.currentTime = 0;
            somTecla.play();
        }

        i++;
        setTimeout(escrever, 40);
    }
    }
    escrever();
});

