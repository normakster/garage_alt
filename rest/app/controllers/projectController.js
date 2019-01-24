'use strict';
const util = require('./utilController');
const debug = require('debug')('app:projectController');
const mongoose = require('mongoose');
const Project = require('../models/project');

var projects = {};
var project = "";

// exports.list_2 = async (req, res) => {
//   try {
//     Project.find({  }, (err, projects) => {
//       if (err) return res.status(500).send("There was a problem finding anything.");;
//       if (!projects) return res.status(404).send("No project found.");
//       return res.status(200).send(projects);
//     });
//   }
//   catch (err) {
//     debug(err);
//   }
// };

exports.list = function(req,res,next) {
  Project.find({  }, (err, projects) => {
    if (err) return res.status(500).send("There was a problem finding anything.");;
    if (!projects) return res.status(404).send("No project found.");
    res.status(200).send(projects);
  });
};

exports.create = async  (req, resp) => {
    // console.log(req.body);
    try{
      await Project.create( req.body, (err, project) => {
        if (err) return resp.status(500).send("There was a problem adding the information to the database.");
        return resp.status(200).send(project);
      });
    }
    catch (err) {
      debug(err);
    }
  };

// exports.read_2 = async  (req, res) => {
//   console.log(req.params);
//   // console.log(req.body);
//     if( req.params._id ) {
//       Project.findById( req.params._id, (err, project) => {
//           if (err) return res.status(500).send("There was a problem finding the project.");
//           if (!project) return res.status(404).send("No project found.");
//           return res.status(200).send(project);
//       });
//     }
//     // if( req.params.title ) {
//     //   Project.find( {title: req.params.title}, (err, project) => {
//     //       if (err) return res.status(500).send("There was a problem finding the project.");
//     //       if (!project) return res.status(404).send("No project found.");
//     //       return res.status(200).send(project);
//     //   });
//     // }
// };

exports.read = function(req,res,next) {
  if( req.params._id ) {
    Project.findById( req.params._id, (err, project) => {
        if (err) return res.status(500).send("There was a problem finding the project.");
        if (!project) return res.status(404).send("No project found.");
        console.log('sending: '+project);
        res.status(200).send(project);
    });
  }
};

// exports.readTitle = async  (req, res) => {
//     console.log(req.params.title);
//
//   };

exports.update = function(req,res,next) {
  // console.log(req.body);
    Project.findByIdAndUpdate( req.body._id, req.body, (err, project) => {
      if (err) return res.status(500).send("There was a problem updating the project.");;
      if (!project) return res.status(404).send("No project found.");
      console.log('sending: '+project);
      res.status(200).send(project);
    });
  };

exports.delete = async  (req, res) => {//, err, project
    Project.findByIdAndRemove( req.params._id, (err, project) => {
      if (err) return res.status(500).send("There was a problem deleting the project.");
      return res.status(200).send(project);
    });
  };

// module.exports = router;
