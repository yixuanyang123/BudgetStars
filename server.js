const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/login', (req,res) =>{
    const{username, password} = req.body;
    if (users[username] && users[username] === password){
        res.status(200).json({message: 'Login Successful!'});
    }
    else {
        res.status(401).json({message: 'Invalid username or password.'})
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost: ${PORT}`)
})