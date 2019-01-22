function ready(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState != 'loading')
                fn();
        });
    }
}

ready(function () {
    var canvas = document.getElementById('thor');
    var ctx = canvas.getContext('2d');
    var image = new Image();
    image.src = "images/thor-clipart-avengers-alliance-8.png";
    image.addEventListener('load', function() {
        ctx.drawImage(image, 0, 0, 560, 510, 0, 0, 560/4, 510/4);

        ctx.beginPath();
        ctx.moveTo(300, 300);
        ctx.lineTo(310, 300);
        ctx.lineTo(310, 380);
        ctx.lineTo(300, 380);
        ctx.fill();
    }, false);
});

