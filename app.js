import express from 'express';
import path  from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';
const baseUrl = 'http://localhost:5000'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
const app = express();
const port = 5000;

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        const uploadPath = path.join(__dirname,'uploads');
        if(!fs.existsSync(uploadPath)){
            fs.mkdirSync(uploadPath);
        }
        cb(null,uploadPath);
    },
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    }
})


const upload = multer({ storage });
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded.' });
    }
  
    const filePath = `${baseUrl}/uploads/${req.file.filename}`;
    res.status(200).send({ message: 'File uploaded successfully', path: filePath });
  });


app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})