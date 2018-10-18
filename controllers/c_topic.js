

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
            topic:data[0],
            sessionUserId:req.session.user.id
        })
    })
}
exports.showEdit=(req,res)=>{
    //获取req中的动态ID
    const topicID=req.params.topicID;
    // const body=req.body
    m_topic.findTopicById(topicID,(err,data)=>{
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            })
        }
        res.render('topic/edit.html',{
            topic:data[0]
        })
    })
    // 修改数据
    // m_topic.updateTopicByID(topicID,body,(err,data)=>{
    //     if(err){
    //        return res.send({
    //            code:500,
    //            message:'服务器错误'
    //        })
    //     }
    //     res.send({
    //         code:200,
    //         message:'修改成功'
    //     })
    // })
}
exports.deleteTopic=(req,res)=>{
    const topicID=req.params.topicID;
    m_topic.delete(topicID,(err,data)=>{
        if(err){
            return res.send({
                code:500,
                message:err.message
            })
        }
        // res.redirect('/')
        res.send({
            code:200,
            message:'删除成功'
        })
    })
}
// 编辑页面的提交请求
exports.handleEditTopic=(req,res)=>{
    const body=req.body;
    const topicID=req.params.topicID;
    m_topic.updateTopicByID(topicID,body,(err,data)=>{
            if(err){
               return res.send({
                   code:500,
                   err:'服务器错误'
               })
            }
            res.send({
                code:200,
                message:'修改成功'
            })
        })
        
    
}