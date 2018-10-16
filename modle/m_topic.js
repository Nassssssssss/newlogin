//数据库中的操作
const db=require('../tools/db.config')
exports.findAllTopic=(callback)=>{
    const sqlStr="select * from `topics` order by `createdAt` desc"
    db.query(sqlStr, (err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
}
exports.handleCreateTopic=(body,callback)=>{
    const sqlStr="insert into `topics` set ?"
    db.query(sqlStr,body, (err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
}
exports.findTopicById=(topicID,callback)=>{
    const sqlStr="select * from `topics` where id=?"
    db.query(sqlStr,topicID,(err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
}
