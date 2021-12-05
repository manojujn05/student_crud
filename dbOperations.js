const connection = require("./connection");
const statusCode = require("./response.json");

function insertData(rollno, name, email, score) {
  var parameters = [rollno, name, email, score];
  var query =
    "INSERT INTO `student` ( `rollno`, `name`, `score`, `email`) VALUES (?,?,?,?)";
  try {
    return new Promise((resolve, reject) => {
      connection.query(query, parameters, function (err, response) {
        if (err) {
          reject({
            status: statusCode.EXCEPTION_OCCURED,
            message: "Error Occured",
            data: err,
          });
        }
        resolve({
          status: statusCode.STATUS_OK,
          message: "Success",
          data: response,
        });
      });
    });
  } catch (e) {
    return {
      status: statusCode.EXCEPTION_OCCURED,
      message: "Exception occured",
      data: e,
    };
  }
}
function updateData(rollno, name, email, score) {
  var parameters = [rollno, name, email, score];
  var query =
    "update student set  name='" +
    name +
    "', score='" +
    score +
    "', email='" +
    email +
    "' where rollno='" +
    rollno +
    "'";
  console.log(query);
  try {
    return new Promise((resolve, reject) => {
      connection.query(query, parameters, function (err, response) {
        if (err) {
          reject({
            status: statusCode.EXCEPTION_OCCURED,
            message: "Error Occured",
            data: err,
          });
        }
        resolve({
          status: statusCode.STATUS_OK,
          message: "Success",
          data: response,
        });
      });
    });
  } catch (e) {
    return {
      status: statusCode.EXCEPTION_OCCURED,
      message: "Exception occured",
      data: e,
    };
  }
}
function fetchData(rollno) {
  var query = "select * from `student` where `rollno`='" + rollno + "'";

  try {
    return new Promise((resolve, reject) => {
      connection.query(query, function (err, response) {
        if (err) {
          reject({
            status: statusCode.EXCEPTION_OCCURED,
            message: "Error Occured",
            data: err,
          });
        }
        resolve({
          status: statusCode.STATUS_OK,
          message: "success !",
          data: response,
        });
      });
    });
  } catch (e) {
    return {
      status: statusCode.EXCEPTION_OCCURED,
      message: "Exception occured",
      data: e,
    };
  }
}

function deleteData(rollno) {
    var query = "delete from `student` where `rollno`='" + rollno + "'";
  
    try {
      return new Promise((resolve, reject) => {
        connection.query(query, function (err, response) {
          if (err) {
            reject({
              status: statusCode.EXCEPTION_OCCURED,
              message: "Error Occured",
              data: err,
            });
          }
          resolve({
            status: statusCode.STATUS_OK,
            message: "success !",
            data: response,
          });
        });
      });
    } catch (e) {
      return {
        status: statusCode.EXCEPTION_OCCURED,
        message: "Exception occured",
        data: e,
      };
    }
  }

(async() => {
//   console.log(await updateData(12, "Mahesh13", "mahesh@gmail1.com", 89));
console.log(await deleteData(23))
//   fetchData(12)
})();

module.exports = (insertData, fetchData, deleteData);
