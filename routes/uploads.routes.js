const { Router } = require("express");
const { uploadFile } = require("../controllers/uploads.controller");


const router = Router();
        router.post("/",[],uploadFile);

module.exports = {router}