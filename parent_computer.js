const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/compute') {
    res.write("This is the start of child process implementation\n")
    const compute = fork('child_computer.js');
    compute.send('start');
    compute.on('message', sum => {
      res.end(`Sum is ${sum}`);
    });
    res.write("This is the end of child process implementation\n")
  } else {
    res.end('Okay')
  }
});

server.listen(3000,()=>{
    console.log("Server is listening on 3000 PORT")
});