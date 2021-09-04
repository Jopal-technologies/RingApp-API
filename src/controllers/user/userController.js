const { User } = require('../../models/user/user');


const userController = {
    getAllUsers: async() => await User.findAll(),
    getUserById: async id => await User.findByPk(id),
    postUser: async(user) => {
        const a = User.build({
            Name: user.name,
            Surname: user.surname,
            Email: user.email,
            Country: user.country,
            BirthDate: user.birthdate,
            ConfigId: user.configId,
        })
        a.save();
    },
    putUser: async(user) =>{
        User.update(
            {
                Name: user.name,
                Surname: user.surname,
                Email: user.email,
                Country: user.country,
                Birthdate: user.birthdate,
                ConfigId: user.configId,
            },
            {where: user.id}
          )
    },
    deleteUser: async id => await User.deleteById(id),
};
exports.userController = userController;
