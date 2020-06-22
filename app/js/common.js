$(function() {
	
	$('#my-menu').mmenu(
	{
		extensions: [ 'theme-black', 'fx-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: '<img src="img/logo_burger.svg" alt="Логотип">'
		},
		offCanvas: {
			"position": "right"
		}
	});
	
	$('.popup').magnificPopup();
	
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.ok_popup').click();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
	
	$('.last_news__mobile').owlCarousel({
    loop:true,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items: 1,
            dots:true,
            loop:true
			  },
		 500:{
            items: 1,
            dots:true,
            loop:true,
			 	margin: 20
			  },
		  600:{
            items: 2,
            dots:true,
            loop:true,
			 	margin: 20
			  }
		 }
	});
	
	$('.partners__mobile').owlCarousel({
    loop:true,
    margin: 80,
    responsiveClass:true,
    responsive:{
        0:{
            items: 2,
            dots:true,
            loop:true
			  },
		 510:{
            items: 3,
            dots:true,
            loop:true
			  },
		 670:{
            items: 4,
            dots:true,
            loop:true
			  }
		 }
	});
	
	$('.industry__content').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items: 1,
            dots:true,
            loop:true,
			  	margin: 16
			  },
		  500:{
            items: 1,
            dots:true,
            loop:true,
			  	margin: 16
			  },
		 510:{
            items: 2,
            dots:true,
            loop:true,
			  	margin: 20
			  },
		  760:{
            items: 2,
            dots:true,
            loop:true,
			  	margin: 20
			  },
		  980:{
            items: 3,
            dots:true,
            loop:true,
			  	margin: 20
			  },
		  1380:{
            items: 4,
            dots:true,
            loop:true,
			  	margin: 30
			  }
		 }
	});
	
	$('.clients-carousel').owlCarousel({
    loop:true,
    margin: 30,
    responsiveClass:true,
    responsive:{
        0:{
            items: 1,
            dots:true,
            loop:true
			  },
		 470:{
            items: 2,
            dots:true,
            loop:true
			  },
		 640:{
            items: 3,
            dots:true,
            loop:true
			  },
		 1200:{
            items: 4,
            dots:true,
            loop:true
			  }
		 }
	});
	
	
	// Воспроизвидение видео по клику на блок
	const btnOk = document.querySelector('.about_company__video');
	const wrapperVideo = document.getElementById('#about_company__video');

	btnOk.addEventListener('click',function(){
	  wrapperVideo.play();
	});

	btnStop.addEventListener('click',function(){
	  wrapperVideo.pause();
	});
	
	
	/*
	$(function() {
		$('.projects__item').matchHeight({
			 byRow: true,
			 property: 'height',
			 target: null,
			 remove: false
		});
	});

	
	
	/*$("#my-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });*/
	
	
	/*$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.popup2').click();
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});*/
		
});
