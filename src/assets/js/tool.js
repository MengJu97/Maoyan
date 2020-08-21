function getAttribute(obj, att) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[att];
    } else {
        return obj.currentStyle[att];
    }
}

function bufferMove(obj, json, fn) {
    let speed = null;
    clearInterval(obj.timer);
    let currentStyle;
    obj.timer = setInterval(function () {
        let flag = true;
        for (var att in json) {
            if (att === 'opacity') {
                currentStyle = getAttribute(obj, att)* 100;
                console.log(currentStyle);
            } else {
                currentStyle = parseInt(getAttribute(obj, att));
            }
            speed = (json[att] - currentStyle) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


            if (currentStyle !== json[att]) {
                if (att === 'opacity') {
                    obj.style[att] = (currentStyle + speed) / 100;
                } else {
                    obj.style[att] = currentStyle + speed + 'px';
                }
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            fn && fn();
        }
    }, 1000 / 60)
}