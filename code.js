$(document).ready(function() {
    var gaggleOfStudents = [];
    function outputStudents() {
        var output = "";
        gaggleOfStudents.forEach(function (e,i,a) {
            output += `Student:${i}  Name:${e.first} ${e.last} Points:${e.pts}/${e.max} Grade:${e.grade}(${e.percentage}%)`;
            output += "\n";

        });
        return output;
    }
    function nameSort(a,b) {
        if (a.last < b.last) return -1;
        else if (b.last < a.last ) return 1;
        else return 0;
    }
    function gradeSort(a,b) {
        var x = parseFloat(a.percentage);
        var y = parseFloat(b.percentage);
        if (x<y) return 1;
        else if(x>y) return -1;
        else return 0;
    }
    function sortByName() {
        gaggleOfStudents.sort(nameSort);
        $("#output").text(outputStudents());
    }
    function sortByGrade() {
        gaggleOfStudents.sort(gradeSort);
        $("#output").text(outputStudents());
    }
    function calcGrades(student) {
        student.percentage = ( student.pts / student.max ) * 100 ;
        student.percentage = student.percentage.toFixed(2);
        if(student.percentage > 90) student.grade = "A";
        else if (student.percentage > 80)  student.grade = "B";
        else if (student.percentage > 70)  student.grade = "C";
        else if (student.percentage > 60)  student.grade = "D";
        else student.grade = "F"
    }
    $("#nameSortBtn").click(sortByName);
    $("#gradeSortBtn").click(sortByGrade);

    $("#btn").click(function() {
        var student = {
          first: $("#first").val(),
          last: $("#last").val(),
          pts: $("#pts").val(),
          max: $("#max").val()

        };
        gaggleOfStudents.push(student);
        calcGrades(student);
        $("#output").text(outputStudents());
    });

});