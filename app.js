



/*
1.render list song (map)
2.play/pase song (audio method)
3.scroll top (window.scroolY)
4.cd rorate (animate api)
5. next/pre song
6. next/pre random song
7. xử lý next song khi kết thúc bài hát
8. acctive song
9. Scroll active song inte view
*/

var songs = [

    {
        stt: '1.',
        name: 'Cô Đơn Dành Cho Ai Đây',
        singer: 'Thanh Hùng',
        path: './asset/audio/CoDonDanhChoAi-LeeKenNal-7068986.mp3',
        imge: 'https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg'
    },
    {
        stt: '2.',
        name: 'Thê Lương',
        singer: 'Thanh Hùng',
        path: './asset/audio/song2.mp3',
        imge: 'https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg'
    },
    {
        stt: '3.',
        name: 'Im still',
        singer: 'Thanh Hùng',
        path: './asset/audio/song3.mp3',
        imge: 'https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg'
    },
    {
        stt: '4.',
        name: 'Cô Đơn Dành Cho Ai Đây',
        singer: 'Thanh Hùng',
        path: './asset/audio/CoDonDanhChoAi-LeeKenNal-7068986.mp3',
        imge: 'https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg'
    },
    {
        stt: '5.',
        name: 'Thê Lương',
        singer: 'Thanh Hùng',
        path: './asset/audio/song2.mp3',
        imge: 'https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg'
    },
    {
        stt: '6.',
        name: 'Im still',
        singer: 'Thanh Hùng',
        path: './asset/audio/song3.mp3',
        imge: 'https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg'
    },
    {
        stt: '7.',
        name: 'Cô Đơn Dành Cho Ai Đây',
        singer: 'Thanh Hùng',
        path: './asset/audio/CoDonDanhChoAi-LeeKenNal-7068986.mp3',
        imge: 'https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp'
    },
    {
        stt: '8.',
        name: 'Thê Lương',
        singer: 'Thanh Hùng',
        path: './asset/audio/song2.mp3',
        imge: './asset/img/roitoiluon.jpg'
    },
    {
        stt: '9.',
        name: 'Im still',
        singer: 'Thanh Hùng',
        path: './asset/audio/song3.mp3',
        imge: './asset/img/tupleuvang.jpg'
    },
    


]
var currentIndexsong = 0;
// console.log(currentIndexsong)

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
var body = $('body');
// xử lý tổng qua cơ bản giao diện
var penicon = $('.list-navbar-item__icon1')
//add
var navbarlibary = $('.navbar-libary').onmouseenter = function () {
    penicon.classList.add('active');
}
//remove
var navbarlibary = $('.navbar-libary').onmouseleave = function () {
    penicon.classList.remove('active');
}
var contentsearch = $('.content-search');
var showListsong = $('.list')
var cd = $('.cd')
var cdThumb = $('.cd-thumb')
var tensong = $('.namesong')
var nameSong = $('.header-song')
var nameband = $('.name-band');
var audio = $('#audio')
var iconpause = $('.header-icon-pause')
var iconPlay = $('.header-icon-play')
var iconnext = $('.header-icon-next')
var iconpre = $('.header-icon-pre')
var iconreload = $('.header-icon-itemreload')
var iconrandom = $('.header-icon-itemrandom')
var playlist = $('.list')
var progress = $('#progress')
var progress1 = $('.progress1')
var mutevolume = $('.volume-muted')
var onVolume = $('.volume-icon')
var timeleft = $('.time-left-text')
var timeright = $('.time-right-text')
var timedurationsong = $('.time-duration-text')
var songphayingwhite = $('.song-playingwhite')
var thumbnail = $('.thumbnail')
// console.log(progress1);
var israndom = false;
var isreload = false;
var ismuted = false;
audio.volume = 1;
var volume = $('.volume .btnvolume')
var volume1 = $('.volume .volume1')
var cdWidth = cd.offsetWidth;
// console.log(showListsong)
var animateCDthumb;
var Thumbnail = $('.thumbnail');
var animateThumbnail;
var animateThumbnail1;
var animateThumbnail2;
var animateThumbnail3;
var animateThumbnail4;


// rendersong
function renderSong() {
    var htmls = songs.map(function (song, index) {
        return `
        <div class="song ${index === currentIndexsong ? 'activesong' : ''}" data-index=${index}>
           <div class="songheader">
                <div class="stt">
                    <span>${song.stt}</span>
                </div>
                <div class="img1">
                    <img class="header-list-img" src="${song.imge}" alt="">
                <div class="song-play">
                    <i class=" fas fa-play"></i>
                </div>
                <div class="song-playingwhite ${index === currentIndexsong ? 'activeplay' : ''}"></div>
            </div>
            <div class="song-item">
                    <h2 class="namesong">${song.name}</h2>
                <a class="nameband">${song.singer}</a>
            </div>
           </div>
            
            <div class="time-duration">
                <span class="time-duration-text">04:18</span>
            </div>
            <div class="option">
                <div class="option-icon">
                    <div class="notifi-right">
                        <span class="notifi-text">Phát cùng lời bài hát</span>
                    </div>   
                    <i class="fas fa-microphone-alt"></i>
                </div>
                <div class="option-icon">
                    <div class="notifi-right">
                        <span class="notifi-text">Thêm vào thư viện</span>
                    </div>   
                    <i class="far fa-heart"></i>
                </div>
                <div class="option-icon">
                    <div class="notifi-right1">
                        <span class="notifi-text">Khác</span>
                    </div>  
                    <i class="fas fa-ellipsis-h"></i>
                </div>

            </div>
        </div>
     `
    })
    showListsong.innerHTML = htmls.join('');

};
//load song
function handleloadsong() {
    audio.src = songs[currentIndexsong].path;
    cdThumb.style.backgroundImage = `url(${songs[currentIndexsong].imge})`;
    nameSong.innerText = songs[currentIndexsong].name;
    nameband.innerText = songs[currentIndexsong].singer;

}
//next song
function nextSong() {
    // next song   
    currentIndexsong++;
    console.log(currentIndexsong, songs.length);
    if (currentIndexsong > songs.length - 1) {
        currentIndexsong = 0
    }
    renderSong();
    scrollToactivesong();
    handleloadsong();
}
//pre song()
function preSong() {
    currentIndexsong--;
    if (currentIndexsong < 0) {
        currentIndexsong = 0
    }
    renderSong();
    scrollToactivesong();
    handleloadsong();
}
//ScrollToactivesong
function scrollToactivesong() {
    setTimeout(function () {
        if (currentIndexsong === 0 || currentIndexsong === 1) {
            $('.song.activesong').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            })
        }
        else {
            $('.song.activesong').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }
    }, 300)

}
//random song
function randomSong() {
    var NewcurrentIndexsong;
    do {
        NewcurrentIndexsong = Math.floor(Math.random() * songs.length)
    } while (NewcurrentIndexsong === currentIndexsong)
    currentIndexsong = NewcurrentIndexsong;
    handleloadsong();
}
//Tăng giảm volume
function handaleVolume() {
   
    console.log(volume)
    volume.onchange = function (e) {
        audio.volume = e.currentTarget.value / 100;
        volume1.style.width = (audio.volume * 70) + 'px';
       
    }
}
//formattime
function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ':' + sec;
}
// Sự kiện play audio
function handleaudio() {
    //xử lý tua bài hát 
    //gán vào biến animate để xử lý pause
    // animateThumbnail = Thumbnail.animate([
    //     {
    //         transform: 'rotate(360deg)'
    //     }
    // ],{
    //     duration: 10000, // 10 seconds
    //     iterations: Infinity// quay vô hạn;
    // })
   var thumbnail1 = $('.thumbnail1')
   var thumbnail2 = $('.thumbnail2')
   var thumbnail3 = $('.thumbnail3')
   var thumbnail4 = $('.thumbnail4')
   console.log(thumbnail1)
   animateThumbnail1 = thumbnail1.animate([
         {
            opacity: 0.3,
            transform: 'rotate(-90deg)'
         },
         {
            opacity: 1,
         },
         {
            opacity: 0.9,
         },
         {
            opacity: 0,
         },
         {
            opacity: 0,
         },
         {
            opacity: 0,
            transform: 'rotate(90deg)'
         },
    ],{
        duration: 10000, // 10 seconds
        iterations: Infinity// quay vô hạn
    })
    animateThumbnail1.pause();
    animateThumbnail2 = thumbnail2.animate([
        {
            opacity: 1,
            transform: 'rotate(90deg)'
         },
         {
            opacity: 0.75,
            transform: 'rotate(-90deg)'
         },
         {
            opacity: 1,
         },
         {
            opacity: 0,
         },
         {
            opacity: 0,
         },
         {
            opacity: 0,
         },
         
    ],{
        duration: 9000, // 10 seconds
        iterations: Infinity// quay vô hạn
    })
    animateThumbnail2.pause();
    animateThumbnail3 = thumbnail3.animate([
        {
            opacity: 0.75,
            transform: 'rotate(90deg)'
         },
         {
            opacity: 0.5,
            transform: 'rotate(-90deg)'
         },
         {
            opacity: 0,
         },
         {
            opacity: 0,
         },
         {
            opacity: 0,
         },
         {
            opacity: 1,
         },
    ],{
        duration: 10000, // 10 seconds
        iterations: Infinity// quay vô hạn
    })
    animateThumbnail3.pause();
    animateThumbnail4 = thumbnail4.animate([
        {
            opacity: 1,
            transform: 'rotate(90deg)'
         },
         {
            opacity: 0.2,
            transform: 'rotate(-90deg)'
         },
         {
            opacity: 0,
         },
         {
            opacity: 0,
         },
         {
            opacity: 1,
         },
         {
            opacity: 0.5,
         },
    ],{
        duration: 10000, // 10 seconds
        iterations: Infinity// quay vô hạn
    })
    animateThumbnail4.pause();

    animateCDthumb = cd.animate([
        {
            transform: 'rotate(360deg)'
        }
    ], {
        duration: 10000, // 10 seconds
        iterations: Infinity// quay vô hạn
    })
    animateCDthumb.pause();
    //mute volume
    onVolume.onclick = function () {
        mutevolume.classList.add('active')
        onVolume.classList.remove('active')
        audio.muted = true;
        volume1.style.width = '0' + 'px';
    }
    //on volume
    mutevolume.onclick = function () {
        onVolume.classList.add('active')
        mutevolume.classList.remove('active')
        audio.muted = false;
        volume1.style.width = '70' + 'px';
    }
    //play song
    iconPlay.onclick = function () {
        var footerleft = $('.footer-left')
        timeleft.innerHTML = audio.currentTime;
        $('.active').classList.remove('active')
        iconpause.classList.add('active')
        thumbnail.classList.add('activethumbnail')
        // $('.activeplay').classList.remove('activeplay')
        // $('.song-playingwhite').classList.add('activeplay')
        footerleft.style.transform = 'translateX(0%)'
        audio.play();
        animateThumbnail1.play();
        animateThumbnail2.play();
        animateThumbnail3.play()
        animateThumbnail4.play()
        animateCDthumb.play();
    }
    //pause song
    iconpause.onclick = function () {
        $('.active').classList.remove('active')
        iconPlay.classList.add('active')
        thumbnail.classList.remove('activethumbnail')
        audio.pause();
        animateThumbnail1.pause();
        animateThumbnail2.pause();
        animateThumbnail3.pause()
        animateThumbnail4.pause()
        animateCDthumb.pause();
    }
    //khi tiến độ bài hát thay đổi ontimeupdate
    audio.ontimeupdate = function () {
        var currentime = Math.floor(audio.currentTime).toString();
        var duration = Math.floor(audio.duration).toString();
        timeleft.innerHTML = formatSecondsAsTime(currentime);
        if (isNaN(audio.duration)) {
            timeright.innerHTML = '00:00'
        }
        else {
            timeright.innerHTML = formatSecondsAsTime(duration);
        }
        if (audio.duration) {
            const progressPercent = (audio.currentTime / audio.duration * 100);
            progress.style.width = progressPercent + "%";
            progress1.value = progressPercent;
            progress.style.width = progress1.value;
        }
        // console.log((audio.currentTime/audio.duration * 100))
    }
    progress1.onchange = function () {
        audio.currentTime = (progress1.value / 100) * audio.duration
    }

}

// Sự kiện kéo srcoll
function handleEvent() {
    //lắng nghe sự kiện kéo trên document
    // document.onscroll = function () {
    //     const scroll = window.scrollY || document.documentElement.scrollTop;
    //     const newWidth = cdWidth - scroll;
    //     //nếu newwidth lớn hơn 0 thì xảy ra bth
    //     //nếu âm thì tra về 0 luôn
    //     // console.log(newWidth)
    //     cd.style.width = newWidth > 0 ? newWidth + 'px' : 0;
    //     cd.style.opacity = newWidth / cdWidth;
    // }
    // event next song
    
    iconnext.onclick = function () {
        if (israndom) {
           randomSong();
        }
        else {
            nextSong();
        }
        audio.play();
    }
    // xử lý khi kết thúc bài hát tự next
    audio.onended = function () {
        if (isreload) {
            audio.play();
        }
        else {
            iconnext.click();
        }

    }
    //event pre song
    iconpre.onclick = function () {
        if (israndom) {
            randomSong();
        }
        else {
            preSong();
        }
        audio.play();
    }
    //event random song
    iconrandom.onclick = function () {
        israndom = !israndom;
        iconrandom.classList.toggle('activecolor', israndom);
        iconreload.classList.remove('activecolor');
    }
    //reload song
    iconreload.onclick = function () {
        isreload = !isreload;
        iconreload.classList.toggle('activecolor', isreload);
        iconrandom.classList.remove('activecolor');
    }
    //lắng nghe hành vi click vào playlist
    playlist.onclick = function (e) {
        const songNode = e.target.closest('.song:not(.activesong)');
        if (songNode || e.target.closest('.option')) {
            if (songNode) {
                currentIndexsong = Number(songNode.dataset.index)
                handleloadsong();
                renderSong();
                // $('.song-playingwhite').classList.add('activeplay')
                audio.play();
                thumbnail.classList.add('activethumbnail')
                $('.active').classList.remove('active')
                iconpause.classList.add('active')
                animateCDthumb.play();
            }
            if (e.target.closest('.option')) {
            }
        };

    }
    //open && close modal
    var headersettingitem = $('.header-setting-item')
    // console.log(notifitheme)
    var modal = $('.modal')
    var iconclose = $('.modal-header-icon-close')
    var modalcontainer = $('.modal-container');
    headersettingitem.onclick = function(){
        modal.classList.add('open-modal')
    }
    iconclose.onclick = function(){
        modal.classList.remove('open-modal')
       
    }
    modal.onclick = function(){
        modal.classList.remove('open-modal')
    }
    modalcontainer.onclick =function(e){
        e.stopPropagation();
    }
    document.onscroll = function () {
        var y = pageYOffset
        setTimeout(function () {

        }, 200)
        if (y > 0) {
            contentsearch.style.backgroundColor = "git";
        }
        else {
            contentsearch.style.backgroundColor = "transparent"
        }
    }
    //Change Theme
    var AboutMusicheadertext = $('.AboutMusic-header-text')
    var content = $('.content')
    var headercontentlistsearch = $('.header-content-listsearch')
    var itemtext = $$('.list-navbar-item__text')
    var listnavbaritem = $$('.list-navbar-item')
    var navbarfooter = $('.navbarfooter')
    var listnavbaritem1  = $$('.navbar-libary .list-navbar-item')
    console.log(listnavbaritem)
    var Background = $('.background')
    var iconcheck = $('.icon-check')
    var applyone = $$('.apply')[0]
    var applylondon = $$('.apply')[1]
    var applypuperxoay = $$('.apply')[2]
    var applythapeffen = $$('.apply')[3]
    var applyjack = $$('.apply')[4]
    var applyui = $$('.apply')[5]
    var applyJichangwon = $$('.apply')[5]
    var applyLisa = $$('.apply')[6]
    var applyJenykym = $$('.apply')[7]
    var applyJso = $$('.apply')[8]

    var previewone = $$('.preview')[0]
    var previewlondon = $$('.preview')[1]
    var previewpuperxoay = $$('.preview')[2]
    var previewpupereffen = $$('.preview')[3]
    var previewjack = $$('.preview')[4]
    var previewui = $$('.preview')[5]
    var previewJichangwon = $$('.apply')[5]
    var previewLisa = $$('.apply')[6]
    var previewJenykim = $$('.apply')[7]
    var previewJso = $$('.apply')[8]

    var navbar = $('.navbar')
    var footer = $('.footer')
    var contentsearch = $('.content-search')
    var headercontentsearch = $('.header-content-search')
    var headercontentsearchinput = $ ('.header-content-search-input')
    var option = $('.option1')
    var headericon = $('.header-icon')
    var progressvalue = $('.progressvalue')
    var timeright = $('.time-right')
    var footerRight = $('.footer-right')
    var volume1 = $('.volume1')
    var btnvolume = $('.btnvolume')
    var themetext = $$('.theme-text')
    var displaytext  = $('.display-text')
    var tagh = document.querySelectorAll('h2')
    var iconclose = $('.modal-header-icon-close')
    // console.log(tagh)
    // console.log(themetext)
    // applyone.onclick = function(){
    //     document.onscroll = function () {
    //         var y = pageYOffset
    //         setTimeout(function () {
    
    //         }, 200)
    //         if (y > 0) {

    //         }
    //         else {
    //             contentsearch.style.backgroundColor = "transparent"
    //         }
    //     }
    //     headercontentsearch.style.backgroundColor = '#061D4F'
    //     headercontentsearchinput.style.backgroundColor = '#061D4F'
    //     contentsearch.style.backgroundColor = '#061D4F'
    //     footer.style.backgroundColor = '#051740'
    //     navbar.style.backgroundColor = 'rgb(13 56 149 / 23%)';
    //     modalcontainer.style.backgroundColor = 'rgb(107, 5, 128)'
    //     iconcheck.classList.add('active')
    //     modal.classList.remove('open-modal')
    // }
    // previewone.onclick = function(){
    //     headercontentsearch.style.backgroundColor = '#061D4F'
    //     headercontentsearchinput.style.backgroundColor = '#061D4F'
    //     contentsearch.style.backgroundColor = '#061D4F'
    //     footer.style.backgroundColor = '#051740'
    //     navbar.style.backgroundColor = 'rgb(13 56 149 / 23%)';
    //     modalcontainer.style.backgroundColor = 'rgb(107, 5, 128)'
    // }
   
    // theme london
    applylondon.onclick = function(){
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/London-light1.jpg)"
        for(var i = 0 ; i < listnavbaritem.length ; ++i)
        {
            listnavbaritem[i].style.color = 'black'
        }
        for(var j = 0; j < listnavbaritem1.length; ++j){
            listnavbaritem1[j].style.color = 'black'
        }   
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "#fff";
            }
            else {
                contentsearch.style.backgroundColor = "rgb(225 222 222 / 35%)"
            }
        }
        navbar.style.backgroundColor = 'rgb(225 222 222 / 35%)'
        navbarfooter.style.color = 'black'
        headercontentsearch.style.backgroundColor = 'rgb(193 176 176 / 35%)'
        headercontentsearchinput.style.backgroundColor = 'rgb(225 222 222 / 35%)' 
        headercontentlistsearch.style.backgroundColor  = 'rgb(225 222 222)' 
        content.style.color = 'black'
        AboutMusicheadertext.style.color = 'black'
        footer.style.backgroundColor = '#fff'
        nameSong.style.color = 'black'
        console.log(tensong)
        modal.classList.remove('open-modal')
        // $('.iconcheck.active').classList.remove('.active')
        // iconcheck.classList.add('.iconcheck.active')
        option.style.color = 'black'
        headericon.style.color = 'black'
        progressvalue.style.backgroundColor = 'rgb(139 127 127 / 34%)'
        progress.style.backgroundColor = 'black'
        timeright.style.color = 'black'
        footerRight.style.color = 'black'
        volume1.style.backgroundColor = 'rgb(139 127 127 / 34%)'
        btnvolume.style.backgroundColor = 'rgb(231 215 215 / 44%)'
        modalcontainer.style.backgroundColor = '#FFFFFE'
        iconclose.style.color = 'black'
        thumbnail.style.color = 'black'
    }
    previewlondon.onclick = function(){
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme/London-light1.jpg)"
        for(var i = 0 ; i < listnavbaritem.length ; ++i)
        {
            listnavbaritem[i].style.color = 'black'
        }
        for(var j = 0; j < listnavbaritem1.length; ++j){
            listnavbaritem1[j].style.color = 'black'
        }   
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "#fff";
            }
            else {
                contentsearch.style.backgroundColor = "rgb(225 222 222 / 35%)"
            }
        }
        navbar.style.backgroundColor = 'rgb(225 222 222 / 35%)'
        navbarfooter.style.color = 'black'
        headercontentsearch.style.backgroundColor = 'rgb(193 176 176 / 35%)'
        headercontentsearchinput.style.backgroundColor = 'rgb(225 222 222 / 35%)' 
        headercontentlistsearch.style.backgroundColor  = 'rgb(225 222 222)' 
        content.style.color = 'black'
        AboutMusicheadertext.style.color = 'black'
        footer.style.backgroundColor = '#fff'
        nameSong.style.color = 'black'
        console.log(tensong)
        option.style.color = 'black'
        headericon.style.color = 'black'
        progressvalue.style.backgroundColor = 'rgb(139 127 127 / 34%)'
        progress.style.backgroundColor = 'black'
        timeright.style.color = 'black'
        footerRight.style.color = 'black'
        volume1.style.backgroundColor = 'rgb(139 127 127 / 34%)'
        btnvolume.style.backgroundColor = 'rgb(231 215 215 / 44%)'
        modalcontainer.style.backgroundColor = '#FFFFFE'
        for(var l = 0 ; l < themetext.length; ++l){
            themetext[l].style.color = 'black'
        }
        displaytext.style.color = 'black'
        for(var z = 0; z < tagh.length; ++z){
            tagh[z].style.color = 'black'
        }
        iconclose.style.color = 'black'
    }
    //puper xoay 
    applypuperxoay.onclick = function (){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "rgb(50 7 85)";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        modal.classList.remove('open-modal')
        iconcheck.classList.add('active')
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/zma.svg)"
        Background.style.backgroundRepeat = "repeat";
        Background.style.backgroundSize = "auto"
        footer.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-player/zma.png)"
        navbar.style.backgroundColor = '#4B206E'
        modalcontainer.style.backgroundColor = '#4B206E'
    }
    previewpuperxoay.onclick = function(){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "rgb(50 7 85)";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/zma.svg)"
        Background.style.backgroundRepeat = "repeat";
        Background.style.backgroundSize = "auto"
        footer.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-player/zma.png)"
        navbar.style.backgroundColor = '#4B206E'
        modalcontainer.style.backgroundColor = '#4B206E'
    }
    //thap effen
    applythapeffen.onclick = function (){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "rgb(46 44 44)";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        for(var i = 0 ; i < listnavbaritem.length ; ++i)
        {
            listnavbaritem[i].style.color = 'rgb(151 151 151)'
        }
        modal.classList.remove('open-modal')
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/eiffel.jpg)"
        modalcontainer.style.backgroundColor ="rgb(46 44 44)"
        footer.style.backgroundColor = "rgb(46 44 44)"
    }
    previewpupereffen.onclick = function(){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "rgb(46 44 44)";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        for(var i = 0 ; i < listnavbaritem.length ; ++i)
        {
            listnavbaritem[i].style.color = 'rgb(151 151 151)'
        }
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/eiffel.jpg)"
        modalcontainer.style.backgroundColor ="rgb(46 44 44)"
        footer.style.backgroundColor = "rgb(46 44 44)"
    }
    //jack
    applyjack.onclick = function(){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "#77736A";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        for(var i = 0 ; i < listnavbaritem.length ; ++i)
        {
            listnavbaritem[i].style.color = 'rgb(151 151 151)'
        }
        modal.classList.remove('open-modal')
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/jack.jpg)"
        modalcontainer.style.backgroundColor ="#565147"
        footer.style.backgroundColor = "#565147"
        navbar.style.backgroundColor ="#837c6e6e"
    }
    previewjack.onclick = function(){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "#77736A";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/jack.jpg)"
        modalcontainer.style.backgroundColor ="#565147"
        footer.style.backgroundColor = "#565147"
        navbar.style.backgroundColor ="#837c6e6e"
    }
    //UI
    applyui.onclick = function(){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "rgb(229 216 209)";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/iu.jpg)"
        modalcontainer.style.backgroundColor ="#FFF"
        for(var l = 0 ; l < themetext.length; ++l){
            themetext[l].style.color = 'black'
        }
        displaytext.style.color = 'black'
        for(var z = 0; z < tagh.length; ++z){
            tagh[z].style.color = 'black'
        }
        modal.remove.classList('open-modal')
        footer.style.backgroundColor = "#D0CCC5"
        navbar.style.backgroundColor ="rgb(72 72 72 / 18%)"
        option.style.color = 'black'
        headericon.style.color = 'black'
        progressvalue.style.backgroundColor = 'rgb(139 127 127 / 34%)'
        progress.style.backgroundColor = 'black'
        timeright.style.color = 'black'
        footerRight.style.color = 'black'
        volume1.style.backgroundColor = 'black'
        btnvolume.style.backgroundColor = '#00000054'
        for(var i = 0 ; i < listnavbaritem.length ; ++i)
        {
            listnavbaritem[i].style.color = 'black'
        }
        navbarfooter.style.color ='black'
        iconclose.style.color = 'black'
    }
    previewui.onclick = function(){
        document.onscroll = function () {
            var y = pageYOffset
            setTimeout(function () {
    
            }, 200)
            if (y > 0) {
                contentsearch.style.backgroundColor = "rgb(229 216 209)";
            }
            else {
                contentsearch.style.backgroundColor = ""
            }
        }
        Background.style.backgroundImage = "url(https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/theme-background/iu.jpg)"
        modalcontainer.style.backgroundColor ="#FFF"
        for(var l = 0 ; l < themetext.length; ++l){
            themetext[l].style.color = 'black'
        }
        displaytext.style.color = 'black'
        for(var z = 0; z < tagh.length; ++z){
            tagh[z].style.color = 'black'
        }
        footer.style.backgroundColor = "#D0CCC5"
        navbar.style.backgroundColor ="rgb(72 72 72 / 18%)"
        option.style.color = 'black'
        headericon.style.color = 'black'
        progressvalue.style.backgroundColor = 'rgb(139 127 127 / 34%)'
        progress.style.backgroundColor = 'black'
        timeright.style.color = 'black'
        footerRight.style.color = 'black'
        volume1.style.backgroundColor = 'black'
        btnvolume.style.backgroundColor = '#00000054'
        for(var i = 0 ; i < listnavbaritem.length ; ++i)
        {
            listnavbaritem[i].style.color = 'black'
        }
        navbarfooter.style.color ='black'
        iconclose.style.color = 'black'
    }
};

//load time duration song
function handleloadtimeduration(){
   
}
 

function start() {
    renderSong();
    handleloadsong();
    handleaudio();
    handleEvent();
    handaleVolume();
    // handleloadtimeduration();
    // animate_string();
};

start();


