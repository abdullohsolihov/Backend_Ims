import { AppError } from "./errorHandler.js"
import schema from "../utils/validation.js"


export default {
    staffCreate: (req, res, next) => {
        let { error } = schema.staffSchema.validate(req.body)
        if (error) {
            return next(new AppError(error.message,400))
        }
        next()
    }
}