const User = require("./models/User");
const faker = require('faker');

const mongoose = require("mongoose");
const databaseConfig = require("./config/database");

async function runSeed() {
    console.log('please, wait a moment')

    try {
        mongoose.connect(databaseConfig.uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
          });

        let count = 50;

        for (let index = 0; index < count; index++) {
            
            User.create({
                name: faker.name.findName(),
                email: faker.internet.email(),
                price: faker.finance.amount(),
                since: faker.date.past()


            });
            
        }

        console.log('seed complete');
        
    } catch (error) {
        console.log('ERROR SEED DATA: ', error);
    }


}



runSeed();



