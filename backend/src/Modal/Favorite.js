// favorite.js
import mongoose from "mongoose";
import Bug from "./Bug";
const favoriteSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        favorite_list: [
            {
                bug: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: Bug
                }
            }
        ]
    },
    {
        versionKey: false,
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
);

const Favorite = mongoose.model('Favorite', favoriteSchema);

export default Favorite;
