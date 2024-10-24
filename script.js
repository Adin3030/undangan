// script.js

document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('login-button');
    const loginForm = document.getElementById('login-form');
    const invitationContent = document.getElementById('invitation-content');
    const partnerInput = document.createElement("input");
    partnerInput.type = "hidden";
    partnerInput.id = "partner"; // Menambahkan input tersembunyi
    loginForm.appendChild(partnerInput); // Menambahkan ke form

    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll('.gallery-image');
    
        images.forEach((image, index) => {
            image.style.opacity = 0; // Set opacity awal
            image.style.transform = 'translateY(20px)'; // Set transform awal
    
            // Delay animasi untuk setiap gambar
            setTimeout(() => {
                image.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                image.style.opacity = 1; // Ubah opacity
                image.style.transform = 'translateY(0)'; // Reset transform
            }, index * 300); // Delay berdasarkan urutan gambar
        });
    });
    

    // Mengatur event listener untuk tombol
    document.getElementById('husband-button').addEventListener('click', function() {
        selectPartner('Husband', this);
    });

    document.getElementById('wife-button').addEventListener('click', function() {
        selectPartner('Wife', this);
    });

    function selectPartner(partner, button) {
        partnerInput.value = partner; // Set nilai input hidden
        
        // Reset semua tombol
        const buttons = document.querySelectorAll('.partner-button');
        buttons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // Tandai tombol yang dipilih
        button.classList.add('selected');
    }

    // Login functionality
    loginButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const partner = partnerInput.value;

        if (username.trim() === "") {
            alert("Please enter your name");
        } else if (!partner) {
            alert("Please select a partner");
        } else {
            // Display greeting with username and partner
            document.getElementById('greeting').textContent = `Datangya Ke Pernikahan Kami ${username} Dan ${partner}.`;

            // Menampilkan username dan pasangan di undangan
            document.getElementById("invited-username").innerText = `Nama Anda: ${username}`;
            document.getElementById("invited-partner").innerText = `Pasangan: ${partner}`;

            // Hide login form and show invitation content with animation
            loginForm.style.display = 'none';
            invitationContent.style.display = 'block';
            invitationContent.classList.add("fadeIn");

            // Start countdown
            startCountdown(new Date("2024-11-25T10:00:00"));
        }
    });


    
    

    // Function to start countdown
    function startCountdown(weddingDate) {
        const countdownElement = document.getElementById("countdown");

        const interval = setInterval(() => {
            const now = new Date();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If countdown is over
            if (distance < 0) {
                clearInterval(interval);
                countdownElement.innerHTML = "HARI PERNIKAHAN SUDAH TIBA!";
            }
        }, 1000);
    }
});
