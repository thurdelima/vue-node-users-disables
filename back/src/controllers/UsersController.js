const User = require("../models/User");

class UsersController {

    async index(req, res) {

        

        const users = await User.paginate({},{
            page: req.params.page || 1,
            limit: 10,
            // offset: 20
            sort: "-createdAt"
          });
      
        return res.json(users);
    }

    async searchUser(req, res) {

      const { user } = req.body;


        if(user == '') {

            const users = await User.paginate({},{
              page: 1,
              limit: 10,
              // offset: 20
              sort: "-createdAt"
            });
        
          return res.json(users);
        }

        const users = await User.paginate( {name: user} ,{
            page:  1,
            limit: 20,
                
            
          });
      
        return res.json(users);
    }
}

module.exports = new UsersController();