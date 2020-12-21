var mySwiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next-custom',
	  prevEl: '.swiper-button-prev-custom',
	},
  
  })

  var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.5;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
	//   e.preventDefault(); //отменяем стандартное поведение
	  var w = window.pageYOffset,  // производим прокрутка прокрутка
		  hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
	  t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
		  start = null;
	  requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
	  function step(time) {
		  if (start === null) start = time;
		  var progress = time - start,
			  r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
		  window.scrollTo(0,r);
		  if (r != w + t) {
			  requestAnimationFrame(step)
		  } else {
			  location.hash = hash  // URL с хэшем
		  }
	  }
  }, false);
}

$(window).ready(function() {
	if ( $(window).width() > 768 ) {
		$.scrollify({
			section : ".section"
		  });
	}
  });



  $(document).on("click", function(e) {
	if ( ($(e.target).hasClass('burger')) || ($(e.target).hasClass('burger-span')) )
	  $(".menu").toggleClass("show") &&
	  $(".burger").toggleClass("burger-show");
	else
	  $(".menu").removeClass("show") &&
	  $(".burger").removeClass("burger-show");
  });

  $(document).scroll(function() {
	if ($(".menu").hasClass('show'))
	  $(".menu").removeClass("show");
	  $(".burger").removeClass("burger-show");
  });

$(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title1').on("click", function(e) {
			  $(".service__list1").toggleClass("show") 
		  });
	}
  });

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title2').on("click", function(e) {
			  $(".service__list2").toggleClass("show") 
		  });
	}
  }); 
  
  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title3').on("click", function(e) {
			  $(".service__list3").toggleClass("show") 
		  });
	}
  }); 

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title4').on("click", function(e) {
			  $(".service__list4").toggleClass("show") 
		  });
	}
  }); 

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title5').on("click", function(e) {
			  $(".service__list5").toggleClass("show") 
		  });
	}
  }); 

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title6').on("click", function(e) {
			  $(".service__list6").toggleClass("show") 
		  });
	}
  }); 

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title7').on("click", function(e) {
			  $(".service__list7").toggleClass("show") 
		  });
	}
  }); 

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title8').on("click", function(e) {
			  $(".service__list8").toggleClass("show") 
		  });
	}
  }); 

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title9').on("click", function(e) {
			  $(".service__list9").toggleClass("show") 
		  });
	}
  }); 

  $(window).ready(function() {
	if ( $(window).width() < 768 ) {
		$('.service__title10').on("click", function(e) {
			  $(".service__list10").toggleClass("show") 
		  });
	}
  }); 
  
  $(window).ready(function() {
	$('.close').on("click", function(e) {
			$(".service__list").removeClass("show") 
		});
  });  

  $(document).ready(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
	}

	$(".modal-open").on('click', function(e){
		console.log(e);
		showModal('#modal1');
	});
	
	
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.dialog').length)
		||	($(e.target).hasClass('dialog'))
		||	($(e.target).hasClass('modal-open')))
		) {
			hideModals();
		}
	});

	$('.close-dialog').on('click', function(e){
			hideModals();
	});
	
});  

var $body = $(document.body);
var oldWidth = $body.innerWidth();
$body.css("overflow", "hidden");
$body.width(oldWidth);

$(window).ready(function() {
	if ( $(window).width() < 768 ) {
		new SimpleBar(document.getElementById('modal-scroll'), { autoHide: false });
	}
  }); 