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

  const initSelectOne = () => {
    $(".gender").click(function(){
      var gender = $(this).data("gender");
      $('.gender').removeClass('btn-gender');
      $('.gender').addClass('btn-gender-unselected');
      $(this).removeClass('btn-gender-unselected');
      $(this).addClass('btn-gender');
      return false;
    });
  }

  const initCheckPagaPopup = () =>{
    $('#check-paga-visa').change(function(){
      if(this.checked){
        $('.btn-paga').removeAttr('disabled');
      }else{
        $('.btn-paga').prop('disabled');
      }

    });
  }
    
  const init = () => {
    /* Fix IE */
    utils.fixIE();
    initCategoryList();
    initSelectOne();
    initCheckPagaPopup();
  };

  return {init};
})();

$('document').ready(() => {
  window.GicoScript.init();
});
