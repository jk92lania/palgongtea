window.onload = function(){
    // 클론코드 관련 안내
    let modal_close = $('.modal-close');
    let modal = $('.modal');
    modal_close.click(function () {
        modal.stop().fadeOut(200);
    });

    // 퀵메뉴
    let window_width = $(window).innerWidth();
    $(window).resize(function(){
        window_width = $(window).innerWidth();        
    });
    let qu_pos = $('.visual').outerHeight();
    let quickmenu = $('.quickmenu');
    if(window_width > 1200) {
        quickmenu.stop().fadeIn(200);
    }
    else {
        quickmenu.stop().fadeOut(200);
    }
    $(window).scroll(()=>{
        let now_pos = $(this).scrollTop();
        console.log(qu_pos);
        if(now_pos < qu_pos && window_width > 1200) {
            quickmenu.stop().fadeIn(200);
        }
        else {
            quickmenu.stop().fadeOut(200);
        }
        
    });
    $(window).resize(function(){
        window_width = $(window).innerWidth();
        if(window_width > 1200) {
            quickmenu.stop().fadeIn(200);
        }
        else {
            quickmenu.stop().fadeOut(200);
        }
    });

    // mobile menu
    let mobile_btn = $('.mobile-btn');
    let mobilemenu_close = $('.mobilemenu-close');
    let mobilemenu = $('.mobilemenu');
    mobile_btn.click(function(){
        mobilemenu.addClass('mobilemenu-active');
        $('html').addClass('scroll-stop');
    });
    mobilemenu_close.click(function(){
        mobilemenu.removeClass('mobilemenu-active');
        $('html').removeClass('scroll-stop');
        mobilemenu_list_li_a.removeClass('mobilemenu-li-active');
        mobilemenu_submenu.slideUp();
    });

    let mobilemenu_list_li_a = $('.mobilemenu-list > li > a');
    let mobilemenu_submenu = $('.mobilemenu-submenu');
    $.each(mobilemenu_list_li_a, function(index, item) {
        $(this).click(function(){
            if($(this).hasClass('mobilemenu-li-active')) {
                mobilemenu_list_li_a.removeClass('mobilemenu-li-active');
                mobilemenu_submenu.slideUp();
            } else {
                mobilemenu_list_li_a.removeClass('mobilemenu-li-active');
                mobilemenu_submenu.slideUp();
                $(this).addClass('mobilemenu-li-active');
                mobilemenu_submenu.eq(index).slideDown();
            }
        });
    });
    $(window).resize(function(){
        window_width = $(window).innerWidth();
        if(window_width > 1200) {            
            mobilemenu.removeClass('mobilemenu-active');
            $('html').removeClass('scroll-stop');
            mobilemenu_list_li_a.removeClass('mobilemenu-li-active');
            mobilemenu_submenu.slideUp();
        }
    });

    
    // 메뉴
    let submenu_bg = $('.submenu-bg');
    let submenu = $('.submenu');
    let submenu_height = 0;
    let submenu_height_p = 50;
    let nav = $('.nav');
    let nav_height = nav.outerHeight();    
    function submenu_hide(){
        submenu_bg.css('opacity', 0); 
    };
    $.each(submenu, function(index, item){
        if(submenu_height < $(this).outerHeight()){
            submenu_height = $(this).outerHeight();
        }
    });
    submenu_height += submenu_height_p;
    // console.log(submenu_height);
    
    nav.mouseenter(function(){
        clearTimeout();
        $(this).css('height', submenu_height);
        submenu_bg.css('height', submenu_height);
        submenu_bg.css('opacity', 1);        
    });
    nav.mouseleave(function(){        
        $(this).css('height', nav_height);
        submenu_bg.css('height', 0);       
        clearTimeout();
        setTimeout(submenu_hide, 300);
    });


    // 비주얼
    let sw_visual = new Swiper('.sw-visual', {
        pagination : {
            el : '.sw-visual-pg',
        },
        navigation : {
            prevEl : '.sw-visual-prev',
            nextEl : '.sw-visual-next',
        },
        loop : true,
        autoplay : {
            delay : 3500,
            disableOnInteraction : false,
        },
        speed : 1000,
    });


    // 차메뉴 데이터
    let sw_menu_data = [
        {
            'name' : '블랙밀크티(ICE)',
            'new' : 'new',
            'info' : '진하고 감미로운 홍차와 쫀득한 타피오카 펄이 어우러진 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '226',
            'kcal_big' : '329.3',
            'fat_basic' : '9',
            'fat_big' : '12.4',
            'protein_basic' : '1',
            'protein_big' : '1',
            'salt_basic' : '116',
            'salt_big' : '169.4',
            'sugars_basic' : '13',
            'sugars_big' : '19.6',
            'caffeine_basic' : '114',
            'caffeine_big' : '165.8',
            'serving_size' : '498',
            'allergy' : '우유',
            'imgurl' : 'images/menu_001.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '블랙밀크티(HOT)',
            'new' : 'new',
            'info' : '진하고 감미로운 홍차 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '271',
            'kcal_big' : '359.4',
            'fat_basic' : '8',
            'fat_big' : '19.2',
            'protein_basic' : '1',
            'protein_big' : '0.9',
            'salt_basic' : '133.6',
            'salt_big' : '177.4',
            'sugars_basic' : '25',
            'sugars_big' : '33.7',
            'caffeine_basic' : '199',
            'caffeine_big' : '264.7',
            'serving_size' : '348',
            'allergy' : '우유',
            'imgurl' : 'images/menu_002.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '얼그레이밀크티(ICE)',
            'new' : 'new',
            'info' : '은은하게 베르가못 향이 감도는 티와 쫀득한 타피오카 펄이 어우러진 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '341',
            'kcal_big' : '497',
            'fat_basic' : '10',
            'fat_big' : '14',
            'protein_basic' : '1',
            'protein_big' : '1.5',
            'salt_basic' : '169',
            'salt_big' : '246',
            'sugars_basic' : '31',
            'sugars_big' : '45',
            'caffeine_basic' : '27',
            'caffeine_big' : '40',
            'serving_size' : '498',
            'allergy' : '우유',
            'imgurl' : 'images/menu_003.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '얼그레이밀크티(HOT)',
            'new' : 'new',
            'info' : '은은하게 베르가못 향이 감도는 티 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '268.3',
            'kcal_big' : '356.2',
            'fat_basic' : '10.6',
            'fat_big' : '14',
            'protein_basic' : '1',
            'protein_big' : '1.4',
            'salt_basic' : '172',
            'salt_big' : '228.2',
            'sugars_basic' : '24',
            'sugars_big' : '32.3',
            'caffeine_basic' : '27',
            'caffeine_big' : '277.2',
            'serving_size' : '348',
            'allergy' : '우유',
            'imgurl' : 'images/menu_004.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '우롱밀크티(ICE)',
            'new' : 'new',
            'info' : '깊고 구수한 향이 감도는 티와 쫀득한 타피오카 펄이 어우러진 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '333.2',
            'kcal_big' : '486.4',
            'fat_basic' : '8.5',
            'fat_big' : '12.4',
            'protein_basic' : '1',
            'protein_big' : '1',
            'salt_basic' : '122',
            'salt_big' : '178.1',
            'sugars_basic' : '30.9',
            'sugars_big' : '45.1',
            'caffeine_basic' : '99.6',
            'caffeine_big' : '145.4',
            'serving_size' : '498',
            'allergy' : '우유',
            'imgurl' : 'images/menu_005.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '우롱밀크티(HOT)',
            'new' : 'new',
            'info' : '깊고 구수한 향이 감도는 티 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '263.4',
            'kcal_big' : '349.7',
            'fat_basic' : '7',
            'fat_big' : '9.7',
            'protein_basic' : '0.7',
            'protein_big' : '0.9',
            'salt_basic' : '129.1',
            'salt_big' : '171.4',
            'sugars_basic' : '25',
            'sugars_big' : '33.3',
            'caffeine_basic' : '122',
            'caffeine_big' : '162.2',
            'serving_size' : '348',
            'allergy' : '우유',
            'imgurl' : 'images/menu_006.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '자스민 그린 밀크티(ICE)',
            'new' : 'new',
            'info' : '꽃잎 향이 감도는 티와 쫀득한 타피오카 펄이 어우러진 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '335',
            'kcal_big' : '489',
            'fat_basic' : '8',
            'fat_big' : '12',
            'protein_basic' : '0',
            'protein_big' : '1',
            'salt_basic' : '154',
            'salt_big' : '225',
            'sugars_basic' : '30',
            'sugars_big' : '44',
            'caffeine_basic' : '37',
            'caffeine_big' : '55',
            'serving_size' : '498',
            'allergy' : '우유',
            'imgurl' : 'images/menu_007.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '자스민그린밀크티(HOT)',
            'new' : 'new',
            'info' : '꽃잎 향이 감도는 밀크티',
            'price_basic' : '2000',
            'price_big' : '3000',
            'kcal_basic' : '262',
            'kcal_big' : '347.886',
            'fat_basic' : '7',
            'fat_big' : '9.7',
            'protein_basic' : '0.3',
            'protein_big' : '0.5',
            'salt_basic' : '86',
            'salt_big' : '113.7',
            'sugars_basic' : '25',
            'sugars_big' : '33.7',
            'caffeine_basic' : '64.7',
            'caffeine_big' : '85.9',
            'serving_size' : '348',
            'allergy' : '우유',
            'imgurl' : 'images/menu_008.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '타로밀크티(ICE)',
            'new' : 'new',
            'info' : '타로의 달달함과 고소함을 쫀득한 타피오카 펄이 어우러진 밀크티',
            'price_basic' : '2700',
            'price_big' : '3700',
            'kcal_basic' : '514',
            'kcal_big' : '653',
            'fat_basic' : '16',
            'fat_big' : '20',
            'protein_basic' : '1',
            'protein_big' : '1',
            'salt_basic' : '215',
            'salt_big' : '274',
            'sugars_basic' : '46',
            'sugars_big' : '58',
            'caffeine_basic' : '0',
            'caffeine_big' : '0',
            'serving_size' : '532',
            'allergy' : '우유,대두',
            'imgurl' : 'images/menu_009.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
        {
            'name' : '타로밀크티(HOT)',
            'new' : 'new',
            'info' : '타로의 달달함과 고소한 밀크티',
            'price_basic' : '2700',
            'price_big' : '3700',
            'kcal_basic' : '422',
            'kcal_big' : '282.5',
            'fat_basic' : '13',
            'fat_big' : '17',
            'protein_basic' : '0',
            'protein_big' : '0.5',
            'salt_basic' : '211',
            'salt_big' : '282.5',
            'sugars_basic' : '41',
            'sugars_big' : '55.5',
            'caffeine_basic' : '0',
            'caffeine_big' : '0',
            'serving_size' : '373',
            'allergy' : '우유,대두',
            'imgurl' : 'images/menu_010.png',
            'link' : '#',
            'bgimgurl' : 'images/menu_militea.png',
            'bgalt' : '밀크티'
        },
    ];

    let sw_menu_total = sw_menu_data.length;
    let sw_menu_html = '';
    for (let i = 0; i < sw_menu_total; i++) {
        let temp_data = sw_menu_data[i];
        sw_menu_html += '<div class="swiper-slide">';
        sw_menu_html += '<div class="menu-img teamenu-img">';
        sw_menu_html += '<span class="menu-img-bg teamenu-img-bg">';
        sw_menu_html += '<img src=\"';
        sw_menu_html += temp_data.bgimgurl;
        sw_menu_html += '\" alt=\"';
        sw_menu_html += temp_data.bgalt;
        sw_menu_html +='\">';
        sw_menu_html += '</span>';
        sw_menu_html += '<img src=\"';
        sw_menu_html +=  temp_data.imgurl;
        sw_menu_html += '\" alt="';
        sw_menu_html += temp_data.name;
        sw_menu_html += '\" class="menu-img-main teamenu-img-main">';
        sw_menu_html += '</div>';
        sw_menu_html += '<div class="teamenu-name">';
        sw_menu_html += temp_data.name;
        sw_menu_html += '</div>';
        sw_menu_html += '<a href=\"';
        sw_menu_html += temp_data.link;
        sw_menu_html += '\" class="btn-more teamenu-more">';
        sw_menu_html += '자세히보기';
        sw_menu_html += '</a>';
        sw_menu_html += '</div>';        
    }

    let sw_menu_wrapper = $('.sw-menu .swiper-wrapper');
    sw_menu_wrapper.html(sw_menu_html);

    // 차메뉴 슬라이드
    
    let sw_menu = new Swiper('.sw-menu', {
        slidesPerView: 2,        
        navigation : {
            prevEl : '.sw-menu-prev',
            nextEl : '.sw-menu-next',
        },
        spaceBetween : 10,
        breakpoints : {
            1200 : {
                slidesPerView: 4, 
            },
            750 : {
                slidesPerView: 3, 

            }
        },
    });

    // 차메뉴 슬라이드 선택
    let teamenu_more = $('.teamenu-more');
    let teamenu_img_bg = $('.teamenu-img-bg');

    $.each(teamenu_more, function(index, item){
        $(this).mouseenter(function(){
            teamenu_img_bg.eq(index).toggleClass('teamenu-img-bg-active');
        });
        $(this).mouseleave(function(){
            teamenu_img_bg.eq(index).toggleClass('teamenu-img-bg-active');
            
        });
        $(this).click(function(event){
            event.preventDefault();
            // 모달창을 띄운다            
            popupMenuRemove();
            popupMenuCreate(index);
            popup_menu.show();            
            $('html').addClass('scroll-stop');
            
        });
    });
    
    // 차메뉴 모달창
    let popup_menu_close = $('.popup-menu-close');
    let popup_menu = $('.popup-menu');
    let nutrition = $('.nutrition-table td');
    
    popup_menu_close.click(function(){
        popup_menu.hide();
        popupMenuRemove();            
        $('html').removeClass('scroll-stop');
    });

    function popupMenuCreate(_index){
        let temp = '<img src=\"';
        temp += sw_menu_data[_index].bgimgurl;
        temp += '\" alt=\"';
        temp += sw_menu_data[_index].bgalt;
        temp += '\">';
        $('.popup-menu-img-bg').html(temp);
        
        temp = '<img src=\"';
        temp += sw_menu_data[_index].imgurl;
        temp += '\" alt=\"';
        temp += sw_menu_data[_index].name;
        temp += '\" class="menu-img-main popup-menu-img-main">';
        $('.popup-menu-img').append(temp);
        
        $('.popup-menu-name').html(sw_menu_data[_index].name);
        $('.popup-menu-new').html(sw_menu_data[_index].new);
        
        temp = '<p>'+ sw_menu_data[_index].info + '</p>';
        $('.popup-menu-new').after(temp);
        
        $('.popup-menu-size-basic dd').html(sw_menu_data[_index].price_basic + '원');
        $('.popup-menu-size-big dd').html(sw_menu_data[_index].price_big + '원'); 
        
        nutrition.eq(0).html(sw_menu_data[_index].kcal_basic);
        nutrition.eq(1).html(sw_menu_data[_index].kcal_big);
        nutrition.eq(2).html(sw_menu_data[_index].salt_basic);
        nutrition.eq(3).html(sw_menu_data[_index].salt_big);
        nutrition.eq(4).html(sw_menu_data[_index].fat_basic);
        nutrition.eq(5).html(sw_menu_data[_index].fat_big);
        nutrition.eq(6).html(sw_menu_data[_index].sugars_basic);
        nutrition.eq(7).html(sw_menu_data[_index].sugars_big);
        nutrition.eq(8).html(sw_menu_data[_index].protein_basic);
        nutrition.eq(9).html(sw_menu_data[_index].protein_big);
        nutrition.eq(10).html(sw_menu_data[_index].caffeine_basic);
        nutrition.eq(11).html(sw_menu_data[_index].caffeine_big);
        
        $('.serving-size dd').html(sw_menu_data[_index].serving_size);
        $('.allergy dd').html(sw_menu_data[_index].allergy); 
        
    };
    function popupMenuRemove(){
        $('.popup-menu-img-bg').empty();
        $('.popup-menu-img-main').remove();
        $('.popup-menu-name').empty();
        $('.popup-menu-new').empty();
        $('.popup-menu-info > p').remove();
        $('.popup-menu-info dd').empty();
        $('.popup-menu-info td').empty();
    };
    



    // 신규 오픈매장 슬라이드
    let sw_newstore = new Swiper('.sw-newstore', {
        slidesPerView: 2,
        spaceBetween : 52,
        slidesPerGroup : 4,
        pagination : {
            el : '.sw-newstore-pg',
        },
        navigation : {
            prevEl : '.sw-newstore-prev',
            nextEl : '.sw-newstore-next',
        },
        breakpoints : {
            1200 : {
                slidesPerView: 4, 
            },
            750 : {
                slidesPerView: 3, 

            }
        },  
    });

    // 신규 오픈매장 이미지 크기 균일
    let newstore_img = $('.newstore-img');
    let newstore_img_w = newstore_img.width();
    let newstore_ratio = 1.24;
    $('.newstore-img').css('height', newstore_img_w * newstore_ratio);
    $(window).resize(function(){
        newstore_img_w = newstore_img.width();        
        $('.newstore-img').css('height', newstore_img_w * newstore_ratio);
    });
    
    
    // 신규 오픈매장 선택
    let newstore_more = $('.newstore-more');
    $.each(newstore_more, function(index, item){
        $(this).mouseenter(function(event){
            newstore_img.find('span').eq(index).addClass('opa-see');
        });
        $(this).mouseleave(function(event){
            newstore_img.find('span').eq(index).removeClass('opa-see');
        });
        $(this).click(function(event){

        });
    });
    $.each(newstore_img, function(index, item){        
        $(this).click(function(event){

        });
    });


    // 공지사항 슬라이드
    let sw_notice = new Swiper('.sw-notice', {
        slidesPerView: 2,
        spaceBetween : 20,
        pagination : {
            el : '.sw-notice-pg',
        },
        breakpoints : {
            1200 : {
                slidesPerView: 4, 
            },
            750 : {
                slidesPerView: 3, 

            }
        },          
    });


    // 공지사항 이미지 크기 균일
    // 신규 오픈매장 이미지 크기 균일
    let notice_img = $('.notice-img');
    let notice_img_w = notice_img.width();
    let notice_ratio = 0.85;
    $('.notice-img').css('height', Math.abs(notice_img_w * notice_ratio));
    $(window).resize(function(){
        notice_img_w = notice_img.width();        
        $('.notice-img').css('height', Math.abs(notice_img_w * notice_ratio));
        
    });


    // 공지사항 슬라이드 애니메이션
    let notice_box = $('.notice-box');
    $.each(notice_box, function(index, item){
        $(this).mouseenter(function(event){
            if(window_width > 750) {
                $(this).addClass('notice-box-active');          
                notice_img.eq(index).find('span').addClass('opa-see');

            }
        });
        $(this).mouseleave(function(event){
            $(this).removeClass('notice-box-active');           
            notice_img.eq(index).find('span').removeClass('opa-see');
        });
    });


}