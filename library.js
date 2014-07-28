/*!
 * LibraryJS v0.0.3
 *
 * Does not require any dependancies
 * http://libraryjs.github.io/LibraryJS/
 *
 * Copyright 2014 Jakemichaeldrew, and other contributors
 * Released under the MIT license
 *
 * Date: 28-07-2014
 */

var names = ["jquery","angular","bootstrap","annyang","chart.js","svg.js","snap.svg","react.js"];
var src = ["http://code.jquery.com/jquery-2.1.1.min.js","https://ajax.googleapis.com/ajax/libs/angularjs/1.0.1/angular.min.js","//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js","https://cdnjs.cloudflare.com/ajax/libs/annyang/1.1.0/annyang.min.js"."//cdnjs.cloudflare.com/ajax/libs/Chart.js/0.2.0/Chart.min.js","//cdnjs.cloudflare.com/ajax/libs/svg.js/1.0.0-rc.8/svg.min.js","//cdnjs.cloudflare.com/ajax/libs/snap.svg/0.3.0/snap.svg-min.js","//cdnjs.cloudflare.com/ajax/libs/react/0.11.0/react.min.js"];

function error(){
    console.error("An Error has occurred.")   
}

function lib(name){
    name = name.toLowerCase();
    if (names.indexOf(name) > -1){
        var script   = document.createElement("script");
        script.type  = "text/javascript";
        script.src   = src[names.indexOf(name)];
        document.head.appendChild(script);
    }else{
        error();   
    }
}
