import mongoose from "mongoose"

export const connectDB = async ()=> {
    await mongoose.connect('mongodb+srv://olayemiomolisa_db_user:htcz331gUhh972Rc@cluster0.5gwmhty.mongodb.net/music-app').then(()=>console.log("DB Connected"));

}