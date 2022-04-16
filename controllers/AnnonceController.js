const Annonce = require('../models/Annonce')


//mrigl 
const index=(req, res, next) => 
{
    Annonce.find()
    .then((annonce) =>{res.json({annonce})})
    .catch(error=>{res.json({error})})      
}


//mrigl 
const show = (req, res, next) => {
    let AnnonceID = req.body.AnnonceID
    Annonce.findById(AnnonceID)
    .then(reponse => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


//mrigl 
const stores = (req, res, next) => {
    
        let annonce= new Annonce({
            titre:req.body.titre,
            marque:req.body.marque,
            prix:req.body.prix,
            date:req.body.date,
            gouvernorat:req.body.gouvernorat,
            delegation:req.body.delegation,
            description:req.body.description,
            image:req.body.image,

        })


    /* if (req.file){
            annonce.image=req.file.path
        }*/
       
        annonce.save()
        .then(response => {
            res.json({
                message:'Annonce Added Sucessfull!'
            })
        })
    .catch(error => {
        res.json({
            message:'an error Occured here!'
        })
    })
    }
    



//mrigll
const update =(req, res, next)=>
{
    let AnnonceID=req.body.AnnonceID
    let updateData={
        titre:req.body.titre,
        marque:req.body.marque,
        prix:req.body.prix,
        date:req.body.date,
        gouvernorat:req.body.gouvernorat,
        delegation:req.body.delegation,
        description:req.body.description,       
        image:req.body.image,
        
    }
    Annonce.findByIdAndUpdate(AnnonceID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Annonce updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//mrigll
const destory=(req,res,next) =>{
    let AnnonceID= req.body.AnnonceID
    Annonce.findByIdAndRemove(AnnonceID)
    .then(()=>{
        req.json({
            message: 'Delete sucesse!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,stores,update,destory
}
