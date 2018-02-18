const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;


const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    emails: { type: GraphQLString }
  }
});

module.exports = UserType;