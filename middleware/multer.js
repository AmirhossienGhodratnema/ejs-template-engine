const multer = require('multer');
const path = require('path');
const fs = require('fs');


// Options storage in multer ( destination address & Change filename Personalization )
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const d = new Date();    // Get time golobal.
        const day = d.getDay();    // Get day.
        const month = d.getMonth();     // Get month.
        const year = d.getFullYear();    // Get year.

        const CreateDir = `./public/upload/${year}/${month}/${day}`;    // Create directory.

        fs.mkdirSync(CreateDir, { recursive: true });
        cb(null, CreateDir)    // Addres save file.
    },

    filename: (req, file, cb) => {
        const date = Date.now();    // Get date milisecend.
        const splitName = file.originalname.split('.')[0];    // Get basename.
        const ext = path.extname(file.originalname);    // Get ext name for format file.

        const extList = ['.png', '.jpeg', '.jpg', '.webp'];
        if (extList.includes(ext)) {
            const fileName = `${splitName}-${date}${ext}`;    // My personalization file name.
            cb(null, fileName);

        } else {
            cb(new Error('Only type : .png - .jpeg - .jpg - .webp'))    // Error type
        };
    }
});


const _7MB = 7 * 1000 * 1000;    // 7MB limit to upload file size.

// Upload file setting.
const uploadFile = multer({
    storage,
    limits: {
        fileSize: _7MB
    },
});


module.exports = {
    uploadFile,
}