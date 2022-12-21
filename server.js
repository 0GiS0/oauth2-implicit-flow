//Modules
import express from 'express';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/give/me/the/access/token', (req, res) => {
    res.render('access-token');
});

app.listen(8000);