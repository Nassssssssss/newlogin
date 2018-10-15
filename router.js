const express=require('express');
const router=express.Router()
const c_user=require('./controllers/c_user')
const c_topic=require('./controllers/c_topic')

router.get('/signin',c_user.showSignin)
router.post('/signin',c_user.handleSignin)
router.get('/',c_topic.showTopic)

module.exports=router