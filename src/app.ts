const express = require("express");
const port = 8000;
const app = express();


//body-parser 기능 사용
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use("/",(req,res,next)=>{
  res.send("hello");
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  console.log(`${err.message}`);
  console.log('end');
  // render the error page
  // if (err.status === 401) res = await logout(req, res);
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
