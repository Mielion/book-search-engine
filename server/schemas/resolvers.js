const { User } = require("../models");
const {signToken} = require("../utils/auth.js")

const resolvers = {
  Query: {
    me: async (parent, _args, context) => {
        if(context.user) {
          return User.findOne({_id: context.user.data._id}).populate('savedBooks')
        }
      },
    // tech: async () => {
    //   return Tech.find({});
    // },
    // matchups: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Matchup.find(params);
    // },
  },
  Mutation: {
    // createMatchup: async (parent, args) => {
    //   const matchup = await Matchup.create(args);
    //   return matchup;
    // },
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },

    login: async (parent, args) => {
      console.log(args, "args in login");
      const user = await User.findOne({email: args.email});
      if (!user) {
        throw new Error("Can't find this user")
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        throw new Error("Wrong password")
      }

      const token = signToken(user);
      // res.json({ token, user });
      return {token, user};
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      if (!user) {
        throw new Error("Can't find this user")
      }
      const token = signToken(user);
      // res.json({ token, user });
      return {token, user};
    },
  },
};

module.exports = resolvers;
