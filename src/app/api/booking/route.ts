import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import {connectToMongo} from "@/app/libs/db";
import BookingModel from "@/app/models/booking.model";

export async function POST(request: NextRequest) {
    try {
        const { worker, day, slot, service } = await request.json()
        console.log("Data to create:", { worker, day, slot, service });

        await connectToMongo()
        await BookingModel.create({ worker, day, slot, service })
        await mongoose.connection.close()
        return NextResponse.json({ message: "Booked" }, { status: 201 })
    } catch (err) {
        console.error(err)
        await mongoose.connection.close()
        return NextResponse.json({ message: "Failed to book " }, { status: 400 })
    }
}
