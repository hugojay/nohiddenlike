/*

No Hidden Like Button
Version 0.1

Visit: https://github.com/hugojay/nohiddenlike

*/
var x=document.getElementsByTagName("fb:like");
var y=x.length;
if(y>0){
    for(y--;y>0;y--){
        x[y].style.opacity="100";
    }
}
