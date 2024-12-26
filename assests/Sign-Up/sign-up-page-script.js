function toggleLoginOptions(option) {
    const saasOptions = document.getElementById('saas-options');
    const selfHostedOptions = document.getElementById('self-hosted-options');
    const saasButton = document.getElementById('saas-button');
    const selfHostedButton = document.getElementById('self-hosted-button');

    if (option === 'saas') {
        saasOptions.style.display = 'block';
        selfHostedOptions.style.display = 'none';
        saasButton.classList.add('active');
        selfHostedButton.classList.remove('active');
    } else {
        saasOptions.style.display = 'none';
        selfHostedOptions.style.display = 'block';
        saasButton.classList.remove('active');
        selfHostedButton.classList.add('active');
    }
}

const targetUrl = 'assests/Main Page/main-page-index.html'; // Path to your other index.html file

        // Select all buttons with the 'hyperlink' class
        const buttons = document.querySelectorAll('.login');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                window.location.href = targetUrl; // Redirect to the target URL
            });
        });