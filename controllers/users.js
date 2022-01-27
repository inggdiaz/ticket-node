const {request, response} = require('express')

const GetUsers = async (req = request, resp = response) => {

    resp.json({
        'ok': 'true'
    })
}

module.exports = {GetUsers}
