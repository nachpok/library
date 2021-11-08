const bll_users=require('./users');
const {SHA256} =require ('crypto-js');
const jwt = require('jsonwebtoken');

function incript(password){
    return SHA256(password).toString()
}

function getToken(token,TZ,pass){
    if(token){

    }
    var token = jwt.sign({password:pass,tudatZehut:TZ},'mysecret',{expiresIn:`600000ms`});
    return token;
}
function verifyToken(token){
    return jwt.verify(token,'mysecret');
}
async function verifyUser(tz,password){
    password=incript(password);
    let user=await bll_users.findUser(null,null,null,tz,null,null,null,null,password,null);
    console.log("inFunc: ",user);
    return user;
}
function test(){
    let pass='123456';
    let tz ='123456789';
    let user= verifyUser(tz,pass);
    console.log(user);
}
module.exports={
    incript,
    test///////remove
}