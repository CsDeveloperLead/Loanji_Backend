import { Router } from "express";
import { addAdmin, addBlog, deleteAllBlogs, deleteSingleBlog, getBlogs, getSingleBlog, login } from "../controllers/admin.controller.js";
import { upload } from '../middleware/multer.middleware.js'

const router = Router()

router.route("/add-admin").post(addAdmin)
router.route("/admin-login").post(login)
router.route("/create-blog").post(upload.fields([{ name: "image", maxCount: 1 },{ name: "image1", maxCount: 1 },{ name: "image2", maxCount: 1 }]), addBlog)
router.route("/get-blogs").get(getBlogs)
router.route("/delete-blogs").delete(deleteAllBlogs)
router.route("/get-single-blog").get(getSingleBlog)
router.route("/delete-single-blog").delete(deleteSingleBlog)



export default router