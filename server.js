const app = require('./app');
const port = 3001;

app.listen(port, () => {
    console.log(`Server draait op http://localhost:${port}`);
});
