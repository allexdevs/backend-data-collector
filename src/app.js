const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});