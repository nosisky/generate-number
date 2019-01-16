import jsonfile from 'jsonfile';
import fs from 'fs';

const file = './server/db.json';
let fileReader = JSON.parse(fs.readFileSync(file, 'utf8'))


const NumberGenerator = {

  /**
   * @description - Generates phone number
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   *
   * @param {Object} next - callBack function
   *
   * @return {Object} - Object
   */
  generateNumber(req, res, next) {
    const phoneNumbers = [];
    const prefix = "090-124-";
 
    for (let i = 1; i <= 5; i++) {
      let newNumber = Math.floor(1000 + Math.random() * 9000);
      const generatedNumber = `${prefix}${newNumber}`
      const obj = {
        phoneNumber: generatedNumber,
        date: new Date(),
        generatedBy: 'Admin'
      }
      phoneNumbers.push(obj);
    }
    phoneNumbers.forEach((num) => {
      fileReader.phoneNumbers.push(num)
    })

    jsonfile.writeFile(file, fileReader)
    .then(() => {
      NumberGenerator.listNumber(req, res)
    })
  },

    /**
   * @description - Lists all phone number in the database.
   *
   * @param {Object} req - request
   *
   * @param {Object} res - response
   *
   * @param {Object} next - callBack function
   *
   * @return {Object} - Object
   */
  listNumber(req, res, next) {
    jsonfile.readFile(file, function (err, obj) {
      res.send(obj)
    })
  }

}


module.exports = NumberGenerator;
