'use strict';

const chalk = require('chalk');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class SearchHead {


  async getRecord(userID, date) {
    try {
      let queryObj = {};
      if(userID !== null) {queryObj.userid = userID};
      if(date !== null) {queryObj.datetime = date};
      const errors = await prisma.errevents.findMany({
        where: queryObj,
      });
      errors.forEach(err => {
        console.log(chalk.green('=================================  ERROR RECORD  ================================='));
        console.log('RECORD-ID:', err.id);
        console.log('USER-ID:', err.userid);
        console.log('DATE-TIME:', err.datetime);
        console.log('ERROR-TYPE:', err.errortype);
        console.log('ERROR-MESSAGE:', err.errormessage);
        console.log('STACK:', err.stack);
        console.log(chalk.green('=================================================================================='));
      })
    } catch (e) {
      console.log('Something went wrong getting data:', e);
    } finally {
      await prisma.$disconnect();
    }
  }


  async delete(recordID) {
    try {
      const deleted = await prisma.errevents.delete({
        where: { id: recordID },
      });
      console.log(chalk.green('======================== DELETED RECORD ========================'))
      console.log(deleted);
      console.log(chalk.green('================================================================'))
    } catch (e) {
      console.log('Something went wrong when deleting from database:', e);
    } finally {
      await prisma.$disconnect();
    }
  }
}

module.exports = new SearchHead();
