function leftScroll() {
    const left = document.querySelector(".container");
    left.scrollBy(-300, 0);
    
}
function rightScroll() {
    const right = document.querySelector(".container");
    right.scrollBy(300, 0);
}

function closeread(){
    document.getElementById('div1').style.visibility='hidden';
    document.getElementById('div2').style.visibility='hidden';
    document.getElementById('div3').style.visibility='hidden';
    document.getElementById('div4').style.visibility='hidden';
    document.getElementById('div5').style.visibility='hidden';
    document.getElementById('div6').style.visibility='hidden';

    document.getElementById('b1').style.visibility='visible';
    document.getElementById('b2').style.visibility='visible';
}
function show1(){
    const element = document.getElementById('div1');
    const element1 = document.getElementById('paleo');
    const element2 = document.getElementById('t1');
    const element3 = document.getElementById('para1');

    element.style.visibility = 'visible';

    element.classList.remove('fade');
    element1.classList.remove('appear');
    element2.classList.remove('title');
    element3.classList.remove('para');

    void element.offsetWidth; 

    element.classList.add('fade');    
    element1.classList.add('appear'); 
    element2.classList.add('title'); 
    element3.classList.add('para');

    document.getElementById('b1').style.visibility='hidden';
    document.getElementById('b2').style.visibility='hidden';
}
function show2(){
    const element = document.getElementById('div2');
    const element1 = document.getElementById('vegan');
    const element2 = document.getElementById('t2');
    const element3 = document.getElementById('para2');

    element.style.visibility = 'visible';
    
    element.classList.remove('fade');
    element1.classList.remove('appear');
    element2.classList.remove('title');
    element3.classList.remove('para');

    void element.offsetWidth; 

    element.classList.add('fade');
    element1.classList.add('appear'); 
    element2.classList.add('title'); 
    element3.classList.add('para');

    document.getElementById('b1').style.visibility='hidden';
    document.getElementById('b2').style.visibility='hidden';
}
function show3(){
    const element = document.getElementById('div3');
    const element1 = document.getElementById('ultrafat');
    const element2 = document.getElementById('t3');
    const element3 = document.getElementById('para3');
    
    element.style.visibility = 'visible';

    element.classList.remove('fade');
    element1.classList.remove('appear');
    element2.classList.remove('title');
    element3.classList.remove('para');

    void element.offsetWidth; 

    element.classList.add('fade'); 
    element1.classList.add('appear');
    element2.classList.add('title'); 
    element3.classList.add('para');

    document.getElementById('b1').style.visibility='hidden';
    document.getElementById('b2').style.visibility='hidden';
}
function show4(){
    const element = document.getElementById('div4');
    const element1 = document.getElementById('keto');
    const element2 = document.getElementById('t4');
    const element3 = document.getElementById('para4');

    element.style.visibility = 'visible';

    element.classList.remove('fade');
    element1.classList.remove('appear');
    element2.classList.remove('title');
    element3.classList.remove('para');

    void element.offsetWidth; 

    element.classList.add('fade');
    element1.classList.add('appear'); 
    element2.classList.add('title'); 
    element3.classList.add('para');

    document.getElementById('b1').style.visibility='hidden';
    document.getElementById('b2').style.visibility='hidden';
}
function show5(){
    const element = document.getElementById('div5');
    const element1 = document.getElementById('dukan');
    const element2 = document.getElementById('t5');
    const element3 = document.getElementById('para5');

    element.style.visibility = 'visible';

    element.classList.remove('fade');
    element1.classList.remove('appear');
    element2.classList.remove('title');
    element3.classList.remove('para');

    void element.offsetWidth; 

    element.classList.add('fade'); 
    element1.classList.add('appear'); 
    element2.classList.add('title'); 
    element3.classList.add('para');

    document.getElementById('b1').style.visibility='hidden';
    document.getElementById('b2').style.visibility='hidden';
}
function show6(){
    const element = document.getElementById('div6');
    const element1 = document.getElementById('atkin');
    const element2 = document.getElementById('t6');
    const element3 = document.getElementById('para6');

    element.style.visibility = 'visible';

    element.classList.remove('fade');
    element1.classList.remove('appear');
    element2.classList.remove('title');
    element3.classList.remove('para');

    void element.offsetWidth; 

    element.classList.add('fade'); 
    element1.classList.add('appear'); 
    element2.classList.add('title'); 
    element3.classList.add('para');

    document.getElementById('b1').style.visibility='hidden';
    document.getElementById('b2').style.visibility='hidden';
}

