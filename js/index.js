// 性别选择
$('.boy').on('click',function () {
    if($(this).hasClass('boyActive')){
        $(this).removeClass('boyActive');
    }else{
        $(this).addClass('boyActive');
        $(this).siblings('input').removeClass('girlActive');
    }
});
$('.girl').on('click',function () {
    if($(this).hasClass('girlActive')){
        $(this).removeClass('girlActive');
    }else{
        $(this).addClass('girlActive')
        $(this).siblings('input').removeClass('boyActive');
    }
});

function checkInfo(form) {
    if(form.username.value=='') {
        $('.writeName').css('display','block');
        setTimeout(function () {
            $('.writeName').css('display','none');
        },2000)
        form.username.focus();
        return false;
    }else{
        return true;
    }
    if(!$("input[name='sex']").is(":checked")){
        return false;
    }else{
        return true;
    }
}

// 点击制作我的写照
$('.makePhoto').on('click',function () {
    var userName=$('.userName').val()
    var boyGirl=$(':radio[name=sex]:checked').val();
    localStorage.setItem('userName',userName);
    localStorage.setItem('boyGirl',boyGirl);
});

$(function () {
    var getUsername=localStorage.getItem('userName');
    $(':radio').removeAttr('checked');
    var getBoyGirl=localStorage.getItem('boyGirl');
    console.log(getBoyGirl)
    $(':radio').each(function () {
        if ($(this).val() == getBoyGirl) {
            $(this).prop("checked", true);
        }
    });

    $('.someone').text(getUsername);

    // 根据用户选择的是男生还是女生，显示不同的‘任务类型’及页面内容
    if(getBoyGirl=="0"){
        $('.boyImage').css('display','block');
        $('.girlImage').css('display','none');
        $('.makePlace').css('background-image','url("../images/boy1.png")');
        $('.someStyle').text('艺术少年');
        $('.onlyGirl').hide();
    }else{
        $('.girlImage').css('display','block');
        $('.boyImage').css('display','none');
        $('.makePlace').css('background-image','url("../images/girl1.png")');
        $('.someStyle').text('艺术少女');
        $('.onlyBoy').hide();
    };

    // 选择男生形象
    var boyImage=$('.boyImage li');
    boyImage.on('click',function () {
        boyImage.removeClass('activeMan');
        $(this).addClass('activeMan');
        var whichMan=$(this).children('span').html();
        var index=$(this).index();
        var photoPage=$(this).parent().parent().parent().parent();
        photoPage.find('.yourPhoto').children('.someStyle').html(whichMan);
        var baseUrl='../images/';
        var boyImgs=[baseUrl+'boy1.png',baseUrl+'boy2.png',baseUrl+'boy3.png',baseUrl+'boy4.png',baseUrl+'boy5.png'];
        for(var i=0;i<boyImage.length;i++){
            if(i==index){
                $('.makePlace').css('background-image','url('+boyImgs[i]+')');
            }
        };
    });

    // 选择女生形象
    var girlImage=$('.girlImage li');
    girlImage.on('click',function () {
        girlImage.removeClass('activeMan');
        $(this).addClass('activeMan');
        var whichMan=$(this).children('span').html();
        $('.someStyle').html(whichMan);
        var index=$(this).index();
        var baseUrl='../images/';
        var girlImgs=[baseUrl+'girl1.png',baseUrl+'girl2.png',baseUrl+'girl3.png',baseUrl+'girl4.png',baseUrl+'girl5.png'];
        for(var j=0;j<girlImgs.length;j++){
            if(j==index){
                $('.makePlace').css('background-image','url('+girlImgs[j]+')');
            }
        };
    });

    // 选择背景
    var bgsLi=$('.chooseBg li');
    bgsLi.on('click',function () {
        console.log($(this).index())
        // 女生的背景
        if(getBoyGirl=="1"){
            var index=$(this).index();
            var baseUrl='../images/';
            var makeplaceBg=$('.makePlace').css('background-image');
            var getPng=makeplaceBg.split('/').pop().substr(0,5);
            if(getPng=="girl1"){
                var girl1Imgs=[baseUrl+'girl1_1.png',baseUrl+'girl1_2.png',baseUrl+'girl1_3.png',baseUrl+'girl1_4.png'];
                for(var i=0;i<girl1Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl1Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl2"){
                var girl2Imgs=[baseUrl+'girl2_1.png',baseUrl+'girl2_2.png',baseUrl+'girl2_3.png',baseUrl+'girl2_4.png'];
                for(var i=0;i<girl2Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl2Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl3"){
                var girl3Imgs=[baseUrl+'girl3_1.png',baseUrl+'girl3_2.png',baseUrl+'girl3_3.png',baseUrl+'girl3_4.png'];
                for(var i=0;i<girl3Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl3Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl4"){
                var girl4Imgs=[baseUrl+'girl4_1.png',baseUrl+'girl4_2.png',baseUrl+'girl4_3.png',baseUrl+'girl4_4.png'];
                for(var i=0;i<girl4Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl4Imgs[i]+')');
                    }
                };
            }else if(getPng=="girl5"){
                var girl5Imgs=[baseUrl+'girl5_1.png',baseUrl+'girl5_2.png',baseUrl+'girl5_3.png',baseUrl+'girl5_4.png'];
                for(var i=0;i<girl5Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+girl5Imgs[i]+')');
                    }
                };
            }
        }else{
            // 男生的背景
            var index=$(this).index();
            var baseUrl='../images/';
            var makeplaceBg=$('.makePlace').css('background-image');
            var getPng=makeplaceBg.split('/').pop().substr(0,4);
            if(getPng=="boy1") {
                var boy1Imgs = [baseUrl + 'boy1_1.png', baseUrl + 'boy1_2.png', baseUrl + 'boy1_3.png', baseUrl + 'boy1_4.png'];
                for (var i = 0; i < boy1Imgs.length; i++) {
                    if (i == index) {
                        $('.makePlace').css('background-image', 'url(' + boy1Imgs[i] + ')');
                    }
                }
            }else if(getPng=="boy2"){
                var boy2Imgs=[baseUrl+'boy2_1.png',baseUrl+'boy2_2.png',baseUrl+'boy2_3.png',baseUrl+'boy2_4.png'];
                for(var i=0;i<boy2Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy2Imgs[i]+')');
                    }
                };
            }else if(getPng=="boy3"){
                var boy3Imgs=[baseUrl+'boy3_1.png',baseUrl+'boy3_2.png',baseUrl+'boy3_3.png',baseUrl+'boy3_4.png'];
                for(var i=0;i<boy3Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy3Imgs[i]+')');
                    }
                };
            }else if(getPng=="boy4"){
                var boy4Imgs=[baseUrl+'boy4_1.png',baseUrl+'boy4_2.png',baseUrl+'boy4_3.png',baseUrl+'boy4_4.png'];
                for(var i=0;i<boy4Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy4Imgs[i]+')');
                    }
                };
            }else if(getPng=="boy5"){
                var boy5Imgs=[baseUrl+'boy5_1.png',baseUrl+'boy5_2.png',baseUrl+'boy5_3.png',baseUrl+'boy5_4.png'];
                for(var i=0;i<boy5Imgs.length;i++){
                    if(i==index){
                        $('.makePlace').css('background-image','url('+boy5Imgs[i]+')');
                    }
                };
            }
        }
    });
});

// 形象和背景切换
var visualizeBgLi=$('.visualizeBg li');
visualizeBgLi.on('click',function () {
    var index=$(this).index();
    var chooseOut= $(this).parent().parent().siblings('.chooseOut');
    $('.arrow').children('img').css('display','none');
    $(this).children('.arrow').children('img').css('display','block');
    $('.lablePic').removeClass('labelActive');
    $(this).find('.commonLabel').addClass('labelActive');
    chooseOut.children('.commonChoose').css('display','none')
    chooseOut.children('.commonChoose').eq(index).css('display','block');
});


// NEXT
var nextStage=$('.nextStage');
nextStage.on('click',function () {
    $('.chooseOut').css('display','none');
    $('.someMark').css('display','none');
    $('.someLabels').css('display','block');
    $('.differentLabel').css('display','block');
});

// 标签切换
var labelLi=$('.differentLabel li');
labelLi.on('click',function () {
    var index=$(this).index();
    labelLi.removeClass('activeLabel');
    $(this).addClass('activeLabel');
    $('.someLabels').children('ul').css('display','none');
    $('.someLabels').children('ul').eq(index).css('display','block');
    $('.arrows').children('img').css('display','none');
    $(this).children('.arrows').children('img').css('display','block');
});

// 选择不同的标签到页面上
var labelCommonLi=$('.labelCommon li');
var choosedLi=$('.beChoosed li');
var activedLiLength;
var num=0;
labelCommonLi.children('span').on('click',function () {
    num++;
    activedLiLength = $('.labelCommon').children('li.activeLabelBg').length;
    if (activedLiLength >=6) {
        $('.fulled').show();
        setTimeout(function () {
            $('.fulled').hide();
        },3000);
        return false;
    }
    var labelCon=$(this).text();
    var str='<i class="close" data-id="'+num+'">x</i>';
    $(this).parent('li').append(str);
    $(this).parent('li').addClass('activeLabelBg');
    console.log($(this).siblings('i').attr("data-id"))
    if(typeof($(this).siblings('i').attr("data"))=="undefined"){

    }

    var blankIndex;
    for(var i=0;i<choosedLi.length;i++){
        if(!$(choosedLi[i]).children('span').text()){
            blankIndex=i;
            console.log(i+'--'+blankIndex)
            break;
        }
    }
    choosedLi.eq(blankIndex).children('span').attr('data-id',num);
    choosedLi.eq(blankIndex).children('span').text(labelCon);

    // 点击图片上的标签框，移除该标签框里面的内容，同时【标签选项】对应的标签取消选中。
    choosedLi.children('span').on('click',function () {
        if($(this).text()){
            $(this).text('');
            var id=$(this).attr('data-id');
            var $close=$('i[data-id="'+id+'"]');
            $close.parent('li').removeClass('activeLabelBg');
            $close.remove();
            $(this).removeAttr('data-id');
        };
    });

    // 点击‘标签选项’中选中项，移除对应标签框的内容，并取消选中
    var close=$('.close');
    for(var i=0;i<close.length;i++){
        $(close[i]).on('click',function () {
            var id=$(this).attr('data-id');
            $('span[data-id="'+id+'"]').text('');
            $(this).parent('li').removeClass('activeLabelBg');
            $(this).remove();
        });
    }
});

// 点击‘标签选项’和‘选项卡’以外的页面，隐藏‘选项卡’
$(document).mouseup(function(e) {
    var someLabels=$('.someLabels');
    var differentLabel=$('.differentLabel');
    var beChoosed=$('.beChoosed');
    if(!someLabels.is(e.target)&&someLabels.has(e.target).length===0&&!differentLabel.is(e.target)&&differentLabel.has(e.target).length===0&&!beChoosed.is(e.target)&&beChoosed.has(e.target).length===0){
        someLabels.hide();
    }
});


$('.isOk').on('click',function(){
    alert(111)
    $('.someLabels').hide();
    $('.differentLabel').hide();
    $('.erweimaLogo').css('display','block');
    html2canvas(document.getElementById('body'), {
        onrendered: function(canvas) {
            $('.playAgain').css('display','block');
            $('canvas').hide();
            $('.makePlace').hide();
            $('.photoPage').css('height','auto');
            document.body.appendChild(canvas);
            // 这个url是base64码  只有用服务启动后toDataURL()才可以正常使用
            var url = canvas.toDataURL();
            $('body').append('<img src='+url+'>');
            $('canvas').remove();
        }
    });
});

// 邀请好友
$('.inviteFriend').on('click',function () {
    $('.mask,.sharePng').css('display','block');
});




