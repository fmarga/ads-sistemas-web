// Bloqueia datas passadas no campo de data
const inputData = document.getElementById('data');
const hoje = new Date().toISOString().split('T')[0];
inputData.setAttribute('min', hoje);

// Bloqueia domingos no calendário
inputData.addEventListener('input', function () {
    const dataSelecionada = new Date(this.value + 'T00:00:00');
    const diaSemana = dataSelecionada.getDay();
    if (diaSemana === 0) {
        alert('Não funcionamos aos domingos! Por favor, escolha outro dia.');
        this.value = '';
    }
});

// Bloqueia horários fora do funcionamento
const inputHorario = document.getElementById('horario');
inputHorario.addEventListener('input', function () {
    const [hora, minuto] = this.value.split(':').map(Number);
    const diaSemana = new Date(inputData.value + 'T00:00:00').getDay();

    // Sábado fecha às 17h, demais dias às 19h
    const horaLimite = diaSemana === 6 ? 17 : 19;

    if (hora < 8 || hora >= horaLimite) {
        alert(`Horário fora do funcionamento! Atendemos das 08:00 às ${horaLimite}:00.`);
        this.value = '';
    }
});

// Mensagem automática após envio do formulário
const formulario = document.querySelector('form');

if (formulario) {
    formulario.addEventListener('submit', function (e) {
        e.preventDefault();

        // Esconde o formulário
        formulario.style.display = 'none';

        // Cria a mensagem de confirmação
        const mensagem = document.createElement('div');
        mensagem.className = 'text-center p-5';
        mensagem.innerHTML = `
            <h3 class="fw-bold">Agendamento confirmado!</h3>
            <p class="text-muted">Você será redirecionado para a página inicial em <span id="contador">5</span> segundos...</p>
        `;

        // Insere a mensagem no lugar do formulário
        formulario.parentNode.insertBefore(mensagem, formulario);

        // Contagem regressiva
        let segundos = 5;
        const contador = document.getElementById('contador');

        const intervalo = setInterval(function () {
            segundos--;
            contador.textContent = segundos;

            if (segundos <= 0) {
                clearInterval(intervalo);
                window.location.href = 'index.html';
            }
        }, 1000);
    });
}