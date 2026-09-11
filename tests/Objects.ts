
// const user = {
//     email : "Test@mail.com",
//     password : "Password"
// }

// user.email = "aaa"
// console.log(user)
// console.log("This is the User Email : " + user.email)



type Credentials = { 
    userName : String ,
    password : String ,
    email : String , 
    mobileNumber : Number
}

const admin : Credentials = {
    userName : "Abdulrahman",
    password : "0102233665589562", 
    email : "Abdulrahman@mail.com",
    mobileNumber : 12121212333
}

function retieveUserData (user : Credentials) : unknown {
    return `This is Admin Name ${user.userName} . And This is Admin Mobile Number : ${user.mobileNumber}`
}

console.log (retieveUserData(admin))

let {userName , email} = admin

console.log("Desatructuring  : " + userName + "   :   " + email)