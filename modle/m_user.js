const db=require('../tools/db.config')

const checkEmail=function(email,callback){
    const sqlStr="select * from `users` where email=?"
    db.query(sqlStr,email, (err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
};

module.exports.checkEmail=checkEmail;