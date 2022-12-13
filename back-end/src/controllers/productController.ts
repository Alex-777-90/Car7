import {Request,Response} from "express";

export const productController = {
  
    routerTest: async (req:Request,res:Response) => {
      return res.status(200).send("API working!!!");
    },

}