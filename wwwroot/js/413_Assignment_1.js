var submit = document.getElementById("submitbutton");

submit.addEventListener("click", function () {
    var Assignments = document.getElementById("Assignments").value;
    var Group_Projects = document.getElementById("Group Project").value;
    var Quizzes = document.getElementById("Quizzes").value;
    var Exams = document.getElementById("Exams").value;
    var Intex = document.getElementById("Intex").value;
    var alert_text = parseInt(Assignments) * .5 + parseInt(Group_Projects) * .1 + parseInt(Quizzes) * .1 + parseInt(Exams) * .2 + parseInt(Intex) * .1;
    alert(String(alert_text));
})