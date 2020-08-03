const Art = require('../models/artmodel');
//const { all } = require('../routes/art');

const index = async (req,res) =>{
    try{
        const allArt = await Art.find({});

        res.status(200).json(allArt);
    }catch(error){
        res.status(400).send(error);
    }
};

const create = async (req,res) =>{
    try{
        const newArt =await Art.create(req.body);
        res.status(200).json(newArt);

    }catch(error){
        res.status(400).send(error);
    }
};

const update = async (req,res) =>{
    try{
        const updateArt = await Art.findByIdAndUpdate(req.params.id, req.body,{
            new: true
        });
        res.status(200).json(updateArt);
    }catch(error){
        res.status(400).send(error);
    }
};

const destroy = async (req,res) =>{
    try{
        const destroyArt = await Art.findByIdAndDelete(req.params.id);
        res.status(200).json(destroyArt)
    }catch(error){
        res.status(400).send(error)
    }
};

module.exports={
    index,
    create,
    update,
    destroy
}