function drawAndShowVolume() {
    var radiusBox = document.getElementById("radiusBox");
    var volumeText = document.getElementById("volumeText");

    var R = radiusBox.value;
    var vol = parseInt(calculateVolume(R));

    radiusBox.value = "";
    radiusBox.style.backgroundColor = "";
    volumeText.innerText = "";
    volumeText.style.color = "";

    if (R > 200) {
        alert("Error! \n Please enter value lower then 200");
        radiusBox.style.backgroundColor = "pink";
        volumeText.innerText = "Please enter value lower then 200";
        volumeText.style.color = "red";
        return false;
    }
    if (R == "" || isNaN(R) || R < 0) {
        alert("Error! \n Radius is ivalid");
        radiusBox.style.backgroundColor = "pink";
        volumeText.innerText = "Radius is ivalid";
        volumeText.style.color = "red";
        return false;
    }

    volumeText.innerText = "Volume: " + vol;
    draw(R);
}

function calculateVolume(r) {
    var vol = (4 * Math.PI * (r * r * r)) / 3;
    return vol;
}

function draw(R) {
    var canvas = document.getElementById("canvas").getContext("2d");

    canvas.beginPath();
    canvas.arc(200, 200, R, 0, 2 * Math.PI);
    canvas.strokeStyle = "rgb(224, 129, 129)";
    canvas.stroke();
}

function drawWithTimer() {
    setInterval(drawFromZeroToMax, 100);
    setInterval(refresh, 5000);
}

function drawFromZeroToMax() {
    for (var i = 0; i <= 200; i++) {
        var R = i;
        draw(R);
    }
}

function refresh() {
    location.reload();
}

function clearCanvas() {
    var volumeText = document.getElementById("volumeText");
    var canvas = document.getElementById("canvas").getContext("2d");

    volumeText.innerText = "";

    canvas.clearRect(0, 0, 400, 400);
}




