const index = async (Serie, req, res) => {
    const series = await Serie.find({})
    res.render('series/index', { series })
}

const find = async (Serie, req, res) => {
    const { id } = req.params
    try {
        const serie = await Serie.findById(id)
        res.render('series/serie', { serie })
    } catch (error) {
        res.redirect('/series')
    }
}

const create = async (req, res) => {
    res.render('series/create')
}

const store = async (Serie, req, res) => {
    const { title, description } = req.body
    try {
        const serie = await new Serie({
            title,
            description
        })

        await serie.save()
        res.redirect('/series')
    } catch (error) {
        res.redirect('/series')
    }
}

const edit = async (Serie, req, res) => {
    const { id } = req.params
    try {
        Serie.update({})
        res.render('series/edit')
    } catch (error) {
        res.send(error)
    }
}

const destroy = async (Serie, req, res) => {
    const { id } = req.params
    try {
        const serie = await Serie.deleteOne({ id })
        console.log(serie)
        res.redirect('/series')
    } catch (error) {
        res.redirect('/series')
    }
}

module.exports = {
    index,
    find,
    create,
    store,
    edit,
    destroy
}