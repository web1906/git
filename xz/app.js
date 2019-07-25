const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
var app=express();
app.listen(8080);

//使用body-parser中间件，将post其你去的数据解析为对象
app.use(bodyParser.urlencoded({
  extended:false
}));
//托管静态资源到public目录
app.use(express.static('./public'));
//使用路由器，挂载到/user下   /user/reg
app.use( '/user',userRouter );
