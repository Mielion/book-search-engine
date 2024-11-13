const { User } = require("../models");
const bookSchema = require("../models/Book.js");
const {signToken} = require("../utils/auth.js")

const resolvers = {
  Query: {
    me: async (parent, _args, context) => {
        if(context.user) {
          return User.findOne({_id: context.user.data._id}).populate('savedBooks')
        }
      },

  },
  Mutation: {

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

    saveBook: async (parent, args, context) => {
      // console.log(args.book)
      if(context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            context.user.data._id,
            {
              $addToSet: { savedBooks: args.book },
            },
            { new: true, runValidators: true }
          );

          if(!updatedUser) {
            throw new Error('User not found');
          }

          return updatedUser;
        } catch (error) {
          console.error(error)
        }
      }
    },

    removeBook: async (parent, args, context) => {
      if(context.user) {
        try {
          const updatedUser = await User.findByIdAndUpdate(
            context.user.data._id,
            {
              $pull: { savedBooks: args.bookId },
            },
            { new: true }
          );

          if(!updatedUser) {
            throw new Error('User not found');
          }

          return updatedUser;
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
};

module.exports = resolvers;