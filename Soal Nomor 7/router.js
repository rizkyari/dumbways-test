const router = require('express').Router()
const conn = require('./conn')

//ADD NEW Category
router.post('/addcat',async (req,res)=>{
    var sql = `INSERT INTO categories SET ?;`
    var sql2 = `SELECT * FROM categories`
    var data = req.body

    conn.query(sql, data, (err, result) => {
        if(err) return res.send(err.sqlMessage) // Error pada post data

        conn.query(sql2, (err, result) => {
            if(err) return res.send(err) // Error pada select data

            res.send(result)
        })
    })
})

// Get ALL
router.get('/getcat', (req, res) => {
    const sqlQuery = `SELECT * FROM categories;`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        let catresult = result;
        console.log(result)
    })
})

router.get('/getcat', (req, res) => {
    const sqlQuery = `SELECT * FROM product;`

    conn.query(sqlQuery, (err, result) => {
        if(err) {
            return res.send(err.sqlMessage)
        }

        res.send(result)
        console.log(result)
    })
})

module.exports = router