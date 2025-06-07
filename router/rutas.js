const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/correas', (req, res) => {
    res.render('correas');
});

router.get('/relojes', (req, res)=>{
    res.render('relojes')
})
router.use((req, res) => {
    res.status(404).render('404');
});


module.exports = router;