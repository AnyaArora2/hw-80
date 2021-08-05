name_array = [];
function submit() {
    for(var j= 1; j <= 4; j++){
        var name_of_student = document.getElementById("name"+j).value;
        console.log(name_of_student)
        name_array.push(name_of_student);
    }
    console.log(name_array);
    var display_student_array = [];

    var length = name_array.length;
    console.log(length);

    for(var k=0; k < length; k++){
        display_student_array.push("<h2> NAME - "+ name_array[k] + "</h2>");
        console.log(display_student_array);
    }

    console.log(display_student_array);

    document.getElementById("Display_Names").innerHTML=display_student_array;

    var stop_the_comma = display_student_array.join(" ");
    console.log(stop_the_comma);
    document.getElementById("display_sort").innerHTML=stop_the_comma;

    document.getElementById("Next").style.display= "none";
    document.getElementById("sort").style.display= "inline-block";

}
function sort(){
    name_array.sort();
    console.log(name_array);

    var display_sorted_array = [];
    var length = name_array.length;
    console.log(length);

    for(var k=0; k < length; k++){
        display_sorted_array.push("<h2> Names - "+ name_array[k] + "</h2>");
        console.log(display_sorted_array);
    }

    console.log(display_sorted_array);

    var stop_the_comma = display_sorted_array.join(" ");
    console.log(stop_the_comma);
    document.getElementById("display_sort").innerHTML=stop_the_comma;
}
