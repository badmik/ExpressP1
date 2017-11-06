//
// let storage = readFromLocalStorage();
// writeToLocalStorage(storage);
//
// function getAll() {
//     return storage;
// }
//
// function persist(toPersist) {
//     storage = toPersist;
//     writeToLocalStorage(storage);
// }
//
// function readFromLocalStorage(toPersist) {
//     return JSON.parse(localStorage.getItem("taskStorage") || "[ ]");
// }
//
// function writeToLocalStorage(toPersist) {
//    localStorage.setItem("taskStorage", JSON.stringify(toPersist));
// }


// class TaskDataSinkServer {
//     constructor() {
//         // Server usage
//     }
//     persist(tasks) {
//         // fetch() AJAX all => Promise
//     }
// }

// export default {getAll, persist };

const store = require("../../services/taskStore.js");

module.exports.showIndex = function(req, res)
{
    res.render("index");
};

module.exports.addTask = function(req, res)
{
    res.render("edit");
};

module.exports.createTask = function(req, res)
{
    let task = store.add(req.body.title, req.body.description, req.body.date, function(err, task) {
        res.render("index", task);
    });
};

module.exports.showTask = function(req, res)
{
    store.get(req.params.id, function(err, task) {
        res.render("edit", task);
    });
};

module.exports.deleteTask =  function (req, res)
{
    store.delete(  req.params.id , function(err, task) {
        res.render("index", task);
    });
};
module.exports.editTask =  function (req, res)
{
    store.delete(  req.params.id , function(err, task) {
        res.render("index", task);
    });
};



