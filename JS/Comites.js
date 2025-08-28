document.addEventListener('DOMContentLoaded', function() {
    function initComiteCarousel(comiteSection) {
        const comiteHorizontal = comiteSection.querySelector('.comite-horizontal');
        const prevBtn = comiteSection.querySelector('.prev-btn');
        const nextBtn = comiteSection.querySelector('.next-btn');
        const miembros = comiteSection.querySelectorAll('.miembro-horizontal');

        let currentIndex = 0;
        let autoScrollInterval;
        const scrollDelay = 5000;
        const memberWidth = miembros[0].offsetWidth + 25;

        function scrollToMember(index) {
            if (index < 0) index = miembros.length - 1;
            if (index >= miembros.length) index = 0;
            currentIndex = index;
            comiteHorizontal.scrollTo({
                left: index * memberWidth,
                behavior: 'smooth'
            });
        }

        function startAutoScroll() {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(() => {
                scrollToMember(currentIndex + 1);
            }, scrollDelay);
        }

        startAutoScroll();

        prevBtn.addEventListener('click', () => {
            clearInterval(autoScrollInterval);
            scrollToMember(currentIndex - 1);
            startAutoScroll();
        });

        nextBtn.addEventListener('click', () => {
            clearInterval(autoScrollInterval);
            scrollToMember(currentIndex + 1);
            startAutoScroll();
        });

        comiteHorizontal.addEventListener('mouseenter', () => {
            clearInterval(autoScrollInterval);
        });

        comiteHorizontal.addEventListener('mouseleave', () => {
            startAutoScroll();
        });

        comiteHorizontal.addEventListener('scroll', function() {
            clearInterval(autoScrollInterval);
            const scrollPos = this.scrollLeft;
            currentIndex = Math.round(scrollPos / memberWidth);
        });
    }

    const comiteSections = document.querySelectorAll('.comites-section');
    comiteSections.forEach(section => {
        initComiteCarousel(section);
    });
});
