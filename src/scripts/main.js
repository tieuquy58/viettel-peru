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

  const initMobiLabelProgressStep = () =>{
    var obj = $('.progress-step li.active > label');
    var elem = obj[obj.length-1];
    $('.lb-mobi').text(elem.innerHTML);
  }

  const initSelectTabs = () => {
    $('.tabs-select').on('change',function(){
      var id = $(this).val();
      $('a[href="' + id + '"]').tab('show');
    });
  }

  const initRadioCheckedTR = () => {
    $('.paquetes-list .table tr').on('click', function(){
      $('.paquetes-list .table tr').removeClass('checked');
      $(this).addClass('checked');
      $(this).find('.styled-radio-input').prop('checked',true);
    });
  }


  const initCarousel = () => {
    var windowWidth = $(window).width();
    if(windowWidth < 768){
      $('.comprados-list .list-item div.row').addClass('owl-carousel');
      $('.comprados-list .list-item div.row').addClass('owl-theme');
      $('.comprados-list .list-item div.row').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
      });
    }else{
      $('.comprados-list .list-item div.row').removeClass('owl-carousel');
      $('.comprados-list .list-item div.row').removeClass('owl-theme');
      $('.comprados-list .list-item div.row').trigger('destroy.owl.carousel')
    }
  }
    
  const init = () => {
    /* Fix IE */
    utils.fixIE();
    initCategoryList();
    initSelectOne();
    initCheckPagaPopup();
    initMobiLabelProgressStep();
    initSelectTabs();
    initRadioCheckedTR();
  };

  return {init,initCarousel};
})();

$('document').ready(() => {
  window.GicoScript.init();
});
$(window).on('resize load',function(){
  window.GicoScript.initCarousel();
})
