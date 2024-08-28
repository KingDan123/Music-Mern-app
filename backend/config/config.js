import dotenv from "dotenv";
dotenv.config();


const config = {
    port:5000, 
    mongodbURI:"mongodb://localhost:27017/songdb",
};

export default config