$(document).ready(function(){

	var svg_valid_icon = "21.4,4.7 21.4,4.7 21.4,4.7 18.6,7.5 18.6,7.5 8.7,17.4 3,11.7 0,14.5 5.9,20.2 8.7,23 20.2,11.5 24.2,7.5";

	var svg_arrow_icon = "17.4,8.7 17.4,8.7 8.7,0 5.9,2.8 14.6,11.5 8.7,17.4 8.8,17.3 5.8,20.1 5.9,20.2 8.7,23 20.2,11.5 20.2,11.5";

	var list_elem_count = $("#steps li").length;

	var navigation_pos;

	var clickable_btn = true;

	(function ($) {
		'use strict';
		try {
			$('.js-datepicker').daterangepicker({
				"singleDatePicker": true,
				"showDropdowns": true,
				"autoUpdateInput": false,
				locale: {
					firstDay: 1,
					format: 'DD/MM/YYYY'
				},
				minDate: moment().add(1, 'days'),
            	maxDate: moment().add(359, 'days'),
			});

			$("#book").find('#arrivalTime').clockpicker({
				autoclose: true,
				donetext: 'Done',
				placement: 'left',
				align: 'top'
			});

			var myCalendar = $('.js-datepicker');
			var isClick = 0;

			$(window).on('click',function(){
				isClick = 0;
			});

			$("#massage-package").select2({
				placeholder: "Massage Package"
			});

			$("#hammam-package").select2({
				placeholder: "Hammam Package"
			});

			$("#male-number").select2({
				placeholder: "Male Pax"
			});

			$("#female-number").select2({
				placeholder: "Female Pax"
			});

			$(myCalendar).on('apply.daterangepicker',function(ev, picker){
				isClick = 0;
				$(this).val(picker.startDate.format('DD/MM/YYYY'));

			});

			$('.js-btn-calendar').on('click',function(e){
				e.stopPropagation();

				if(isClick === 1) isClick = 0;
				else if(isClick === 0) isClick = 1;

				if (isClick === 1) {
					myCalendar.focus();
				}
			});

			$(myCalendar).on('click',function(e){
				e.stopPropagation();
				isClick = 1;
			});

			$('.daterangepicker').on('click',function(e){
				e.stopPropagation();
			});


		}
		catch(er) {console.log(er);}

		try {
			var selectSimple = $('.js-select-simple');

			selectSimple.each(function () {
				var that = $(this);
				var selectBox = that.find('select');
				var selectDropdown = that.find('.select-dropdown');
				selectBox.select2({
					dropdownParent: selectDropdown
				});
			});

		} catch (err) {
			console.log(err);
		}


	})(jQuery);


	splitText();
	animateText();


	init();

	function init(){

		try {
			add_navigation();
			var next_step_btn_width = $("#navigation li.current_nav").outerWidth();

			var navigation_parent_width = $('#navigation').parent().width();

			navigation_pos = (navigation_parent_width/2) - ((next_step_btn_width/2)+5);

			$('#navigation').css({'marginLeft' : navigation_pos+5});

			update_progress(1);

			focus_inupt(0);
		}
		catch(error){
			console.info(error);
		}

	}

	var input = document.querySelector("#phone");
    var country = document.querySelector("#country");
    var countryData = window.intlTelInputGlobals.getCountryData();
    var iti = window.intlTelInput(input, {
        autoHideDialCode: false,
        autoPlaceholder: "on",
        geoIpLookup: function (callback) {
            $.get("https://api.ipgeolocation.io/ipgeo?apiKey=422275249a7e4de6ab10a264a99114f8&fields=geo", function () { }, "json").always(function (resp) {
                var countryCode = (resp && resp.country_code2) ? resp.country_code2 : "";
                callback(countryCode);
            });
        },
        initialCountry: "auto",
        nationalMode: false,
        preferredCountries: ['gb', 'tr', 'fr', 'sa', 'us', 'de', 'se', 'be', 'kw', 'ae', 'qa', 'nl'],
        separateDialCode: false,
        utilsScript: "/js/utils.js",
    });
    input.addEventListener('countrychange', function (e) {
        var countryname = iti.getSelectedCountryData().name;
        country.value = countryname.replace(/.+\((.+)\)/, "$1");
    });

	$('#navigation li').on('click', function(e){
		execute_event($(this).index());
	});

	$(document).on('keypress', function(e){
		var keyCode = e.keyCode || e.which
		if(keyCode === 13) {
			var current_step_idx = $('#navigation li.current_nav').index();
			execute_event(current_step_idx);
		}
	});

	function execute_event(idx){
		try {
			if(!clickable_btn || !$('#navigation li').eq(idx).hasClass('current_nav')){
				return false;
			}

			if(!validate_form(idx)){
				show_error(idx);
				return false;
			}

			else{
				clickable_btn = false;
				clear_error();
				if(idx<list_elem_count-1){
					navigation_pos =  navigation_pos-20;
				}
				animate_navigation(idx+1, navigation_pos);
			}
		}

		catch(error){
			console.info(error);
		}
	}

	function animate_navigation(btn_index, new_pos){
		try {
			var s = Snap('.current_nav .arrow');

			$('#navigation li').eq(btn_index-1).addClass('animate');

			s.stop().animate({'points' : svg_valid_icon}, 150, mina.easeout, function(){

				if(btn_index<list_elem_count){
					$(".arrow").velocity("fadeOut", {delay : 200, duration: 200, complete : function(){
						update_nav_position(btn_index, new_pos);
						$(this).eq(btn_index).css({"opacity" : 1});
						clickable_btn = true;
					}});
				}

				else if(btn_index==list_elem_count){
					update_nav_position(btn_index, new_pos);
					form_ready();
				}
			});
		}

		catch(error){
			console.info(error);
		}
	}

	function update_nav_position(el_index, new_pos){
		$('#navigation').velocity({marginLeft : new_pos}, 200);
		$('#navigation li').eq(el_index).addClass('current_nav').siblings().removeClass('current_nav animate');
		$('#navigation li').eq(el_index-1).addClass('valid');

		if(el_index <= list_elem_count-1){
			$('#navigation li').eq(list_elem_count-1).addClass('submit');
			next_step(el_index);
			focus_inupt(el_index);
		}
	}

	function validate_form(step_index){
		try {
			if($('#steps li input').eq(step_index).val() != ''){
				return true;
			}
			else{
				return false;
			}
		}
		catch(error){
			console.info(error);
		}

	}

	function focus_inupt(input_idx){
		try {
			if($('#steps li input').length != 0){
				$('#steps li input').eq(input_idx).focus();
			}
			else {
				return false;
			}
		}
		catch(error){
			console.info(error);
		}
	}

	function stringToArray(string) {
		var array = [],
			length = string.length,
			index = 0;

		for(; index < length; ++index) {
		  array.push(string[index]);
		}

		return array;
	  }

	function splitText() {
		try  {
			var context = $('[data-magic-text]'),
				contents = context.text(),
				letters = stringToArray(contents),
				markup = '';

				letters.forEach(function(letter) {
				markup += '<span>' + letter + '</span>';
			});

			context.html(markup);
		}

		catch(error){
			console.info(error);
		}
	}

	function animateText() {
		try {
			var context = $('[data-magic-text]'),
			delay = 1000;

			context.children().each(function(index, letter) {
			  setTimeout(function() {
				$(letter).addClass('is-visible');
			  }, delay * (index / 15));
			});
		}
		catch(error){
			console.info(error);
		}
	}

	function add_navigation(){
		try {
			if(list_elem_count == 0){
				return false
			}

			var pag_markup = '<div class="navigation_container"><ul class="clearfix" id="navigation">';
			var icon_markup = '<div class="icon" id="icon_wrapper"><svg x="0px" y="0px" width="24.3px" height="23.2px" viewBox="0 0 24.3 23.2" enable-background="new 0 0 24.3 23.2" xml:space="preserve"><polygon class="arrow" fill="#ffffff" points="'+ svg_arrow_icon +'"></svg></div>';

			for (var i = 1; i <= list_elem_count; i++) {
				pag_markup = pag_markup + '<li>'+ icon_markup + '</li>';
			};

			$('#steps').after(pag_markup + '</div>');
			$('#navigation li').eq(0).addClass('current_nav');
		}
		catch(error){
			console.info(error);
		}
	}

	function next_step(idx){
		try {
			$('#steps li').eq(idx-1).removeClass('current_step');
			$('#steps li').eq(idx).addClass('current_step');
			$('.wrapper').addClass('animated fadeInLeft');
			setTimeout(function(){
				$('.wrapper').removeClass('animated fadeInLeft');
			}, 1500);
			update_progress(idx+1);
		}
		catch(error){
			console.info(error);
		}
	}

	function show_error(index){
		try {
			$('#navigation li').eq(index).addClass('error animate');
			$('#steps li').eq(index).addClass('error');
		}
		catch(error){
			console.info(error);
		}
	}

	function clear_error(){
		try {
			$('#navigation li').removeClass('error');
			$('#steps li').removeClass('error');
		}
		catch(error){
			console.info(error);
		}
	}

	function form_ready(){
		swal({
			icon: 'success',
			title: 'Reservation Created Successfully!',
			// timer: 1000,
			text: ''
		});
		location.reload();
		setTimeout(function(){
			$("#book").submit();
		});
	}

	function update_progress(id){
		try {
			$('.step_nb').text(id +'/'+list_elem_count);
		}
		catch(error){
			console.info(error);
		}
	}

});

function timeFormat(timeInput) {
	try {
		validTime = timeInput.value;

		if (validTime < 24 && validTime.length == 2) {
			timeInput.value = timeInput.value + ":";
			return false;
		}
		if (validTime == 24 && validTime.length == 2) {
			timeInput.value = timeInput.value.length - 2 + "0:";
			return false;
		}
		if (validTime > 24 && validTime.length == 2) {
			timeInput.value = "";
			return false;
		}
		if (validTime.length == 5 && validTime.slice(-2) < 60) {
			timeInput.value = timeInput.value + "";
			return false;
		}
		if (validTime.length == 5 && validTime.slice(-2) > 60) {
			timeInput.value = timeInput.value.slice(0, 2) + "";
			return false;
		}
		if (validTime.length == 5 && validTime.slice(-2) == 60) {
			timeInput.value = timeInput.value.slice(0, 2) + ":00";
			return false;
		}
	} catch (error) {
		console.info(error);
	} finally {
		console.log(DEFINITIONS.LOG_COMPLETED);
	}
}


    function increaseValue() {
        var value = parseInt(document.getElementById('male').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('male').value = value;
    }

    function decreaseValue() {
        var value = parseInt(document.getElementById('male').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('male').value = value;
    }
    function increaseValueF() {
        var value = parseInt(document.getElementById('female').value, 10);
        value = isNaN(value) ? 0 : value;
        value++;
        document.getElementById('female').value = value;
    }

    function decreaseValueF() {
        var value = parseInt(document.getElementById('female').value, 10);
        value = isNaN(value) ? 0 : value;
        value < 1 ? value = 1 : '';
        value--;
        document.getElementById('female').value = value;
    }

    function toggle(el) {
        $('#' + el).toggleClass('active');
    };

    $(function() {
        $("#reservation-date").datepicker({
            selectOtherMonths   : true,
            showOtherMonths     : true,
            dateFormat          : 'dd M, yy',
            firstDay            : 1,
            minDate             : 0,
        });

    });

    $(".person").on("blur", function(){
        var sum=0;
        $(".person").each(function(){
            if($(this).val() != "")
              sum += parseInt($(this).val());
        });

        $(".person .number").html(sum);
    });

    $('#booking').formValidation({
            fields: {
                email: {
                    validators: {
                        emailAddress:{
                            message: 'Please Enter a Valid Email'
                        }
                    },
                },
                phone: {
                    validators: {
                        stringLength:{
                            min:11,
                            max:15,
                            message: 'Please Enter a Valid Number'
                        }
                    },
                },
            },
            plugins: {
            },
        });

//Force to write only numbers and + sign

document.getElementById("phone").addEventListener("keypress", function(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 43) {
        event.preventDefault();
    }
    });
    document.getElementById("phone").addEventListener("keyup", function(event) {
        if (event.target.value.length < 8) {
          document.getElementById("error").innerHTML = "Please enter at least 10 characters";
        } else {
          document.getElementById("error").innerHTML = "";
        }
      });
// End Force to write only numbers and + sign

