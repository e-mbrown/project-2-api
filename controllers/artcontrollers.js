const Art = require('../models/artmodel');
const illust = require('../models/illustrationmodel');
const comics = require('../models/comicsmodel');
const sketch = require('../models/sketchmodel');
//const { all } = require('../routes/art');

const index = async (req,res) =>{
    try{
        const allArt = await Art.find({});
        res.status(200).json(allArt);
    }catch(error){
        res.status(400).send(error);
    }
};

const indexC = async (req,res) =>{
    try{
        const allcomics = await comics.find({});
        res.status(200).json(allcomics);
    }catch(error){
        res.status(400).send(error);
    }
};

const indexI = async (req,res) =>{
    try{
        const allArt = await illust.find({});
        res.status(200).json(allArt);
    }catch(error){
        res.status(400).send(error);
    }
};

const indexS = async (req,res) =>{
    try{
        const allArt = await sketch.find({
        });
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

///Can not change all data
// const update = async (req,res) =>{
//     try{
//         const updateArt = await Art.findByIdAndUpdate(req.params.id, req.body,{
//             new: true,
//         });
//         res.status(200).json(updateArt);
//     }catch(error){
//         res.status(400).send(error);
//     }
// };

const updateC = async (req,res) =>{
    try{
        console.log(req.params.id, req.body)
        const updateArt = await comics.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        console.log(updateArt)
        res.status(200).json(updateArt);
    }catch(error){
        res.status(400).send(error);
    }
};

const updateI = async (req,res) =>{
    try{
        const updateArt = await illust.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        res.status(200).json(updateArt);
    }catch(error){
        res.status(400).send(error);
    }
};

const updateS = async (req,res) =>{
    try{
        const updateArt = await sketch.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
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
    indexC,
    indexI,
    indexS,
    create,
    updateS,
    updateI,
    updateC,
    destroy
}