import multer, {diskStorage, FileFilterCallback} from 'multer'


const storage = diskStorage({
    destination : (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename : (req, file, cb) => {
        const nombre = new Date().getTime().toString();
        const extension = file.originalname.split('.').pop();
        cb(null, `${nombre}.${extension}`);
    }
});

const filters = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const isImage = file.mimetype.startsWith('image/');
    cb(null, isImage);
};

export const upload = multer({
    storage
});