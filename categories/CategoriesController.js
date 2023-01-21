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
        res.redirect("/admin/categories/new")
    }

});

router.get('/admin/categories', (req,res) =>{
    Category.findAll().then(categories => {
       res.render("admin/categories/index",{categories:categories})  
    })
   
})

router.post("/categories/delete", (req, res) =>{
    var id = req.body.id
    if(id !=undefined){
        if(!isNaN(id)){

            Category.destroy({
                where: {
                    id:id
                }
            }).then(()=>{
                res.redirect("/admin/categories")
            }).catch((err)=>{
                res.send("Erro ao deletar ", err)
            })
            
        }else {// não for um número
            res.redirect("/admin/categories")
        }
    }else {// NULL
        res.redirect("/admin/categories")
    }
})

router.get("/adimn/categories/edit/:id", (req,res)=>{
    var id = req.params.id
    Category.findPK(id).then(categoria =>{
        if(categoria !=undefined) {

        }else{
            res.redirect("/admin/categories")
        }
    }).catch(err =>{
        res.redirect("/admin/categories")
    })
})


module.exports = router