var x, y;
var X, Y;
var flag = 0;

function setup() {
    createCanvas(800, 816);
    x = 400;
    y = 0;
    X = 1;
    Y = 0.1;
    a = 800;
    b = 40;
    A = -1;
    B = 0.1;
    arr = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    button1 = createButton('1');
    button1.style('font-size', '10px');
    button1.style('background-color', 'yellow');
    button1.position(10, 19);
    button1.mousePressed(f1);
    button2 = createButton('2');
    button2.style('font-size', '10px');
    button2.style('background-color', 'yellow');
    button2.position(30, 19);
    button2.mousePressed(f2);
    button3 = createButton('3');
    button3.style('font-size', '10px');
    button3.style('background-color', 'yellow');
    button3.position(50, 19);
    button3.mousePressed(f3);
    button4 = createButton('4');
    button4.style('font-size', '10px');
    button4.style('background-color', 'yellow');
    button4.position(70, 19);
    button4.mousePressed(f4);
    button5 = createButton('5');
    button5.style('font-size', '10px');
    button5.style('background-color', 'yellow');
    button5.position(90, 19);
    button5.mousePressed(f5);
    button6 = createButton('6');
    button6.style('font-size', '10px');
    button6.style('background-color', 'yellow');
    button6.position(110, 19);
    button6.mousePressed(f6);
    button7 = createButton('7');
    button7.style('font-size', '10px');
    button7.style('background-color', 'yellow');
    button7.position(130, 19);
    button7.mousePressed(f7);
    button8 = createButton('8');
    button8.style('font-size', '10px');
    button8.style('background-color', 'yellow');
    button8.position(150, 19);
    button8.mousePressed(f8);
    button9 = createButton('9');
    button9.style('font-size', '10px');
    button9.style('background-color', 'yellow');
    button9.position(170, 19);
    button9.mousePressed(f9);
    button10 = createButton('10');
    button10.style('font-size', '10px');
    button10.style('background-color', 'yellow');
    button10.position(190, 19);
    button10.mousePressed(f10);


};

function wrongclick() {
    alert("Wrong frame selected");
}


count = 0;

function f1() {
    if (!(arr[0])) {
        wrongclick();
        button1.style('background-color', 'red');
        flag = 0;
    } else {
        button1.style('background-color', 'green');
        count += 1;

    }
};


function f2() {
    if (!(arr[1])) {
        wrongclick();
        button2.style('background-color', 'red');
        flag = 0;
    } else {
        button2.style('background-color', 'green');
        count += 1;

    }
};

function f3() {
    if (!(arr[2])) {
        wrongclick();
        button3.style('background-color', 'red');
        flag = 0;
    } else {
        button3.style('background-color', 'green');
        count += 1;

    }
};

function f4() {
    if (!(arr[3])) {
        wrongclick();
        button4.style('background-color', 'red');
        flag = 0;
    } else {
        button4.style('background-color', 'green');
        count += 1;

    }
};

function f5() {
    if (!(arr[4])) {
        wrongclick();
        button5.style('background-color', 'red');
        flag = 0;
    } else {
        button5.style('background-color', 'green');
        count += 1;

    }
};

function f6() {
    if (!(arr[5])) {
        wrongclick();
        button6.style('background-color', 'red');
        flag = 0;
    } else {
        button6.style('background-color', 'green');
        count += 1;

    }
};

function f7() {
    if (!(arr[6])) {
        wrongclick();
        button7.style('background-color', 'red');
        flag = 0;
    } else {
        button7.style('background-color', 'green');
        count += 1;

    }
};

function f8() {
    if (!(arr[7])) {
        wrongclick();
        button8.style('background-color', 'red');
        flag = 0;
    } else {
        button8.style('background-color', 'green');
        count += 1;

    }
};

function f9() {
    if (!(arr[8])) {
        wrongclick();
        button9.style('background-color', 'red');
        flag = 0;
    } else {
        button9.style('background-color', 'green');
        count += 1;

    }
};

function f10() {

    if (!(arr[9])) {
        wrongclick();
        button10.style('background-color', 'red');
        flag = 0;
    } else {
        button10.style('background-color', 'green');
        count += 1;

    }
};




function draw() {
    background(200);
    strokeWeight(4);
    stroke('black');
    line(400, 0, 400, 800);
    line(799, 0, 799, 800);

    if (count == 5) {
        if (x <= 5000) {
            stroke('red');
            x = x + X;
            y = y + Y;
            if (x <= 1000) {
                line(x, y, 400, 0);
            }
            line(x, y + 40, 400, 40);
            line(x, y + 80, 400, 80);
            line(x, y + 120, 400, 120);
            line(x, y + 160, 400, 160);


        }
        if (x >= 950) {
            stroke(255, 204, 0);
            if (a >= 400) {
                a = a + A;
                b = b + B;
                line(a, b, 800, 40);
            }
            alert("acknowledgent for frame 1 recieved, select the next frame to be sent");
            arr = [0, 0, 0, 0, 0, 1, 0, 0, 0];
        }
    }

    if (count == 6) {
        x1 = 400;
        y1 = 200;
        a1 = 800;
        b1 = 80;
        stroke('red');
        if (x1 <= 5000) {
            x1 = x1 + X;
            y1 = y1 + Y;
        }
        if (x1 >= 950) {
            stroke(255, 204, 0);
            if (a1 >= 400) {
                a1 = a + A;
                b1 = b + B;
                line(a, b, 800, 80);
            }
            alert("acknowledgent for frame 1 recieved, select the next frame to be sent");
            arr = [0, 0, 0, 0, 0, 1, 0, 0, 0];

        }

    };

    function popUp() {
        alert("End");
    };
    0 a