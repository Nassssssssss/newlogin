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
exports.updateTopicByID=(topicID,body,callback)=>{
    const sqlstr="update `topics` set `title`=?,`content`=?  where `id`=?"
    db.query(sqlstr,[body.title,body.content,topicID],(err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
}
exports.delete=(topicID,callback)=>{
    const sqlstr="delete from `topic` where `id`=?"
    db.query(sqlstr,topicID,(err, data) => {
        if (err) {
            return callback(err)
        } ;
        callback(null,data) 
    });
}
