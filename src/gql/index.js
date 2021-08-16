const { ApolloServer, gql } = require("apollo-server-express");
// const persons = require("../mock/persons");

// const typeDefs = gql`
//   type Person {
//     id: Int
//     name: String
//     gender: String
//     homeworld: String
//   }
//   type Query {
//     allPeople: [Person]
//     person(id: Int!): Person
//   }
// `;

// const resolvers = {
//   Query: {
//     allPeople: () => {
//       return persons;
//     },
//     person: (root, { id }) => {
//       return persons.find((person) => {
//         return person.id == id;
//       });
//     },
//   },
// };
const attackers = require('../mock/attackers')

const typeDefs = gql`
  type Attacker {
    alert_type_map_json: String
    attack_type_map_json: String
    check_date: String
    check_total_cnt: Int
    earliest_time: String
    id: Int
    ip: String
    latest_time: String
    result_attempt_cnt: Int
    result_failed_cnt: Int
    result_fall_cnt: Int
    result_success_cnt: Int
    victim_map_json: String
  }
  type Query {
    attackerList: [Attacker]
    attacker(id: Int!): Attacker
  }
`

const resolvers = {
  Query: {
    attackerList: () => attackers,
    attacker: (root, { id }) => attackers.find(attacker => attacker.id == id)
  }
}

module.exports = new ApolloServer({ typeDefs, resolvers });

