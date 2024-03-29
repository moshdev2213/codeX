import mongoose from "mongoose";
import Bug from "./Bug";

const starredSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        starred_list: [
            {
                bug: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: Bug
                }
            }
        ]
    },
    {
        versionKey: '__v',
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)
const Starred = mongoose.model('Starred', starredSchema)
export default Starred