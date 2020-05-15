import userSchema from "../DB/models/User";
import mongoose from "mongoose";

const userModel = mongoose.model("Users", userSchema);
