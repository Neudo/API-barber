import { Schema, model, models } from "mongoose";
const bookingSchema = new Schema({
        worker: String,
        day: String,
        slot: String,
    },
    {
        timestamps: true
    }
)
const BookingModel = models.slots || model("slots", bookingSchema)
export default BookingModel
