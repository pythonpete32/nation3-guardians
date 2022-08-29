import { gql } from 'apollo-server'

// mongodb+srv://abuusama:KBFnyf6qwv7nwtweu@cluster0.r1lalww.mongodb.net/?retryWrites=true&w=majority

const typeDefs = gql`
  type Guardian {
    _id: ID!
    name: String!
    address: String!
    ens: String
  }

  type Votes {
    _id: ID!
    vote: [Vote]
  }

  type Vote {
    _id: ID!
    guardian: Guardian
    messgae: String
  }

  input Agreement {
    _id: ID!
    agreementId: String!
    termsHash: String!
    metaData: String!
  }

  type Dispute{
    _id: ID!
    agreement: Agreement!
    guardians: [Guardian]!
    createdAt: String!
    updatedAt: String!
    yayVotes: [Votes]
    nayVotes: [Votes]
    finalised: Boolean!
    outcome: Boolean
  }

  type InputDispute {
    _id: ID!
    agreement: Agreement!
  }


  input InputGuardian {
    name: String!
    address: String!
    ens: String
  }

  input UpdateGuardian {
    address: String
    ens: String
  }

  type Query {
    findGuardianById(_id: ID!): Guardian
    findGuardianByName(name: String!): Guardian
    findGuardianByAddress(address: String!): Guardian
    findGuardianByENS(ens: String!): Guardian
    guardianCount: Int!
    allGuardians: [Guardian!]!

    findDisputeById(_id: ID!): Dispute
    findDisputeByAgreementId(agreementId: String!): Dispute
    allDisputes: [Dispute!]!
  }

  type Mutation {
    addGuardian(inputGuardian: InputGuardian!): Guardian
    updateGuardian(updateGuardian: UpdateGuardian!): Guardian
    removeGuardian(ID: ID!): Guardian

    addDispute(agreement: Agreement): Dispute
    voteYay(_id: ID!, vote: Vote!): Vote
    voteNay(_id: ID!, vote: Vote!): Vote
    finaliseDispute(_id: ID!, outcome:Boolean!): Dispute
  }
`

export default typeDefs
