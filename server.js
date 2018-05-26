const express = require('express')
const app = express()

function getMonthString(month) {
    switch (month) {
        case 0:
            return 'January'
        case 1:
            return 'February'
        case 2:
            return 'March'
        case 3:
            return 'April'
        case 4:
            return 'May'
        case 5:
            return 'June'
        case 6:
            return 'July'
        case 7:
            return 'August'
        case 8:
            return 'September'
        case 9:
            return 'October'
        case 10:
            return 'November'
        case 11:
            return 'December'
        default:
            return null
    }
}

app.get('/:date', (req, res) => {
    let unix = null, natural = null
    if (!Number.isNaN(Number(req.params.date))) {
        unix = Number(req.params.date)
        const date = new Date(unix)
        natural = `${getMonthString(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`
    } else {
        natural = req.params.date.split('%20').join(' ')
        unix = new Date(natural).getTime()
    }
    res.status(200).json({
        unix,
        natural
    })
})

app.listen(process.env.PORT || 8080, () => console.log(`server listening on ${process.env.PORT || 8080}`))