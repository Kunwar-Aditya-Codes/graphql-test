export const resolvers = {
  Query: {
    getUsers: async (_, args) => {
      const data = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
      ).json();

      console.log(data);

      return data;
    },
  },
};
