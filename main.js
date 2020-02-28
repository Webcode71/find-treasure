var getRandomNumber = function(size) {
    return Math.floor(Math.random() * size);
};
var getDistance = function(event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};
var getDistanceHint = function(distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else if (distance < 400) {
        return "Очень очень холодно";
    } else {
        return "Замерзнешь!";
    }
};
var clicks = 0;
var width = 450;
var height = 450;
var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};
$("#map").click(function(event) {
    clicks++;
    var distance = getDistance(event, target);
    var distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint + "\n" + "Попытка: " + clicks + "\n" + "Всего попыток: 20");
    if (distance < 8) {
        alert("Клад найден! Сделано попыток: " + clicks);
    } else if (clicks > 20) {
        alert("КОНЕЦ ИГРЫ! К сожалению Вы превысили допустимое количество попыток.");
    }
});