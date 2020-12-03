$(document).ready(function() {
    $("#btn").click(function() {
        var student = {
          first: $("#first").val(),
          last: $("#last").val(),
          pts: $("#pts").val(),
          max: $("#max").val()

        };
        var percentage = ( student.pts / student.max ) * 100 ;
        var grade = "";
        percentage = percentage.toFixed(2);
        if(percentage > 90) grade = "A";
        else if (percentage > 80)  grade = "B";
        else if (percentage > 70)  grade = "C";
        else if (percentage > 60)  grade = "D";
        else grade = "F"
        var output = `Student: ${student.last}, ${student.first} Grade: ${percentage}%(${grade})`;
        $("#output").text(output);
    });

});