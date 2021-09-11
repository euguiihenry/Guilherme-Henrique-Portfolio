const btnMobile = getElementById('btnMobile');

        function toggleMenu(){
            const navbarBtn = getElementById('navbarBtn');
            navbarBtn.classList.toggle('active');
        }

        btnMobile.addEventListener('click', toggleMenu);