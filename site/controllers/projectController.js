var request = require("request-promise-native");
const os = require("os");
const debug = require('debug')('app:projectController');
var Service = require('../services/projectService');

const hostname = os.hostname();
const apiUrl = 'http://back_end:3000/api/project/';
var projects = [];


exports.showProjects = async function (req, res) {
  try {
    var listOptions = {
      url: apiUrl,
      method: 'GET',
      headers:{
        'Accept':'application/json',
        'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
      }
    };
    console.log(listOptions);
    projects = JSON.parse(await request(listOptions, function (err, resp, body) {
      return body;
    }));

    // projects = JSON.parse(await Service.list());
    res.render('projectList', { projects: projects, title: 'Project List', hostname });
  }
  catch (err) {
    debug(err);
  }
};

exports.addProject = (req, res) => {
  res.render('addProject', { title: 'Adding a Project' });
};

exports.create = async function (req, res, err) {
  try {
    console.log('Sending new Object: ' + JSON.stringify(req.body));

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

    // await Service.create(JSON.stringify(req.body));
    // console.log(JSON.stringify());
    // res.redirect('/garage/project/');
  }
  catch (err) {
    debug(err);
  }
};

exports.getProject = async function (req, res, err) {
  try {
    var readOptions = {
      url: apiUrl,
      method: 'GET',
      headers:{
        'Accept':'application/json',
        'Accept-Language':'en-GB,en-US;q=0.8,en;q=0.6'
      }
    };
    readOptions.url = readOptions.url + req.params._id;
    project = JSON.parse(await request(readOptions, function (err, resp, body) {
      console.log('error: ' + err);
      return body;
    }));

    // project = JSON.parse(await Service.read(req.params._id));
    res.render('editProject', { project: project, title: 'Save Changes' });
  }
  catch (err) {
    debug(err);
  }
};

exports.commitEdit = async function (req, res, err) {
  try {
    console.log(JSON.stringify(await Service.update(JSON.stringify(req.body))));
    res.redirect('/garage/project/');
  }
  catch (err) {
    debug(err);
  }
};

exports.confirmDelete = async function (req, res, err) {
  try {
    console.log(JSON.stringify(await Service.delete(JSON.stringify(req.body))));
    res.redirect('/garage/project/');
  }
  catch (err) {
    debug(err);
  }
};

module.exports = exports;
