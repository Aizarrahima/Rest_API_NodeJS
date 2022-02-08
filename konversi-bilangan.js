const express = require('express')
const app = express()

const port = 8000
app.listen(port, () => console.log(`App running ${port}`))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// convert decimal
app.post("/decimal", (req, res) => {
    let bilangan = Number(req.body.bilangan)

    let result = {
        biner: bilangan.toString(2),
        octal: bilangan.toString(8),
        hexadecimal: bilangan.toString(16)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            decimal: bilangan,
            result
        }
    })
})

// convert biner
app.post("/biner", (req, res) => {
    let bilangan = Number(req.body.bilangan)
    let desimal = parseInt(bilangan, 2)

    let result = {
        decimal: desimal,
        octal: desimal.toString(8),
        hexadecimal: desimal.toString(16)
    }

    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            biner: bilangan,
            result
        }
    })
})

// convert octal
app.post("/octal", (req, res) => {
    let bilangan = Number(req.body.bilangan)
    let desimal = parseInt(bilangan, 8)

    let result = {
        decimal: desimal,
        biner: desimal.toString(2),
        hexadecimal: desimal.toString(16)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            octal: bilangan,
            result
        }
    })
})

// convert hexadecimal
app.post("/hexadecimal", (req, res) => {
    let bilangan = req.body.bilangan
    let desimal = parseInt(bilangan, 16)

    let result = {
        decimal: desimal,
        biner: desimal.toString(2),
        octal: desimal.toString(8)
    }
    res.send({
        message: "Berhasil melakukan konversi bilangan",
        data: {
            hexadecimal: bilangan,
            result
        }
    })
})
