document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll(".header-bottom-side-left .banner");
    let currentBannerIndex = 0;
    const bannerInterval = 5000; // Tempo em milissegundos entre cada troca de banner
    let bannerLoop;

    function showBanner(index) {
        for (let i = 0; i < banners.length; i++) {
            banners[i].classList.remove('active');
        }
        banners[index].classList.add('active');
    }

    function showNextBanner() {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(currentBannerIndex);
    }

    function showPrevBanner() {
        currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
        showBanner(currentBannerIndex);
    }

    function startBannerLoop() {
        clearInterval(bannerLoop);
        bannerLoop = setInterval(showNextBanner, bannerInterval);
    }

    startBannerLoop(); // Inicia o loop de banners quando a página carrega

    const arrowPrev = document.getElementById("arrow-prev");
    const arrowNext = document.getElementById("arrow-next");

    arrowPrev.addEventListener("click", function() {
        showPrevBanner();
        startBannerLoop(); // Reinicia o loop ao clicar na seta
    });

    arrowNext.addEventListener("click", function() {
        showNextBanner();
        startBannerLoop(); // Reinicia o loop ao clicar na seta
    });

    // Exibir o primeiro banner ao carregar a página
    showBanner(currentBannerIndex);
});
