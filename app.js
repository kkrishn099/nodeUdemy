const http = require("http");
const bodyParser = require("body-parser") // to get the data from body.console
const path = require('path')
//const rootDir = require('./util/path')

const express = require("express");
const expressHbs = require('express-handlebars')

//const adminData = require('./routes/admin')
const adminRoutes = require('./routes/admin')
const shopRoute = require('./routes/shop')
const errorController = require('./controllers/error')



const app = express();
//set Engine template for ejs 

app.set('view engine','ejs');
app.set('views' ,'views');

//set Engine for handlersbars

/* app.engine('hbs',expressHbs({
    extname: "hbs",
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts"}));
app.set("view engine","hbs"); */ // set templates engine for handlebars
//app.set("views","views");

//app.set("view engine" ,"pug");//to set the templete engine for pug
//app.set("views","views"); //if we set differnt views folder then we have to use it

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public'))) // to set the path of static content
app.use(adminRoutes);
//app.use(adminData.routes);
app.use(shopRoute);


app.use(errorController.get404);


app.listen(3000);
/* const fs = require("fs");

http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(req);
    if (url === "/") {
      res.write("<html>");
      res.write("<head>This is node js</head>");
      res.write(
        '<body><form action="/message" method = "POST"><input name="message" type ="text"><button type ="submit">send</button></input></form></body>'
      );
      res.write("</html>");
    }
    if (url === "/message") {
      const body = [];
      req.on("data", chunks => {
        console.log(chunks);
        body.push(chunks);
      });
 */
    //   req.on("end", () => {
    //     const bodyParser = Buffer.concat(body).toString();
    //     console.log(bodyParser);
    //     const message = bodyParser.split("=")[1];
//         fs.writeFileSync("message.txt", message);
//       });
//     }
//   })
//   .listen(3000);
