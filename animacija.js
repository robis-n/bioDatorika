/* animācija */

const navSlide= () => {
    const burger = document.querySelector('.linijas');
    const nav = document.querySelector('.nodalas');
    const navLinks = document.querySelectorAll('.nodalas li');
    burger.addEventListener('click', () => {
        //Pārslēgšana
        nav.classList.toggle('nav-active');
        //Nodaļu animācija
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Trīs līniju animācija
		burger.classList.toggle('toggle');
    });
}

navSlide();