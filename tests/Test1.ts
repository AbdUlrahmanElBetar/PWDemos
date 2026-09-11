// const browsers = ["chrome", "firefox", "safari", "edge", "opera"];

// for (let x = 0; x <= browsers.length ; x++){

//     // console.log(x + " : " + browsers[x]);
//     console.log(`Run smoke Tests As ${browsers}`)
// }

// for (const x of browsers){
//     console.log(`Run smoke Tests As ${x}`)
// }

// function buildLoginMessage(username :String , success:boolean) : String{
//     return success ? `${username} logged in ` : `${username} not logged in `
// }





























const browsers = ["chrome", "firefox", "edge"];


for (let ind = 0; ind <= browsers.length ; ind++){
    if (ind == browsers.length - 1 ){
        console.log(browsers[ind])
    }
}

for (let [index,browser] of browsers.entries()){
    if(index === browsers.length -1 ){
        console.log(browsers[index])
    }
}