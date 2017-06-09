const uuid = require('uuid/v1')
var crypto = require("crypto")
'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true  // <-- Code level validations
      }
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false
    },
    encryptedPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    authToken: DataTypes.STRING,
    authTokenExpiration: DataTypes.DATE,
    salt: DataTypes.STRING

  }, {
    setterMethods:{
      password(value){
       if(value){
         const salt = uuid()
         this.setDataValue('salt', salt)
         const hash = this.encrypt(value)
         this.setDataValue('encryptedPassword', hash)
        }
      }
    },
    instanceMethods:{
      toJSON(){
        return {
          id: this.get('id'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          email: this.get('email'),
          neighborhood: this.get('neighborhood'),
          authToken: this.get('authToken'),
          authTokenExpiration: this.get('authTokenExpiration')
        }
      },
      encrypt(value){
        const salt = this.get('salt')
        return crypto.createHmac('sha512', salt)
          .update(value)
          .digest('hex')
      },
      // Checks to see if passed value matches encrypted password value from record
      verifyPassword(unverifiedPassword){
        //encrypt unverifiedPassword
        const encryptedUnverifiedPassword = this.encrypt(unverifiedPassword)

        //compare encryptedUnverifiedPassword with password
        return encryptedUnverifiedPassword === this.get('encryptedPassword')
      },
      setAuthToken(){
         const token = uuid()
         const expiration = new Date()
         expiration.setMonth(expiration.getMonth() + 1)
         this.setDataValue('authToken', token)
         this.setDataValue('authTokenExpiration', expiration)
       }
    },
    classMethods: {
      associate: function(models) {
        User.hasMany(models.GuestList, {
          foreignKey: 'user_id',
          as: 'guestLists'
        })
        User.hasMany(models.Message, {
          foreignKey: 'user_id',
          as: 'messages'
        })
      }
    },
    hooks:{
      // Adds a hook to generate the users token when user is created
      beforeCreate: function(user, options){
        user.setAuthToken()
      }

    }
  });
  return User;
};
