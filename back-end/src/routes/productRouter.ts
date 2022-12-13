import {Router,Request,Response} from "express";
import {productController} from "../controllers/productController";

const router = Router();

router.get("/test",productController.routerTest);

export default router;