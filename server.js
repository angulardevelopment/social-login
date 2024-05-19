const express = require('express');
const path = require('path');
function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const app = express();

// app.use(requireHTTPS);
app.use(express.static('./dist/social'));

// app.get('/*', function(req, res) {
//     res.sendFile('index.html', {root: 'dist/social/'}
//   );
//   });
app.get('*', function(req,res) {
    res.sendFile(path.resolve('dist/social/index.html'));
});
const port = 3000;

//   app.listen(process.env.PORT || 8080);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

// http://localhost:3000/
