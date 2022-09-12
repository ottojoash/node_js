const fs = require("fs");
const server = require("http").createServer();

server.on('request',(req, res)=>{
    //solution
    //fs.readFile("test-file.txt", (err,  data) => {
   //     if (err) console.log(err);
   //     res.end(data);
   // });
    //soulton 2 stream
   // const readable = fs.createReadStream("test-file.txt")
    //readable.on("data",chunk =>{
   //     res.write(chunk);
    //});
    //readable.on("end", ()=>{
    //    res.end();
    //});
    //readable.on("error" , err =>{
    //    console.log(err);
    //    res.statusCode = 500;
    //    res.end("file not found!");
    //});
    const readable = fs.createReadStream("test-file.txt");
    readable.pipe(res);
    
});

server.listen(8000, "127.0.0.1", () =>{
    console.log("listening..");

});
