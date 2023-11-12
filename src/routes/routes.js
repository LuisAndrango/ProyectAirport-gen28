import { Router } from "express";

//aqui traigo el endpoint de passenger
import { router as passengerRouter} from '../passengers/passengers.router.js'
import { router as cityRouter  } from "../city/city.route.js";
export const router = Router()

router.use('/passengers', passengerRouter)
router.use('/city', cityRouter)