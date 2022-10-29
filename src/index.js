const express = require('express');

const app = express();

app.use(express.json());

console.log('hello world');

app.post("/generator", (req, res) => {
    const {
        palavra,
        numero,
        qtdCharacters
    } = req.body;

    var word = palavra;

    // Gerando Characters especial aleatório
    var specialCharacters = ['#', '!', '@', '&', '/', '?', '$'];
    const mapArrCharacters = Math.floor(Math.random() * specialCharacters.length);
    const getCharacters = (specialCharacters[mapArrCharacters]);

    // Separando palavra
    const splitWord = word.split(" ");
    const arrSlitedWord = [splitWord[0], splitWord[1]];

    //Adicionando letra maiúscula
    if (splitWord[1] === undefined) {
        splitWord[1] = word.substr(0, 1)
        var upperWord = splitWord[1].toUpperCase()
        splitWord[1] = upperWord
    } else {
        splitWord[1] = arrSlitedWord[1].substr(0, 1)
        var upperWord2 = splitWord[1].toUpperCase()
        splitWord[1] = upperWord2
    }

    var passDefault = getCharacters + splitWord[1] + numero;

    if (passDefault.length < qtdCharacters) {
        var pass = passDefault + splitWord[0]
        if (pass.length > qtdCharacters) {
            var format = pass.substr(0, qtdCharacters)
            pass = format
            console.log(format)
        }
        return res.status(201).send("Sua senha: " + pass);
    } else {
        return res.status(201).send("Sua senha: " + passDefault);
    }
});

app.listen(3030);