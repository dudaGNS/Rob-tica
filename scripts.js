document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
            top: targetSection.offsetTop - 20
            behavior: 'smooth'
        });
    });
);

const form = document.getElementById('formContato');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome && email && mensagem) {
        feedback.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        feedback.style.display = 'block';
        feedback.style.color = 'green';
        form.reset();
    } else {
        feedback.textContent = 'Por favor, preencha todos os campos corretamente.';
        feedback.style.display = 'block';
        feedback.style.color = 'red';
    }
});
