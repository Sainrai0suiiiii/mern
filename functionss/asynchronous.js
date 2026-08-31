console.log("Setp 1: Start");
setTimeout(() =>{
    console.log("Step 2: Delayed Response");
},2000);
console.log("Step 3:end");

//the old way:callbacks

function getUserData(userId, callback){
    setTimeout(()=>{
        callback({ id: userId, name:"Alice"});
    },2000);
}
console.log("fetching users...");
getUserData(1,(user)=>{
    console.log("user received:", user.name);
});

the modern way: async/await

function getUserData(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ id: userId, name:"Sain"});
        },1000);
    });
}

async function run(){
    console.log("fetching user...");
    
    const user= await getUserData(1);

    console.log("user received:", user.name);
}
run();