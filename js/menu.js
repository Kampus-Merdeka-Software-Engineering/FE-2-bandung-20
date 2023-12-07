var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("slide");
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex - 1].style.display = "block";
        }

        // Togel Class Active
        const navbarNav = document.querySelector(".navbar-nav");

        // Ketika hamburger menu diklik
        document.querySelector("#hamburger-menu").onclick = () => {
            navbarNav.classList.toggle("active");
        };

        //klik diluar hamburger untuk exit
        const hamburger = document.querySelector("#hamburger-menu");

        document.addEventListener("click", function (e) {
            if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove("active");
            }
        });
