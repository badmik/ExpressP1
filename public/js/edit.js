import {default as data} from "./data.js"; // [geh]: hier musst du das DATA-Modul laden, es wird gem. deines Architektur-Ansatzes vom Model benötigt
import {default as model} from "./model.js";

;(function($) {// [geh]: Dies entspricht dem Controller fürs edit.html!

    // [geh]: In Edit-Dialog benötigst du bis anhin noch kein Handlebars;
    //        Das tasks-list-template existiert nicht auf der edit.html Seite, daher funktionert das Bootstrapping
    //        schon gar nicht (der Controller schmeisst ‘nen Fehler).
    //let tasksTemplateProcessor = null;
    const taskManager = new model.TaskManager(data);

    //function showTasks() {
    //    $("#containerTasks").html(tasksTemplateProcessor({ tasks: taskManager.tasks }));
    //}

    //function updateUI() {
    //    showTasks();
    //}


    $(function () {
        //tasksTemplateProcessor = Handlebars.compile($("#tasks-list-template").html());
        //$(document).on("click", "input[send]", function() { send() });
        //$("#btnEdit").on()
        $("#createTask").click(
            function () {
                //taskManager.add($("#name").val()); // [geh]: der Name zu adden reicht noch nicht; hier musst du ebenfalls einen Task kreieren:
                let newTask = new model.Task(
                    $("#name").val(),
                    $("#description").val(),
                    $("#date").val());
                //document.getElementById("date").value;
                taskManager.add(newTask);
                //showTasks();
                self.location.href = "/index.html"; // [geh]: zurück auf die index-Seite navigieren...
            });

        $("#cancelEdit").click(() => location.href="/index.html");

        //updateUI();

    });

    function addEvent(obj, type, fn) {
        if (obj.attachEvent) {
            obj['e' + type + fn] = fn;
            obj[type + fn] = function() {
                obj['e' + type + fn](window.event);
            };
            obj.attachEvent('on' + type, obj[type + fn]);
        } else obj.addEventListener(type, fn, false);
    }

    function switchStyles() {
        let selectedOption = this.options[this.selectedIndex],
            className = selectedOption.value;

        document.body.className = className;
        localStorage.setItem("bodyClassName", className);
    }

    let styleSwitcher = document.getElementById("styleSwitcher");
    addEvent(styleSwitcher, "change", switchStyles);

    let storedClassName = localStorage.getItem("bodyClassName");
    if (storedClassName) {
        for (var i = 0; i < styleSwitcher.options.length; i++) {
            if (styleSwitcher.options[i].value === storedClassName) {
                styleSwitcher.selectedIndex = i;
            }
        }
    }



})(jQuery);
