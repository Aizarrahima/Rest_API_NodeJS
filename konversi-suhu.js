const express = require('express')
const app = express()

const port = 8000
app.listen(port, () => console.log(`App running ${port}`))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send({
        message: "Berhasil Convert Suhu",
        result: {
            description: "Untuk menampilkan result",
        }
    })
})


// convert celcius
app.get("/convert/celcius/:suhu", (req, res) => {
    const c = req.params.suhu
    const reamur = 4 / 5 * parseInt(c)
    const fahrenheit = (9 / 5 * parseInt(c)) + 32
    const kelvin = parseInt(c) + 273
    res.send({
        celcius : c,
        result: {
            reamur,
            fahrenheit,
            kelvin,
        }
    })
})

// convert reamur
app.get("/convert/reamur/:suhu", (req, res) => {
    const r = req.params.suhu
    const celcius = 5 / 4 * parseInt(r)
    const fahrenheit = (9 / 4 * parseInt(r)) + 32
    const kelvin =(5 /4 * parseInt(r)) + 273
    res.send({
        reamur: r,
        result: {
            celcius,
            fahrenheit,
            kelvin,
        }
    })
})

// convert kelvin
app.get("/convert/kelvin/:suhu", (req, res) => {
    const k = req.params.suhu
    const celcius = parseInt(k) - 273.15
    const fahrenheit = (parseInt(k) * 9 / 5) - 459.67 
    const reamur = 4 / 5 * (parseInt(k) - 273)
    res.send({
        kelvin: k,
        result: {
            celcius,
            fahrenheit,
            reamur,
        }
    })
})

// convert fahrenheit
app.get("/convert/fahrenheit/:suhu", (req, res) => {
    const f = req.params.suhu
    const celcius = (parseInt(f) - 32) * 5 / 9
    const reamur = 4 / 9 * (parseInt(f) - 32)
    const kelvin = (parseInt(f) + 459.67) * 5 / 9
    res.send({
        fahrenheit: f,
        result: {
            celcius,
            reamur,
            kelvin,
        }
    })
})