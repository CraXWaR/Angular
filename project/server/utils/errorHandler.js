function errHandler(err, res) {
    if (err.status === 333) {
        res.status(333)
            .json({ message: 'ErrorHandler: not allowed!' })
    } else {
        console.log(err.stack);
        res.status(500)
            .json({ message: 'ErrorHandler: Something went wrong!', err })
    }
}

module.exports = errHandler