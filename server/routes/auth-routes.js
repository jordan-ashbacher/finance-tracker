const router = require('express').Router()


router.get('/login', (req, res) => {

})

router.get('/logout', (req, res) => {
    res.send('logging out')
})

//auth with google
router.get('/google', (req, res) => {
    res.send('logging in with Google')
})

module.exports = router