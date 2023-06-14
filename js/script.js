document.getElementById("torcedorForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });

  function validateForm() {
    const timeInput = document.getElementById("time");
    const timeError = document.getElementById("timeError");

    if (timeInput.value.toLowerCase() === "corinthians") {
      timeError.textContent = "Você não deveria torcer para esse time!";
    } else {
      timeError.textContent = "";
      submitForm();
    }
  }

  function submitForm() {
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const timeInput = document.getElementById("time");
    const senhaInput = document.getElementById("senha");

    // Validação básica do e-mail usando uma expressão regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    // Validação da senha com no mínimo 8 caracteres
    if (senhaInput.value.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return;
    }

    // Aqui você pode enviar os dados do formulário para o servidor ou fazer outras ações necessárias.
    // Neste exemplo, estamos apenas exibindo os dados no console.
    console.log("Nome: " + nomeInput.value);
    console.log("E-mail: " + emailInput.value);
    console.log("Time: " + timeInput.value);

    // Você também pode redirecionar o usuário para uma página de confirmação ou agradecimento.
  }