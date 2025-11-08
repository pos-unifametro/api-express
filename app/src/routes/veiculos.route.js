import express from "express";
import controller from "../controller/veiculos.controller.js";

const router = express.Router();

router.use(express.json()); 

const URL_COLLECTION = '/api/veiculos';
const URL_ITEM = URL_COLLECTION + '/:id';

router.get(URL_COLLECTION, controller.findAll);
router.post(URL_COLLECTION, controller.save);

router.get(URL_ITEM, controller.find);
router.put(URL_ITEM, controller.update);
router.delete(URL_ITEM, controller.remove);


export default router;