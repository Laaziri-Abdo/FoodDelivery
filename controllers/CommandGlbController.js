const Command = require("../models/Command_global")
const jwt = require("jsonwebtoken");


const createCommand = async (req,res) => {
    try {
        
        let repas = []
        req.body.repas.forEach(meal => {
            repas.push(meal.id)
        });

        // const accessToken = req.headers.authorization
        // const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
        // console.log(payload.id)
        
        const order = await Command.create({
            status: req.body.status,
            total_price: req.body.total_price,
            total_quantity: req.body.total_quantity,
           taken: req.body.taken
        })

        console.log(req.body);

        res.status(200).send(order)

    } catch (err) {

        res.status(400).send(err)
        
    }
}

// exports.remove = async(req, res) => {

//     try {
        
//         const order = await Command.findById(req.params.id)
//         await order.remove()

//         res.send('order Deleted :) !')

//     } catch (error) {
        
//         res.status(400).send(error)

//     }
// }


module.exports = {
    createCommand
}