var langBtn = document.getElementById("langBtn");
langBtn.querySelector('span').innerHTML = isZh ? "EN" : "CN";
langBtn.onclick = function(){
    var path = location.pathname.split("zh").pop();
    location.href = isZh ? path : "/zh"+path;
}