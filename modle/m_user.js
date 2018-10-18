const db=require('../tools/db.config')

const checkEmail=(email,callback)=>{
    const sqlStr="select * from `users` where email=?"
    db.query(sqlStr,email, (err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
};
const checkNickName=(nickname,callback)=>{
    const sqlStr="select * from `users` where nickname=?"
    db.query(sqlStr,nickname, (err, data) => {
        if (err) {
            return callback(err)
        } ;
       callback(null,data) 
    });
}
const addUser=(body,callback)=>{
    const sqlStr="insert into `users` set ?"
    db.query(sqlStr,body, (err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
}
module.exports.addUser=addUser;
module.exports.checkNickName=checkNickName;
module.exports.checkEmail=checkEmail;














