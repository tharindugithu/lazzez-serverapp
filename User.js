import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    name: { 
        type: String,
        default: null
    },
    created_at: { 
        type: Date, 
        default: Date.now
    },
    updated_at: { 
        type: Date, 
        default: Date.now
    },
});

// userSchema.pre('save', async function(next) {
//     if (!this.isModified('password')) {
//         return next();
//     }
//     try {
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(this.password, salt);
//         this.password = hashedPassword;
//         next();
//     } catch (error) {
//         return next(error);
//     }
// });


const User = mongoose.model('User', userSchema);
export default User;