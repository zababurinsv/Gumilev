import app from './index.mjs'
let port = 7777
app.listen(port ,() =>{
    console.log('pid: ', process.pid)
    console.log('listening on http://localhost:'+ port);
});
