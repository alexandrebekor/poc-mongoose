const index = async (req, res) => {
    res.render('index')
}

const about = async (req, res) => {
    res.render('about')
}

module.exports = {
    index,
    about
}