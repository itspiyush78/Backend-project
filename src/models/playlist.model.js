import mongoose, {Schema} from "mongoose";

const playlistSchema = new Schema({
    name: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true
    },
    videos:[ {
        type: Schema.types.ObjectId,
        ref: "Video"
    },
],
owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
},
}, {timestamps: true});



export const Playlist = mongoose.model('Playlist', playlistSchema);