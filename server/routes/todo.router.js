const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get( '/', (req, res )=>{
    console.log( '/api/todo GET hit' );
    res.send( 'meow' );
})
// POST

// PUT

// DELETE

module.exports = router;
