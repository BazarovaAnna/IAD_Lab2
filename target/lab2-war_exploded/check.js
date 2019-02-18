function validation() {
    let e = document.getElementById('form');
    let stopSubmit = false;
    let x = document.getElementById('trueX').value
    let y = e.Y.value;
    let r = e.R.value;
    let msgy = '', msgr = '';
    let arry = y.split('');
    let arrr = r.split('');

    let newY = y.replace(/,/g, '.');
    document.getElementById('Y').value = newY;
    y = e.Y.value;

    let newR = r.replace(/,/g, '.');
    document.getElementById('R').value = newR;
    r = e.R.value;

        if (isNaN(y) || y < -5 || y > 3 || y === " " || arry[0] === '.' || y === '') {
            stopSubmit = true;
            msgy += 'Input number between -5 and 3';
            document.getElementById('errY').style.visibility = 'visible';
            document.getElementById('errY').innerHTML = msgy;
        }
        if (isNaN(r) || r < 1 || r > 4 || r === " " || arrr[0] === '.' || r === '') {
            stopSubmit = true;
            msgr += 'Input number between 1 and 4';
            document.getElementById('errR').style.visibility = 'visible';
            document.getElementById('errR').innerHTML = msgr;
        }
        if (!stopSubmit) {
            e.submit();
            document.getElementById('resTable').style.display = "block";
            drawPoint('graph', x, y, r);
        }
}

function resetValidationY() {
    document.getElementById('errY').style.visibility = 'hidden';
    document.getElementById('errY').innerHTML = '123';
}

function resetValidationR() {
    document.getElementById('errR').style.visibility = 'hidden';
    document.getElementById('errR').innerHTML = '123';
}

function interract(){
    let canvas = document.getElementById("graph");
    let event = window.event;
    let pos = getMousePos(canvas, event);
    let e = document.getElementById('form');

    let r = e.R.value;
    let newR = r.replace(/,/g, '.');
    document.getElementById('R').value = newR;
    let arrr = r.split('');

    let msgr = '';

    if (isNaN(r) || r < 1 || r > 3 || r === " " || arrr[0] === '.' || r === '') {
        msgr += 'Input number between 1 and 3';
        document.getElementById('errR').style.visibility = 'visible';
        document.getElementById('errR').innerHTML = msgr;
    } else {
        let x = Math.round(((pos.x - 200) * r) / 140 * 10) / 10;
        let y = Math.round(((-pos.y + 200) * r) / 140 * 10) / 10;
        document.getElementById('trueX').value = x;
       e.Y.value = y;
        validation();
    }
}

function draw(canv, r) {
    let ctx = document.getElementById(canv).getContext("2d");

    ctx.clearRect(0, 0, 400, 400);
//четверть круга
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.arc(200, 200, 140, 2 * Math.PI,  3*Math.PI/2, true);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();
//прямоугольник
    ctx.beginPath();
    ctx.rect(130, 60, 70, 140);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();
//треугольник
    ctx.beginPath();
    ctx.moveTo(60, 200);
    ctx.lineTo(200, 200);
    ctx.lineTo(200, 340);
    ctx.lineTo(60, 200);
    ctx.closePath();
    ctx.strokeStyle = "dodgerblue";
    ctx.fillStyle = "dodgerblue";
    ctx.fill();
    ctx.stroke();
//ось ОУ
    ctx.beginPath();
    ctx.moveTo(200, 380);
    ctx.lineTo(200, 20);
    ctx.lineTo(195, 25);
    ctx.lineTo(205, 25);
    ctx.lineTo(200, 20);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
//ось ОХ
    ctx.beginPath();
    ctx.moveTo(20, 200);
    ctx.lineTo(380, 200);
    ctx.lineTo(375, 195);
    ctx.lineTo(375, 205);
    ctx.lineTo(380, 200);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
//отметки на осях
    ctx.beginPath();

    ctx.moveTo(270, 195);
    ctx.lineTo(270, 205);
    ctx.moveTo(340, 195);
    ctx.lineTo(340, 205);

    ctx.moveTo(195, 130);
    ctx.lineTo(205, 130);
    ctx.moveTo(195, 60);
    ctx.lineTo(205, 60);

    ctx.moveTo(130, 195);
    ctx.lineTo(130, 205);
    ctx.moveTo(60, 195);
    ctx.lineTo(60, 205);

    ctx.moveTo(195, 270);
    ctx.lineTo(205, 270);
    ctx.moveTo(195, 340);
    ctx.lineTo(205, 340);

    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.font = "20px Times New Roman";
    ctx.fillText('Y', 210, 30);
    ctx.fillText('X', 370, 225);
}



window.onkeydown = function (e) {
    let code = e.key;
    if (code === 'Enter') {
        validation();
    }
};

function getMousePos(canvas, evt) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function validationR() {
    let e = document.getElementById('form');
    let r = e.R.value;
    let newR = r.replace(/,/g, '.');
    document.getElementById('R').value = newR;
    r = e.R.value;

    let arrr = r.split('');

    let msgr = '';

    if (isNaN(r) || r < 1 || r > 4 || r === " " || arrr[0] === '.' || r === '') {
        msgr += 'Input number between 1 and 4';
        document.getElementById('errR').style.visibility = 'visible';
        document.getElementById('errR').innerHTML = msgr;
        return false
    } else draw('graph', r);
    return true;
}


function drawPoint(canv, x, y, r) {
    let ctx = document.getElementById(canv).getContext("2d");
    ctx.beginPath();
    ctx.font = "14px Times New Roman";
    ctx.fillText(r, 340, 215);
    ctx.fillText(r / 2, 270, 215);

    ctx.fillText(r, 215, 60);
    ctx.fillText(r / 2, 215, 130);

    ctx.fillText(-r, 60, 215);
    ctx.fillText(-(r / 2), 130, 215);

    ctx.fillText(-r, 215, 340);
    ctx.fillText(-(r / 2), 215, 275);

    ctx.closePath();//this
    ctx.strokeStyle = "black";//part
    ctx.fillStyle = "black";//delete
    ctx.stroke();//to have dif colors

    if (r < 1 || r > 4) {
    }
    else {
        if (Math.abs(x / r) > 1.2 || Math.abs(y / r) > 1.2) {
            ctx.font = "14px Times New Roman";
            ctx.fillText('Some of points are out of the graph', 130, 390);
        } else {
            ctx.beginPath();
            ctx.arc(Math.round(200 + ((x / r) * 140)), Math.round(200 - ((y / r) * 140)), 3, 0, Math.PI * 2);
            ctx.closePath();
            if (    (x >= 0 && y >= 0 && (x*x+y*y)<=r*r) ||
                (x <= 0 && y >= 0 && Math.abs(x)<=(r/2) && y<=r) ||
                (x <= 0 && y <= 0 && y>=-x-r)
            ){//костыль для зеленых точек
            ctx.strokeStyle = "green";
            ctx.fillStyle = "green";
            ctx.fill();
            ctx.stroke();
            }else{
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.stroke();
            }
        }
    }
}
function setX() {
    document.getElementById('trueX').value = document.getElementById('X').value;
}