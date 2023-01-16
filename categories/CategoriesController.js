const express = require("express")
const router = express.Router()
const Category = require("./Category")
const slugify = require("slugify")

router.get("/admin/categories/new", (req,res)=>{
    res.render("admin/categories/new")
})

router.post("/categories/save", (req, res) =>{
    var title = req.body.title
    if(title !=undefined) {
        Category.create({
            title: title,
            slug: slugify(title)
            //otimiza a instirng para url para que seja utilizado diretamente na rota
        }).then(()=>{
            res.redirect("/")
        })
    } else {
        res.redirect("/admin/categorias/new")
    }

});
module.exports = router