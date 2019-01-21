const request = require("request-promise-native");
const debug = require('debug')('app:projectController');

// var Project = require('../models/project');
// var masterOptions = {
//   url: 'http://back_end:3000/api/project/',
//   method: 'GET',
//   headers:{
//     'Accept':'application/json',
//     'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
//   }
// };
const apiUrl = 'http://back_end:3000/api/project/';


exports.list = async (req, res) => {
  var listOptions = {
    url: apiUrl,
    method: 'GET',
    headers:{
      'Accept':'application/json',
      'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
    }
  };
  try {
    // const listOptions = masterOptions;
    // options.method = 'GET';
    console.log(listOptions);
    return await request(listOptions, function (err, resp, body) {
      return body;
    });
  }
  catch (err) {
    debug(err);
  }
};

exports.create = async (project) => {
  const url = apiUrl;
  console.log('Creating object: ' + project);
  const newProject = JSON.parse(project);
  try {
    request.post(url, {
        body: newProject,
        json: true
      },
      (error, res, body) => {
        if (error) {
          console.error(error);
          return
        }
        console.log(`statusCode: ${res.statusCode}`);
        // console.log(body);
      }).then(function(res) {
        res.redirect('/garage/project');
      });
  }
  catch (err) {
    debug(err);
  }
};

exports.read = async (_id) => {
  var readOptions = {
    url: apiUrl,
    method: 'GET',
    headers:{
      'Accept':'application/json',
      'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
    }
  };
  try {
    // const readOptions = masterOptions;
    readOptions.url = readOptions.url + _id;
    return await request(readOptions, function (err, resp, body) {
      console.log('error: ' + err);
      return body;
    });
  }
  catch (err) {
    debug(err);
  }
};

exports.update = async (project) => {
  var updateOptions = {
    url: apiUrl,
    method: 'PUT',
    headers:{
      'Accept':'application/json',
      'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
    }
  };
  // console.log('Trying to update: ' + JSON.stringify(project));
  console.log('Trying to update: ' + project);
  try {
    // const updateOptions = masterOptions;
    updateOptions.url = updateOptions.url + project._id;
    // updateOptions.method = 'PUT';
    updateOptions.json = JSON.parse(project);
    return await request(updateOptions, function ( err, resp, body) {
      console.log('error: ' + err);
      console.log('results body: ' + body);
      return body;
    });
  }
  catch (err) {
    debug(err);
  }
};

exports.delete = async (project) => {
  // var deleteOptions = {
  //   url: apiUrl,
  //   method: 'POST',
  //   headers:{
  //     'Accept':'application/json',
  //     'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
  //   }
  // };
  console.log(project);
  try {
    // request.post(url + project._id, (error, res, body) => {
    //   if (error) {
    //     console.error(error)
    //     return
    //   }
    //   console.log(`statusCode: ${res.statusCode}`)
    //   console.log(body)
    // });
    // res.redirect('/garage/project');


    request.post((apiUrl + project._id), {
        body: project,
        json: true
      },
      (error, res, body) => {
        if (error) {
          console.error(error);
          return
        }
        console.log(`statusCode: ${res.statusCode}`);
        // console.log(body);
      }).then(function(res) {
        res.redirect('/garage/project');
      });
  }
  catch (err) {
    debug(err);
  }
};

module.exports = exports;
