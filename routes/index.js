const {Router} = require('express');
const indexRouter = Router();

const multer = require('multer');


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        let filetype = '';
        if(file.mimetype === 'image/gif') {
            filetype = 'gif';
        }
        if(file.mimetype === 'image/png') {
            filetype = 'png';
        }
        if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg') {
            filetype = 'jpg';
        }
        cb(null, 'image-' + Date.now() + '.' + filetype);
        }
    });

    let upload = multer({storage: storage});

indexRouter.post('/upload',upload.single('file'),function(req, res, next) {
    console.log(req.file);
    if(!req.file) {
        res.status(500);
        return next(err);
    }
    res.json({ fileUrl: 'http://192.168.0.7:3000/public/images/' + req.file.filename });
    })




    module.exports = indexRouter;