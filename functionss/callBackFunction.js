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