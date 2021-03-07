module.exports = function(sequelize, Sequelize) {
 
    var Experiment = sequelize.define('experiment', {
 
        exp_id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        yes_or_no:{
            type: Sequelize.TEXT
        },
 
        experiment: {
            type: Sequelize.TEXT
        },
        
        userid: {
            type: Sequelize.INTEGER,
            references: {
              model: 'users', // Can be both a string representing the table name or a Sequelize model
              key: 'id'
            }
          }
    }, {
        tableName : 'experiment',
        timestamps : false
    });
 
    return Experiment;
 
}