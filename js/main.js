$(document).ready(function(){
	var heightBody = $(window).height();
	// height header
	$('.paralax-header-theme,.header-section').css('height',heightBody);

	// header title text
	var headText =  $('.header-title-text').height();
	var headTopText = (heightBody - headText) / 2;
	$('.header-title-text').css('top',headTopText);
	setTimeout(function(){
		$('.header-title-text h1').addClass('fadeInUp animated')
	},500)
	setTimeout(function(){
		$('.header-title-text h3').addClass('fadeInUp animated')
	},1000)
	setTimeout(function(){
		$('.header-title-text a').addClass('fadeInUp animated')
	},1500)

	//menu-mobile
	$('.mobile-menu-btn').on('click',function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('.top-menu-mobile').removeClass('active');
			$('.top-menu-mobile').animate({'height':'50px'},500)
			$('.top-menu-mobile').removeClass('active');
		}else{
			$(this).addClass('active');
			$('.top-menu-mobile').addClass('active');
			$('.top-menu-mobile').animate({'height':heightBody},500)
		}
	})

	//number animation
	var numbOne = $('#numb-one').html();
	$('#numb-one').animateNumber( {number: numbOne,},2000);

	var numbtwo = $('#numb-two').html();
	$('#numb-two').animateNumber( {number: numbtwo,},2000);

	var numbthree = $('#numb-three').html();
	$('#numb-three').animateNumber( {number: numbthree,},2000);

	var numbfour = $('#numb-four').html();
	$('#numb-four').animateNumber( {number: numbfour,},2000);

	//bck-image

	$('.bck-section span').each(function(){
		var imgLink = $(this).attr('link');
		$(this).css('background', 'url('+imgLink+')no-repeat center');
	})

	});



$(window).resize(function(){
	// height header
	var heightBody = $(window).height();
	$('.paralax-header-theme,.header-section').css('height',heightBody);
	// header title text
	var headText =  $('.header-title-text').height();
	var headTopText = (heightBody - headText) / 2;
	$('.header-title-text').css('top',headTopText);

})