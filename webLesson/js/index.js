$(document).ready(function () {
  if (localStorage.getItem('darkThemeOn') == "true"){
    darkThemeOn();
  }


  // изменения при скролле
  let colPage = $(".step__link").length;
  let namePage = new Array();
  let nameStep = new Array();

  
  // вперед/назад кнопки
  let prev = $(".prev");
  let next = $(".next");

  for (let i = 0; i < colPage; i++) {
    namePage[i] = $('.content__title:eq('+i+')').text();
    nameStep[i] = $('.content__title:eq('+i+')').text().toLowerCase();
  }

  $(window).scroll(function() {
    for (let i = 0; i < colPage; i++) {
      if ($(window).scrollTop() + $(".pop-box").height() >= $(".content__title:eq("+i+")").offset().top){
         $(".top-panel__title").text(namePage[i]);

         $(".step__link").removeClass("step__link--focus");
         $('.step__link:eq('+i+')').addClass("step__link--focus");
        // вперед/назад кнопки
          prev.attr("href","#"+(i-1))
          next.attr("href","#"+(i+1))
      }    
    }
  });

   // поиск по главам
   $(".search").keyup(function(){
    let val =   $(".search").val().trim();
    if (val != ""){
      for (let i = 0; i < colPage; i++) {
        if (nameStep[i].search(val) == -1){
          $(".step__item:eq("+i+")").addClass("step__item--hide");
        }
        else{
          $(".step__item:eq("+i+")").removeClass("step__item--hide");
        }
      }
    }
    else{
      for (let i = 0; i < colPage; i++) {
          $(".step__item:eq("+i+")").removeClass("step__item--hide");
      }
    }
  })

  // переключатель темной темы
  $(".switch").click(function () {
    darkThemeOn();
  });

  function darkThemeOn() {
    $(".switch").toggleClass("switch--active");

    if ($(".switch").hasClass("switch--active")) {
      // запоинатор включения темной темы
      localStorage.setItem('darkThemeOn', 'true');

      $(":root").css({
        "--mainColor": "#B9BBBE",
        "--bgMain": "#36393F",
        "--bgMenu": "#2F3136",
        "--bgTopPanel": "#202225",
        "--extraColor": "#EB850E",
      });
    } else {
      // запоинатор выключения темной темы
      localStorage.setItem('darkThemeOn', 'false');

      $(":root").css({
        "--mainColor": "#202225",
        "--bgMain": "#ebebeb",
        "--bgMenu": " #d2d2d2",
        "--bgTopPanel": "#b5b5b5",
        "--extraColor": "#AF0000",
      });
    }

  }

  // вскрыть меню
  $(".btn__hide").click(function () {
    $(".step").toggleClass("step--hide");
    $(".arrow-scroll").toggleClass("arrow-scroll--hide");

    if ($(".step").hasClass("step--hide")) {
      $(":root").css({
        "--whContainer": "1500px",
      });    
    } else {
      $(":root").css({
        "--whContainer": "1234px",
      });
    }
  });

  // плавный скролл
  $("body").on("click", '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 700);
    e.preventDefault();
  });

 
});
