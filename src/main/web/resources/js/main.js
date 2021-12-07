
$(function(){

    // 탭 컨텐츠 숨기기
    $(".tab_content").hide();

    // 첫번째 탭콘텐츠 보이기
    $(".tab_container").each(function () {
    $(this).children(".tab ul li:first").addClass("active"); //Activate first tab
    $(this).children(".tab_content").first().show();
    $(this).children(" .tab_content .tab_container").show();
    });
    //탭메뉴 클릭 이벤트
    $(".tab ul li a").click(function () {

    $(this).parent().siblings("li").removeClass("active");
    $(this).parent().addClass("active"); $(this).parent().parent().parent().parent().find(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    });


    var $tab_list = $('.tabArea');
    $tab_list.each(function(idx, ele) {
        var $ele = $(ele);
        {
            var $conts = $ele.find('.tab-con');
            $conts.hide();
            $conts.eq(0).show();
        }
        var $tabs = $ele.find('.tab  ul li');
        $tabs.each(function(tabIdx, li) {
            var $li = $(li);
            var $button = $li.find('a');

            $button.on('click', function(e) {
                e.preventDefault();
                $ele.find('.tab  ul li').removeClass('active');
                $li.addClass('active');
                var $conts = $ele.find('.tab-con');
                $conts.hide();
                $conts.eq(tabIdx).show();
            });
        });
    });
});