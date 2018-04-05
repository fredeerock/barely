window.onload = function () {
    var isTeacher = sessionStorage.getItem("isTeacherStore");
    teacherContent(isTeacher);
}

document.getElementById("teacherForm").addEventListener("submit", function () {
    if (document.getElementById("teacherID").value == "teacher") {
        sessionStorage.setItem("isTeacherStore", "yes");
        teacherContent(sessionStorage.getItem("isTeacherStore"));
    } else {
        sessionStorage.setItem("isTeacherStore", "no");
        teacherContent(sessionStorage.getItem("isTeacherStore"));
    }
    event.preventDefault();
});

function teacherContent(ans) {
    if (ans == "yes") {
        document.getElementById('teacherContent').style.display = "block";
    } else {
        document.getElementById('teacherContent').style.display = "none";
    }
}