$(function(){
    /////////////////////

    var left = 1;
    
function mainSlide(){
    $('.mainSlide').css({left:-(left*100)+"%"});
    left==left+1;
    if(left===3){left==0}
}

setInterval(mainSlide,2000)

    /////////////////////
});