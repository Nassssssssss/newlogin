const m_user=require('../modle/m_user')

exports.showSignin =(req,res)=>{
    res.render('signin.html')
}
exports.handleSignin=(req,res)=>{
    const body=req.body
    console.log(body.email)
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
        req.session.user=data[0];
        
        if(body.password==data[0].password){
            return res.send({
                code:3,
                message:'登录成功'
            })
        }

        // res.redirect('/')
    });
}
exports.handleSignout=(req,res)=>{
    delete req.session.user
    res.redirect('/signin')
}
//渲染注册页面
exports.showSignup=(req,res)=>{
    res.render('signup.html')
}
exports.handleSignup=(req,res)=>{
    const body=req.body
    console.log(body.email)
    m_user.checkEmail(body.email,(err,data)=>{
        if(err){
            return res.send({
                code:500,
                message:'服务器错误'
            })
        }
        if(data[0]){
            return res.send({
                code:10,
                message:'账号已被注册'
            })
        }
        m_user.checkNickName(body.nickname,(err,data)=>{
            if(err){
                return res.send({
                    code:11,
                    message:'服务器错误'
                })
            }
            if(data[0]){
                return res.send({
                    code:12,
                    message:'昵称已被注册'
                })
            }
            m_user.addUser(body,(err,data)=>{
                if(err){
                    return res.send({
                        code:13,
                        message:'服务器错误'
                    })
                }
                res.send({
                    code:3,
                    message:'注册成功'
                })
            })
        })
        
    })
    
}


