// 1-select el swr - select el zrair
// 2-lma ados 3al ay sora el div el kber yban
// 3-lma adose close el div ytshal
// 4-el sora eli dost 3liha hya eli tban msh sora tnia
// 5-lma ados 3al ashm a2lb el swr bl trteb
// 6-n2lb bl keyboard , scape n2fl

var imgs = document.querySelectorAll(".container img"); //
var ArrayImgs = [];
for (let i = 0; i < imgs.length; i++) {
    ArrayImgs.push(imgs[i].currentSrc)
}
var fixedBox = document.getElementById("fixed-box");
var closeBtn = document.getElementById("close-btn");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var innerImg = document.getElementById("innerImg");

var container = document.querySelector(".container");



container.addEventListener('click', function (e) {
    var src = e.target.src;
    if (src != null) {
        fixedBox.classList.replace('d-none', 'd-flex');
        innerImg.setAttribute('src', src);
    }
});

fixedBox.addEventListener('click', function (e) {
    var src = e.target.src;
    if (src == null) {
        fixedBox.classList.replace('d-flex', 'd-none');
    }
})

nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var index = ArrayImgs.indexOf(this.parentElement.querySelector('img').getAttribute('src'));
    if (index < ArrayImgs.length - 1) {
        index++
    } else {
        index = 0;
    }
    innerImg.setAttribute('src', ArrayImgs[index])
})

prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    var index = ArrayImgs.indexOf(this.parentElement.querySelector('img').getAttribute('src'));
    if (index == 0) {
        index = ArrayImgs.length - 1
    } else {
        index--;
    }
    innerImg.setAttribute('src', ArrayImgs[index])
})

closeBtn.addEventListener('click', function () {
    fixedBox.classList.replace('d-flex', 'd-none');
})

document.addEventListener('keyup', function (e) {
    if (e.code == 'ArrowRight') {
        e.stopPropagation();
        var index = ArrayImgs.indexOf(innerImg.getAttribute('src'));
        if (index < ArrayImgs.length - 1) {
            index++
        } else {
            index = 0;
        }
        innerImg.setAttribute('src', ArrayImgs[index])
    }
    else if (e.code == 'ArrowLeft') {
        e.stopPropagation();
        var index = ArrayImgs.indexOf(innerImg.getAttribute('src'));
        if (index == 0) {
            index = ArrayImgs.length - 1
        } else {
            index--;
        }
        innerImg.setAttribute('src', ArrayImgs[index])
    }
    else if (e.code == 'Escape') {
        fixedBox.classList.replace('d-flex', 'd-none');
    }
})