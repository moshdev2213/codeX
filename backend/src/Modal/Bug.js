import mongoose from "mongoose";

const bugSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        bug_req: {
            type: String,
            required: true
        },
        bug_res_html: {
            type: String
        },
        bug_res_plain: {
            type: String
        },
        bug_ref_html: {
            type: String
        },
        bug_ref_plain: {
            type: String
        },
        bug_lng_sin_html: {
            type: String
        },
        bug_lng_tamil_html: {
            type: String
        },
        favourite: {
            type: Boolean,
            default:false
        },
        starred: {
            type: Boolean,
            default:false
        }

    },
    {
        versionKey: '__v',
        timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
    }
)
const Bug = mongoose.model('Bug', bugSchema)
export default Bug