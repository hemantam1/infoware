module.exports = function(sequelize, Sequelize) {
 
    var postRequirementFarmer = sequelize.define('postrequirementfarmer', {
 
        post_requirement_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        name_of_plant: {
            type: Sequelize.TEXT,
            allowNull: false
        },

        rate: {
            type: Sequelize.BIGINT,
            allowNull: false
        },

        quantity: {
            type: Sequelize.BIGINT,
            allowNull: false
        },

        type_of_plant: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        
        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
        
    }, {
        tableName : 'postrequirementfarmer',
        timestamps : false
    });
 
    return postRequirementFarmer;
 
}
