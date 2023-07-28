function Hero(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return '<img width="'+ this.size + '"' +
            ' height="'+ this.size + '"' +
            ' src="' + this.image +'"' + 'id="nobita"'+
            ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 20;
        console.log('ok: ' + this.left);
    }

}

var hero = new Hero('Nobita.png', 20, 30, 40);
var timeout;
function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    timeout = setTimeout(start, 500)
}
function upArrowPressed() {
    let element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) - 5 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 5 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 5 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 5 + 'px';

}
function moveSelection(evt) {
    switch (evt.which) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;

    } clearTimeout(timeout)
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
}
start();