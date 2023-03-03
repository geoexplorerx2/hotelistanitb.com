@extends('parent')
@section('title', 'Hotelistan.com')
@section('content')
    <div class="container-fluid">
        <div class="container">
            <div class="row align-items-center">

                <div class="col-6">
                    <a href="javascript:;">
                        <img src="assets/images/logo.svg">
                    </a>
                </div>
                <div class="col-6 text-right">
                    <a href="javascript:;">
                        <img class="itb_logo" src="assets/images/itb_berlin_srgb_m_claim.png">
                    </a>
                </div>

                <div class="col-12">
                    <form class="form" autocomplete="off">
                        <div class="row">
                            <div class="col-12">
                                <label>
                                    <span>Name, Surname</span>
                                    <input type="text" name="fullname">
                                </label>
                            </div>
                            <div class="col-12">
                                <label>
                                    <span>E-Mail Address</span>
                                    <input type="email" name="email">
                                </label>
                            </div>
                            <div class="col-12">
                                <label>
                                    <span>Phone Number</span>
                                    <input type="number" name="phone" class="phone">
                                </label>
                            </div>
                            <div class="col-12">
                                <label>
                                    <span>Your Company</span>
                                    <input type="text" name="company">
                                </label>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-full">
                                    <strong>Send Form</strong>
                                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                                        <path fill="var(--color-white)"
                                            d="m19.633 10.883-5 5a1.25 1.25 0 1 1-1.768-1.768l2.87-2.865H1.25C.559 11.25 0 10.691 0 9.965 0 9.238.559 8.75 1.25 8.75h14.484l-2.866-2.866a1.25 1.25 0 1 1 1.768-1.768l5 5c.485.49.485 1.279-.003 1.767Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="col-12 text-center">
                    <h2 class="title">Our Brands</h2>
                </div>

            </div>
        </div>
    </div>

    <div class="container-fluid content-brands pt-50 pb-50">
        <div class="container">
            <div class="row">

                <div class="col-12">
                    <div class="swiper slide-brands">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide">
                                <a href="javascript:;" class="brand" target="_blank">
                                    <img src="assets/images/logos/arpanu-medical.svg" width="150">
                                    <p>Arpanu Medical is a certified Medical Travel Facilitator that successfully
                                        incorporates patients treatments, travel and hotel accommodation requirements all
                                        into a single unit.</p>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;" class="brand" target="_blank">
                                    <img src="assets/images/logos/catmamescithamami.svg" width="150">
                                    <p>Built in the 16’th century by the greatest Ottoman architect Mimar Sinan, Çatma
                                        Mescit Hammam offers services ranging from Hammam Rituals, Spa Classics to Far East
                                        Massages, Face and Body Treatments.</p>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;" class="brand" target="_blank">
                                    <img src="assets/images/logos/dentfix.svg" width="120">
                                    <p>Dentfix is a Dental Clinic established in Istanbul, specialised in dental treatments
                                        ranging from dental implants, veneers to crowns, smile makeovers and laser teeth
                                        whitening.</p>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;" class="brand" target="_blank">
                                    <img src="assets/images/logos/novaplazahotels.svg" width="150">
                                    <p>With a total number of 7 hotels and a capacity of 856 rooms, Nova Plaza Hotels offers
                                        its guests a comfortable accommodation experience in Istanbul, Turkey.</p>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;" class="brand" target="_blank">
                                    <img src="assets/images/logos/vipser.svg" width="150">
                                    <p>Vipser is a licensed travel agency, with more than 12 years of experience in ground
                                        handling services and incoming tourist operations.</p>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="javascript:;" class="brand" target="_blank">
                                    <img src="assets/images/logos/bookperfect.svg" width="120">
                                    <p>Book Perfect is an online travel agency to help you plan the perfect trip. Book
                                        Perfect will help you find the best deals on flights, hotels, car rentals, airport
                                        transfers and the best activities at your destination.</p>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="https://arpanu.paquetedinamico.com/EN_US/" class="brand" target="_blank">
                                    <img src="assets/images/logos/arpanu-travel.svg" width="150">
                                    <p>Arpanu Travel is a leading incoming Tour Operator in Turkey offering travelers the
                                        best tour packages, accommodation options and transfer services.</p>
                                </a>
                            </div>

                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
