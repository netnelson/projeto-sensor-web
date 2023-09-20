document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const ID = document.getElementById('ID').value;
        const password = document.getElementById('password').value;

        // Verifique se o nome de usuário e a senha são válidos (pode ser fictício)
        if (username === 'nelson' && ID === '12345' && password === '123') {
            // Remova o formulário de login
            const loginForm = document.getElementById('login-form');
            loginForm.style.display = 'none';

            // Crie e exiba os gráficos de qualidade do ar e meio ambiente
            const chartContainer = document.getElementById('chart-container');
            chartContainer.style.display = 'block';

            createCharts();
        } else {
            alert('Nome de usuário ou senha incorretos.');
        }
    });
});

function createCharts() {
    // Aqui você usará o Chart.js para criar os gráficos
    // Exemplo de código para criar um gráfico de barras fictício:
    const ctx = document.createElement('canvas').getContext('2d');
    const chartData = {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai'],
        datasets: [{
            label: 'Metano',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56]
        }]
    };
    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    new Chart(ctx, chartConfig);
    const chartContainer = document.getElementById('chart-container');
    chartContainer.appendChild(ctx.canvas);
}
