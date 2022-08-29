import Mongoose from 'mongoose';
const { model, Schema } = Mongoose;

const guardiansSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    ens: {
        type: String,
        required: true,
        unique: true
    },
})

export default model('Guardians', guardiansSchema);