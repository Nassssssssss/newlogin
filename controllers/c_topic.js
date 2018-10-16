

const m_topic=require('../modle/m_topic')
const moment=require('moment')
exports.showTopic=(req,res)=>{
    m_topic.findAllTopic(function(err,data){
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            })
        }
        res.render('index.html',{
            topics:data,
            user:req.session.user
        })
    })
}
exports.createTopic=(req,res)=>{
    res.render('topic/create.html')
}
exports.handleCreateTopic=(req,res)=>{
    const body=req.body;

    body.createdAt=moment().format('YYYY-MM-DD,hh-mm-ss')   
    body.userId=req.session.user.id

    m_topic.handleCreateTopic(body,(err,data)=>{
        if(err){
            console.log(err)
            return res.send({
                code:500,
                message:'服务器出错'
            })
        }
        res.send({
            code:200,
            message:'发布成功'
        })
    })
}
exports.showDetail=(req,res)=>{
   const topicID=req.params.topicID
    m_topic.findTopicById(topicID,(err,data)=>{
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            })
        }
        res.render('topic/show.html',{
            topic:data[0]
        })
    })
}