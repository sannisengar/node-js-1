const h = require('http')
// console.log(h)

h.createServer((req, res) => {
    res.write('welcome sanni singh 132462362')
    res.end()
}).listen(3000, () => console.log('server start localhost:3000'))