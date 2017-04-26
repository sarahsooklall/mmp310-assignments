var head = document.getElementsByTagName('head')[0];

var body = document.getElementsByTagName('body')[0];

function content(info) {
    'use strict';

    var h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = info.h1;
    var h2 = document.getElementsByTagName('h2')[0];
    h2.innerHTML = info.h2;
    var h3 = document.getElementsByTagName('h3')[0];
    h3.innerHTML = info.h3;
    var paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = info.p;
    var blockquote = document.getElementsByTagName('blockquote')[0];
    blockquote.innerHTML = info.blockquote;

    var li1 = document.getElementsByTagName('li')[0];
    li1.innerHTML = info.list[0].content;
    var li2 = document.getElementsByTagName('li')[1];
    li2.innerHTML = info.list[1].content;
    var li3 = document.getElementsByTagName('li')[2];
    li3.innerHTML = info.list[2].content;
}

//Reminder that [0] are for the arrays


//Json Script Content
var jsc = document.createElement('script');
jsc.setAttribute('src', 'data/content.json');
head.appendChild(jsc);
 
//Json Script Navagation
var jsn = document.createElement('script');
jsn.setAttribute('src', 'data/nav.json');
head.appendChild(jsn);

//Navagation-Menu
var navagation = document.getElementsByTagName('nav')[0];

function headerNav(info) {
    'use strict';
    
    navagation.innerHTML =  ' ';
    for (var i = 0; i < info.items.length; i += 1){
         navagation.innerHTML += '<ul><li><a href="'+(info.items[i].url)  + ' "> '+(info.items[i].label) + '</a></li><ul>' ;
     }
}


//var builddata = function () {
//    var source = [];
//    var items = [];
//    // build hierarchical source.
//    for (i = 0; i < data.length; i++) {
//        var item = data[i];
//        var label = item["label"];
//        var parentid = item["items"];
//        var id = item["url"];
//
//        if (items[parentid]) {
//            var item = { parentid: parentid, label: label, item: item };
//            if (!items[parentid].items) {
//                items[parentid].items = [];
//            }
//            items[parentid].items[items[parentid].items.length] = item;
//            items[url] = item;
//        }
//        else {
//            items[url] = { parentid: parentid, label: label, item: item };
//            source[url] = items[url];
//        }
//    }
//    return source;
//}
//var source = builddata();


//Note: Don't know how to do the dropdown menu for the Careers page.


//footer icons
document.getElementsByTagName("span")[0].innerHTML = '<i class="fa fa-facebook"></i>';
document.getElementsByTagName("span")[1].innerHTML = '<i class="fa fa-twitter"></i>';
document.getElementsByTagName("span")[2].innerHTML = '<i class="fa fa-instagram"></i>';
document.getElementsByTagName("span")[3].innerHTML = '<i class="fa fa-youtube"></i>'; 
