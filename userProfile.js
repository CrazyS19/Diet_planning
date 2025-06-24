function closeedit(){
    document.getElementById('edit').style.visibility='hidden';
    document.getElementById('uname').style.visibility='hidden';
    document.getElementById('email').style.visibility='hidden';
    document.getElementById('password').style.visibility='hidden';
    document.getElementById('dp').style.visibility='hidden';
    document.getElementById('b1').style.visibility='visible';
    document.getElementById('b10').style.visibility='visible';
    document.getElementById('b11').style.visibility='visible';

}

function changeProfile(){
    const element = document.getElementById('edit');
    element.style.visibility = 'visible';

    element.classList.remove('edit');
    void element.offsetWidth; 
    element.classList.add('edit');    
    document.getElementById('b1').style.visibility='hidden';
    document.getElementById('b10').style.visibility='hidden';
    document.getElementById('b11').style.visibility='hidden';
}

function goback(){
    document.getElementById('uname').style.visibility='hidden';
    document.getElementById('email').style.visibility='hidden';
    document.getElementById('password').style.visibility='hidden';
    document.getElementById('dp').style.visibility='hidden';
    document.getElementById('edit').style.visibility='visible';
}

function changeuname(){
    const element = document.getElementById('uname');
    element.style.visibility = 'visible';
    element.classList.remove('uname');
    void element.offsetWidth; 
    element.classList.add('uname'); 
    document.getElementById('b1').style.visibility='hidden';
}
function commitchange(){
    event.preventDefault();
    var uname= document.getElementById("newname").value;
    document.getElementById("uname1").innerHTML=uname;
}

function changeemail(){
    const element = document.getElementById('email');
    element.style.visibility = 'visible';
    element.classList.remove('email');
    void element.offsetWidth; 
    element.classList.add('email'); 
    document.getElementById('b1').style.visibility='hidden';
}
function commitchange1(){
    event.preventDefault();
    var uname= document.getElementById("newemail").value;
    document.getElementById("email1").innerHTML=uname;
}

function changepass(){
    const element = document.getElementById('password');
    element.style.visibility = 'visible';
    element.classList.remove('password');
    void element.offsetWidth; 
    element.classList.add('password'); 
    document.getElementById('b1').style.visibility='hidden';
}

function checkpass(){
    const oldpassword = document.getElementById('oldpass').value;
    const newpassword = document.getElementById('newpass').value;
    const confirmpassword = document.getElementById('confirmpass').value;

    if (oldpassword=="Shifa"){//get the compare value from db
        if(newpassword==confirmpassword){
            //commit changes to database
            alert("Password changed successfully");
        }
        else{
            alert("Your new passwords doesn't match");
        }       
    }
    else{
        alert("Your original password is incorrect");
    }
}

function changedp(){
    const element = document.getElementById('dp');
    element.style.visibility = 'visible';
    element.classList.remove('dp');
    void element.offsetWidth; 
    element.classList.add('dp'); 
    document.getElementById('b1').style.visibility='hidden';
}
function commitchange1(){
    event.preventDefault();
    var uname= document.getElementById("newemail").value;
    document.getElementById("email1").innerHTML=uname;
}

var profile=document.getElementById('profileimg');
function dp1(){   
    profile.style.backgroundImage='url("profile_pics/apple.jpg")';
}
function dp2(){   
    profile.style.backgroundImage='url("profile_pics/watermelon.jpg")';
}
function dp3(){   
    profile.style.backgroundImage='url("profile_pics/raspberry.jpg")';
}
function dp4(){   
    profile.style.backgroundImage='url("profile_pics/peach.jpg")';
}

function dp5(){   
    profile.style.backgroundImage='url("profile_pics/turnip.jpg")';
}
function dp6(){   
    profile.style.backgroundImage='url("profile_pics/grapes.jpg")';
}
function dp7(){   
    profile.style.backgroundImage='url("profile_pics/banana.jpg")';
}
function dp8(){   
    profile.style.backgroundImage='url("profile_pics/corn.jpg")';
}

function dp9(){   
    profile.style.backgroundImage='url("profile_pics/coconut.jpg")';
}
function dp10(){   
    profile.style.backgroundImage='url("profile_pics/avocado.jpg")';
}
function dp11(){   
    profile.style.backgroundImage='url("profile_pics/potato.jpg")';
}
function dp12(){   
    profile.style.backgroundImage='url("profile_pics/mushroom.jpg")';
}

function dp13(){   
    profile.style.backgroundImage='url("profile_pics/kiwi.jpg")';
}
function dp14(){   
    profile.style.backgroundImage='url("profile_pics/capsicum.jpg")';
}
function dp15(){   
    profile.style.backgroundImage='url("profile_pics/cucumber.jpg")';
}
function dp16(){   
    profile.style.backgroundImage='url("profile_pics/peas.jpg")';
}

function showDiet(){
    const element = document.getElementById('content');

    element.style.visibility = 'visible';
    element.classList.remove('content');
    void element.offsetWidth; 
    element.classList.add('content'); 
    document.getElementById('history').style.visibility='hidden';
    document.getElementById('b10').style.opacity='1';
    document.getElementById('b11').style.opacity='.5';
}
function showBlog(){

    const element = document.getElementById('history');
    element.style.visibility = 'visible';

    element.classList.remove('history');
    void element.offsetWidth; 
    element.classList.add('history'); 
    document.getElementById('content').style.visibility='hidden';
    document.getElementById('b10').style.opacity='.5';
    document.getElementById('b11').style.opacity='1';

}
