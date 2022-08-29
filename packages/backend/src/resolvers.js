import Guardians from '../models/guardians.js';


// (parent, args, context, info)

const resolvers = {
    Query: {
        async findGuardianById(_, args) {
            console.log(args)
            return await Guardians.findById(args.ID);
        },
        async findGuardianByName(_, args) {
            const name = args.name;
            return await Guardians.findOne({ name });
        },
        async findGuardianByAddress(_, { address }) {
            return await Guardians.findOne({ address });
        },
        async findGuardianByENS(_, { ens }) {
            return await Guardians.findOne({ ens });
        },
        async guardianCount() {
            return await Guardians.countDocuments();
        },
        async allGuardians() {
            return await Guardians.find();
        }
    },
    Mutation: {
        async addGuardian(_, { inputGuardian: { name, address, ens } }) {
            const guardian = new Guardians({ name, address, ens });
            const result = await guardian.save();
            return {
                code: '200',
                success: true,
                message: 'Guardian added successfully',
                guardian: {
                    id: result.id,
                    ...result._doc
                }
            }
        }
    }
}
// Mutation: {


// }
//             async updateGuardian(_, { updateGuardian: { address, ens } }) {
//         const guardian = await Guardians.findOne({ address });
//         guardian.address = address;
//         guardian.ens = ens;
//         await guardian.save();
//         return {
//             code: '200',
//             success: true,
//             message: 'Guardian updated successfully',
//             guardian
//         },
//     },
//     async removeGuardian(_, { ID }) {
//         const guardian = await Guardians.findById(ID);
//         await guardian.remove();
//         return {
//             code: '200',
//             success: true,
//             message: 'Guardian removed successfully',
//             guardian
//         },
//     }
// }

export default resolvers;