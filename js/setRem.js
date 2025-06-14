function setRem() {
    var html = document.documentElement;
    var width = html.clientWidth,
        height = html.clientHeight;
    width = width >= 1440 ? 1440 : width;
    html.style.fontSize = width / 14.4  + 'px'; // 设计稿宽度为1440px，那么1rem=100px，故除以14.4
    setTimeout(()=>{
        height = height - $('.header-box').height();
        if (width >= 1440 && height < 850 && height > 0) {
            html.style.fontSize = height/8+ 'px';
         }
    },1)
    
}
setRem();
window.onresize = function() {
    setRem();
};