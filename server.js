const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'},
]

app.get('/users', function(req, res) {
    res.json({
        success: true,
        message: 'get users',
        users: mockUserData,
    })
})

app.get('/user/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'get one user',
        user: mockUserData[0],
    })
})

app.post('/login',function() {
    const username = req.body.username
    const password = req.body.password

    const mockUsername = 'John'
    const mockPassword = 'Doe'

    if (username === mockUsername && password === mockPassword) {
        res.json({
            sucess: true,
            message: 'password and username pass!',
            token: 'an encrypted token',
        })
    } else {
        res.json({
            success: false,
            message: 'password and username do not match',
        })
    }
})

app.listen(8000, function() {
    console.log('server is running');
})
