// Aubrey Farnbach (Wright) Section 2 Group 1

// creates submit variable
var submit = document.getElementById("submitbutton");

// Gets values from form and calculates grade upon submission
submit.addEventListener("click", function () {
    var Assignments = document.getElementById("Assignments").value;
    var Group_Projects = document.getElementById("Group Project").value;
    var Quizzes = document.getElementById("Quizzes").value;
    var Exams = document.getElementById("Exams").value;
    var Intex = document.getElementById("Intex").value;
    var raw_score = parseInt(Assignments) * .5 + parseInt(Group_Projects) * .1 + parseInt(Quizzes) * .1 + parseInt(Exams) * .2 + parseInt(Intex) * .1;
    var letter_grade = "Q"
    if (raw_score >= 94) {
        letter_grade = "A"
    } else if (raw_score >= 90) {
        letter_grade = "A-"
    } else if (raw_score >= 87) {
        letter_grade = "B+"
    } else if (raw_score >= 84) {
        letter_grade = "B"
    } else if (raw_score >= 80) {
        letter_grade = "B-"
    } else if (raw_score >= 77) {
        letter_grade = "C+"
    } else if (raw_score >= 74) {
        letter_grade = "C"
    } else if (raw_score >= 70) {
        letter_grade = "C-"
    } else if (raw_score >= 67) {
        letter_grade = "D+"
    } else if (raw_score >= 64) {
        letter_grade = "D"
    } else if (raw_score >= 60) {
        letter_grade = "D-"
    } else {
        letter_grade = "E"
    }
    var alert_text = letter_grade + " " + raw_score + "%";
    alert(String(alert_text));
})
