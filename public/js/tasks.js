import {default as data} from "./data.js"; // [geh]: hier musst du das DATA-Modul laden, es wird gem. deines Architektur-Ansatzes vom Model benötigt
import {default as model} from "./model.js";

;(function($) { // [geh]: Dies entspricht dem Controller fürs index.html!

    let tasksTemplateProcessor = null;
    // [geh]: Schreibfehler; es heisst TaskManager, nicht Taskmanager (siehe Google Chrome Console)
    const taskManager = new model.TaskManager(data);

    function showTasks() {
        // [geh]: das Property heisst im Template 'task', nicht 'tasks'
        $("#containerTasks").html(tasksTemplateProcessor({ task: taskManager.tasks }));
    }

    function updateUI() {
        showTasks();
    }

    function sort(name){

         //let tasks = [sort(showTasks())]; not working
        showTasks();


    }



    $(function () {
        // [geh]: Kein Inline-JavaScript (onclick="location.href='edit.html';") ist nicht erlaubt; Controller soll dafür verwendet werden
        $("#btnAddTask").click(() => location.href='edit.html');

        tasksTemplateProcessor = Handlebars.compile($("#task-list-template").html()); // [geh]: falsch geschrieben; heisst task-list-template

        // [geh]: das ist Logik aus dem edit-Controller; gehört hier nicht hin
        //$(document).on("click", "input[send]", function() { send() });
        //$("#btnEdit").on()
        //$("#createTask").click(
        //    function () {
        //        Taskmanager.add($("#name").val());
        //        showTasks();
        //    });
        updateUI();
    });

})(jQuery);
