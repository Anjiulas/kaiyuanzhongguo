/**
 * Created by Administrator on 2016/7/28.
 */

var  arrE = new  Array();
var  arrU = new  Array();
var  arrN = new  Array();
var  arrP = new  Array();

function  getMessage(){
    var email = document.getElementById("email").value;
    var  pe = document.getElementById("pe");
    var Urls  = document.getElementById("Urls").value;
    var  pu =document.getElementById("pu");
    var  name = document.getElementById("name").value;
    var  pn = document.getElementById("pn");
    var  passwd1 = document.getElementById("passwd1").value;
    var  passwd2 = document.getElementById("passwd2").value;
    var  pp = document.getElementById("pp");
    testEmail(email,pe);
    testUrls(Urls,pu);
    testName(name,pn);
    passwdTF(passwd1,passwd2,pp);

}


//验证邮箱
function  testEmail(email,pe){
    var  pae = /^[0-9a-zA-z._-]{6,9}@[0-9a-zA-Z]{2,4}.com$/;
    if(pae.test(email) == false){
        pe.innerHTML = "<span style='color: red'>邮箱格式输入错误,请重新输入</span>";
    }else{
        var k = Same(arrE,email);
        if(k == 1){
            pe.innerHTML = "<span style='color: green;font-size: 18px;'>✔</span>";
        }else{
            pe.innerHTML = "<span style='color: red;'>邮箱已被人使用</span>";
        }
    }
}

//验证网址
function  testUrls(Urls,pu){
    var  pau = /^[0-9a-zA-z./]{8,10}$/;
    if(pau.test(Urls) == false){
        pu.innerHTML = "<span style='color: red'>网址格式输入错误,请重新输入</span>";
    }else{
        var k = Same(arrU,Urls);
        if(k == 1){
            pu.innerHTML = "<span style='color: green;font-size: 18px;'>✔</span>";
        }else{
            pu.innerHTML = "<span style='color: red;'>网址已被人使用</span>";
        }
    }
}

//验证邮箱
function  testName(name,pn){
    var  pan = /^[a-zA-Z_][0-9a-zA-z_-]{9}$/;
    if(pan.test(name) == false){
        pn.innerHTML = "<span style='color: red'>格式输入错误,请重新输入</span>";
    }else{
        var k = Same(arrN,name);
        if(k == 1){
            pn.innerHTML = "<span style='color: green;font-size: 18px;'>✔</span>";
        }else{
            pn.innerHTML = "<span style='color: red;'>用户已备人使用</span>";
        }
    }
}


//判断两次密码是否相同,并存入
function  passwdTF(passwd1,passwd2,pp){
    var pap = /(?!^\\d+$)(?!^[a-zA-Z]+$)(?!^[_#@]+$).{8,}/;
    if(pap.test(passwd1) == false){
        pp.innerHTML = "输入的密码格式不正确,请重新输入";
        return 0;
    }
    if(passwd1 == passwd2){
        arrP.push(passwd1);
    }else{
        pp.innerHTML = "两次输入的密码不相同,请重新输入";
        return 0;
    }
}
//查找是否有相同的函数
function  Same(array,num){
    var flag = 0;
    for(var i = 0; i < array.length; i++){
        if(array[i] == num){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        array.push(num);
        return 1;
    }else{
        return 0;
    }
}


//随机产生验证码

function createCode(){
    var code = new Array();
    var codeLength = 4;//验证码的长度
    var selectChar = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');

    for(var i=0;i<codeLength;i++) {
        var charIndex = Math.floor(Math.random()*36);
        code +=selectChar[charIndex];
    }
    if(code.length != codeLength){
        createCode();
    }else{
        return code;
    }
}
