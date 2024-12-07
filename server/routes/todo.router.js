const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get( '/', (req, res )=>{
    console.log( '/api/todo GET hit' );
    const queryString = `SELECT * from todo;`;
    pool.query( queryString ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})
// POST

// PUT
router.put( '/', ( req, res)=>{
    console.log( '//api/todo PUT hit:', req.body);
    const queryString = `UPDATE "todo" SET complete =NOT complete WHERE "id"=$1;`;
    const values = [ req.body.id ];
    pool.query( queryString, values ).then( ( results )=>{
        res.sendStatus( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})
// DELETE
router.delete( '/', ( req, res )=>{
    console.log( '/api/todo DELETE:', req.body, req.query );
    const queryString = `DELETE FROM "todo" WHERE id=$1;`;
    const values = [ req.query.id ];
    pool.query( queryString, values ).then( ( results )=>{
        res.send( 200 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 400 );
    })
})
module.exports = router;
