const Utilisateur = require('../models/Utilisateur')
const index=(req, res, next) => 
{
    Utilisateur.find()
    .then(response =>{
        res.json({
        response
         })
    })
 .catch(error=>{
     res.json({
        error
    })
 })   
}

const show = (req, res, next) => {
    let utilisateurID = req.body.utilisateurID
     Utilisateur.findById(utilisateurID)
    .then(reponse => {
        res.json({
            reponse
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


const store = (req, res, next) => {
    

    let utilisateur= new Utilisateur({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        phoneNumber:req.body.phoneNumber,
        birthDate:req.body.birthDate,
        image:req.body.image

    })

        
    console.log(utilisateur)

    utilisateur.save()
    .then(response => {
        res.json({
            message:'Utilisateur Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an utilisateur
const update =(req, res, next)=>
{
    let utilisateurID=req.body.utilisateurID
    let updateData={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword,
        phoneNumber:req.body.phoneNumber,
        birthDate:req.body.birthDate,
        image:req.body.image

    }
    Utilisateur.findByIdAndUpdate(utilisateurID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Utilisateur updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an utilisateur

const destory=(req,res,next) =>{
    let utilisateurID= req.body.utilisateurID
    Utilisateur.findByIdAndRemove(utilisateurID)
    .then(()=>{
        req.json({
            message: 'an error Occured!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,store,update,destory

}