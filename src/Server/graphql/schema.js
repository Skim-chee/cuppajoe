var graphql = require('graphql');

// Creates cafe schema for graphQL
var CafeType = new graphql.GraphQLObjectType({
	name: 'cafeList',
	fields: function() {
		return {
			name: { type: graphql.GraphQLString },
			location: { type: graphql.GraphQLString },
			url: { type: graphql.GraphQLString }
		};
	}
});
