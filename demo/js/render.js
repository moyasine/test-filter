/**
 * render.js
 */

var types = [
    'Original',
    'Lark',
    'Reyes',
    'Juno',
    'Slumber',
    'Crema',
    'Ludwig',
    'Aden',
    'Perpetua',
    'Amaro',
    'Mayfair',
    'Rise',
    'Hudson',
    'Valencia',
    'XProII',
    'Sierra',
    'Willow',
    'Lo-Fi',
    'Earlybird',
    'Brannan',
    'Inkwell',
    'Hefe',
    'Nashville',
    'Sutro',
    'Toaster',
    'Walden',
    '1977',
    'Kelvin',
    'Grayscale',
    'Sepia',
    'Luminance',
    'Brighten',
    'Darken',
    'Opacity',
    'Threshold',
    'Nega-Posi',
    'BrightnessContrast',
    'Hue-Rotate',
    'Saturate',
    'horizontalFlip',
    'verticalFlip',
    'doubleFlip',
    'horizontalMirror',
    'verticalMirror',
    'XYMirror'
];
var contains = document.getElementById("container")
contains.innerHTML = "<div><header class=\"header\">" +
    "<nav class=\"header-nav\"><div id=\"top-img\" >" +
    "<img class=\"main-article-img instagram-css-filter-\" data-effect=\"original\"\n" +
    "                         src=\"img/sample.jpg\"/>\n" +
    "                </div></nav></header>" +
    "<ul class=\"carousel\"><div id=\"main-image-list\"></div></ul>\n" +
    "                "
var mainImageList = document.getElementById("main-image-list")
mainImageList.innerHTML = ""
types.forEach(function(type) {
    type = type.toLocaleLowerCase()
    mainImageList.innerHTML += "<li><h2 id={\"main_article_h2_\" + type + \n" +
        "                class=\"main-article-h2\">\n" + type +  "\n" +
        "            </h2><img class=\"main-article-img carousel-img instagram-css-filter-\"\n" +
        "                                                                     data-effect=" + type +  "\n" +
        "                                                                     src=\"img/sample.jpg\"/></li>"
});
var topImage = document.getElementById("top-img")
document.getElementById('main-image-list').onclick = function(e) {
    console.log(e.target.src.toString())
    var src = e.target.src.toString()
    topImage.innerHTML = "<img class=\"main-article-img carousel-img instagram-css-filter-\"\n" +
        "                                                                       \n" +
        "                                                                     src=" + src + "></li>"


};

