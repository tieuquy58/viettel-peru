window.GicoScript = (() => {
  const utils = {
    isMobile: agent => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent || window.navigator.userAgent),
    fixIE: () => {
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        const msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
        document.querySelector('head').appendChild(msViewportStyle);
      }
    }
  };

  const initFilter = () => {
    if (utils.isMobile()) {
      $('.filter-body').collapse('hide');

      $('#js-gico-pdp-sorter').parent().on('shown.bs.dropdown', () => {
        $('body').addClass('open-sorter');
      }).on('hidden.bs.dropdown', () => {
        $('body').removeClass('open-sorter');
      });
    }
  };

  const initCategoryList = () => {
    const $container = $('#js-category-list');

    if ($container.length) {
      const swiper = new Swiper($container.find('.swiper-container'), {
        slidesPerView: 'auto',
        navigation: {
          nextEl: $container.find('.swiper-button-next'),
          prevEl: $container.find('.swiper-button-prev'),
        }
      });
    }
  };

  const init = () => {
    /* Fix IE */
    utils.fixIE();
    initEventListeners();
    initCategoryList();
  };

  return {init};
})();

$('document').ready(() => {
  window.GicoScript.init();
});
