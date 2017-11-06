const Datastore = require('nedb');
const db = new Datastore({ filename: '../../data/tasks.db', autoload: true });

import {default as model} from "./model.js";



function publicAddTask(name, description, date)
{
    let task = new model.Task(
        $("#name").val(),
        $("#description").val(),
        $("#date").val());

    db.insert(task, function(err, newDoc){
        if(callback){
            callback(err, newDoc);
        }
    });
}

function publicRemove(id, callback) {
    db.update({_id: id}, {$set: {"state": "DELETED"}}, {returnUpdatedDocs:true}, function (err, numDocs, doc) {
        callback(err, doc);
    });
}

function publicEdit(id, callback) {
    db.update({_id: id}, function (err, doc) {
        callback(err, doc);
    });
}

function publicGet(id, callback)
{   db.findOne({ _id: id }, function (err, doc) {
        callback( err, doc);
    });
}

function publicAll()
{
    db.find({}, function (err, docs) {
        callback( err, docs);
    });
}

module.exports = {add : publicAddTask, delete : publicRemove, edit : publicEdit, get : publicGet, all : publicAll};