document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 500); // Match the timeout with the transition duration
    }, 500); // Adjust this duration as needed (in milliseconds)
});

function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('show');
    navbar.classList.toggle('hidden');
}