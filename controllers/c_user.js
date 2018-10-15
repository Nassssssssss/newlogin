const showSignin =(req,res)=>{
    res.render('signin.html')
}
const handleSignin=(req,res)=>{
    const body=req.body
    const m_user=require('../modle/m_user')
    m_user.checkEmail(body.email,function(err,data){
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            })
        }
        if(!data[0]){
            return res.send({
                code:1,
                message:'邮箱不存在'
            })
        }
        if(body.password!=data[0].password){
            return res.send({
                code:2,
                message:'密码错误'
            })
        }
        if(body.password==data[0].password){
            return res.send({
                code:200,
                message:'登录成功'
            })
        }
        // res.redirect('/')
    });
}
module.exports.showSignin=showSignin
module.exports.handleSignin=handleSignin