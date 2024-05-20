//Q-1

(function () {
    const heading = "Gretting..";
    document.getElementById('heading').innerHTML = " "+ heading;

    const greet = document.getElementById('greet');
    function wish(message){
        if(message){
            greet.innerHTML = (`${message}`);
        }else{
            greet.innerHTML = (`Good Morning..!`);
        }
    }
    wish();
})();


//q-2

(function () {
    const heading = "Area Of Circle..";
    document.getElementById('heading2').innerHTML = " "+ heading;

    const circle  = document.getElementById('cirlcleArea');
    function circleofarea(r){
        pi = 3.14;
        const circle = pi*r*r;
        return circle;
    }
    const radius = 5;
    const ans = circleofarea(radius);

    circle.innerHTML = (`Area of Circle is  : ${ans}`);
})();


//q-3

(function () {
    const heading = "Area Of Triangle..";
    document.getElementById('heading3').innerHTML = " "+ heading;

    const triangle = document.getElementById('triangleArea');
    function triangleArea(l , h){
        const areaoftraingle = (l * h)/2 ;
        return areaoftraingle;
    }
    const l = 3;
    const h = 16;
    const ansT = triangleArea(l,h);

    triangle.innerHTML = (`Area of Triangle is :  ${ansT}`);
})();


//q-4

(function () {
    const heading = "Area Of Rectangle..";
    document.getElementById('heading4').innerHTML = " "+ heading;

    const Rectangle = document.getElementById('rectangleArea');
    function RectangleArea(l , h){
        const areaofrectangle= l * h;
        return areaofrectangle;
    }
    const l = 25;
    const h = 6;
    const ansR = RectangleArea(l,h);

    Rectangle.innerHTML = (`Area of Rectangle is :  ${ansR}`);

})();

//Q-5

(function(){
    const heading = " Q -5..";
    document.getElementById('heading5').innerHTML = " "+ heading;

    const argument = document.getElementById('Argument');
    function Argument(a ,b , c){
        const Arguments = ((b * b) * (4 * a * c) ) / (2 * a)
        return Arguments;
    }
    const a = 7;
    const b = 8;
    const c = 9;
    const Ans5 = Argument(a ,b , c);

    argument.innerHTML = (`Ans : ${Ans5}`);

})();

//Q-6
(function(){
    const heading = " Q -6..";
    document.getElementById('heading6').innerHTML = " "+ heading;

    const argument2 = document.getElementById('quetion6');
    function quetion6(a ,b , c){
        const Arguments2 =  (a * a) + (2 * a * b) + (b * b);
        return Arguments2;
    }
    const a = 5;
    const b = 6;
    const c = 7;
    const Ans6 = quetion6(a ,b , c);

    argument2.innerHTML = (`Ans : ${Ans6}`);

})();

//Q-7
(function(){
    const heading = "Fahrenheit to Celsius..";
    document.getElementById('heading7').innerHTML = " "+ heading;

    const argument3 = document.getElementById('Fahrenheit');
    function Fahrenheit(f){
        const Arguments3 =  (f - 32) / 1.8;
        return Arguments3;
    }
    const fahrenheit = 90;
    const Ans7 = Fahrenheit(fahrenheit);

    argument3.innerHTML = (`Fahrenheit :  ${fahrenheit} </BR></BR> Celsius : ${Ans7}`);
})();

//Q-8
(function(){
    const heading = "Celsius to Fahrenheit..";
    document.getElementById('heading8').innerHTML = " "+ heading;

    const argument4 = document.getElementById('celsius');
    function celsius(c){
        const Arguments4 = (c * 1.8) + 32;
        return Arguments4;
    }
    const Celsius = 80;
    const Ans8 = celsius(Celsius);

    argument4.innerHTML = (`Celsius : ${Celsius} </br></br> fahrenheit :  ${Ans8}`);

})();

//Q-9
(function(){
    const heading = "Odd or Even Number..";
    document.getElementById('heading9').innerHTML = " "+ heading;

    const oddeven = document.getElementById('oddeven');
    function n(choice){
        if(choice % 2 == 0){
            oddeven.innerHTML = (`${choice} is Even Number`);
        }else{
            oddeven.innerHTML = (`${choice} is Odd Number`);
        }
    }
    const choice = 3;
    n(choice);

})();


//Q-10
(function(){
    const heading = "Swapping Number..";
    document.getElementById('heading10').innerHTML = " "+ heading;

    const Swapping = document.getElementById('swap');

    function Swap(x , y){
        Swapping.innerHTML += (`Current Value : a= ${x} and b= ${y} <br></br> `);
        x = x + y;
        y = x - y;
        x = x - y;
        Swapping.innerHTML += (`Swapping Value : a= ${x} and b =${y}`);
    }
    x = 90;
    y = 80;
    Swap(x , y);
})();
