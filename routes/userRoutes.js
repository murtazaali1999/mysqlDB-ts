const router = require("express").Router();
const dbConnection = require("../database/config");
const User = require("../models/userModel");


//returns all users
router.get("/get-user", (req, res) => {
    User.findAll().then((user) => {
        res.send(user);
    }).catch((err) => {
        console.log(err);
    })
})

router.post("/create-user", async (req, res) => {
    const { id, first_name, last_name, email, gender, address, phone_number } = req.body;

    const user = await User.create({ id, first_name, last_name, email, gender, address, phone_number })
        .catch((err) => {
            console.log(err);
        })
    console.log(user);
})

router.post("/find-user", async (req, res) => {
    const { id } = req.body;

    const user = await User.findByPk(id).catch((err) => {
        console.log(err);
    })

    res.status(200).json({ user })
})

module.exports = router;