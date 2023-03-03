<script type="text/javascript">
    var swiper = new Swiper(".slide-brands", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            545: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        },
    });

    var input = document.querySelector(".phone");
    window.intlTelInput(input, {
        utilsScript: '/assets/js/utils.js',
        // allowDropdown            : false,
        // autoHideDialCode         : false,
        autoPlaceholder: 'off',
        // dropdownContainer        : document.body,
        // excludeCountries         : ["us"],
        // formatOnDisplay          : false,
        // geoIpLookup              : function(callback) {
        //     $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
        //         var countryCode = (resp && resp.country) ? resp.country : "";
        //         callback(countryCode);
        //     });
        // },
        // hiddenInput              : 'full_number',
        // initialCountry           : 'auto',
        // localizedCountries       : { 'de': 'Deutschland' },
        // nationalMode             : false,
        // placeholderNumberType    : 'MOBILE',
        preferredCountries: ['tr'],
        separateDialCode: true,
    });
</script>
