const express = require("express");
const app = express();
const http = require("http");
const bodyParser=require('body-parser');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
require('./src/config/database');
const user_routes=require('./src/user/user.route')
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use('/User',user_routes)

io.on("connection", (socket) => {
  console.log("a user connected");

  // setTimeout(() => {
  //   let data = {
  //     name: "Saurabh",
  //     message:'Hello Dost'
  //   }
  //   socket.emit("customEvent", data);
  //   socket.send('This event trigred from server');
  // },4000);

  // socket.on('clientEvent',(data)=>{
  //   console.log(data);
  // })


  socket.on('send_message',(data)=>{
    io.emit('receive_message',data);
  })


  socket.on('disconnect', () => {
    console.log('user disconnected');})
});

server.listen(3000, () => {
  console.log(`Server listening on port ${PORT}`);
});
