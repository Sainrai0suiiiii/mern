function greet(name, callback){
    console.log("hello " + name);
    callback();
}
function sayBye(){
    console.log("bye!!");
}

greet("sain", sayBye);

function say (kale, dontcall){
    console.log("kale" + kale);
    dontcall();
}
function saysay(){
    console.log("bye");
}
say("sain",saysay);

function hey (hey1, hey2){
    console.log("heyhey "+ hey1);
    hey2();
}

function ney(){
    console.log("cheychye");
}
hey("sain Rai",ney);

function below(tala,mathi){
    console.log("down"+tala);
    mathi();
}
function upward(){
    console.log("chupLag");
}
below("chupmuji",upward);

function sain(sahin,callback){
    console.log("hello" + sahin);
    callback();
}
function rai (){
    console.log("RAi is king");
}
sain("Sahinkulung",rai);

function rai1 (){
    console.log("he is king");
}
rai1();

function kulung(clan,subClan){
    console.log("I belong to rai clan "+ clan);
    subClan();
}
function Rai(){
    console.log("My caste is Rai");
}
kulung("kulung is my clan",Rai);

console.log("start");
setTimeout(function(){
    console.log("Inside setTimeout");
},2000);
console.log("end");

