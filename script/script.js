
/*define arra*/
var student=[];

/*push data*/
$("#btn-save").click(function(){
    var name = $("#name").val();
    var birthday = $("#birthday").val();
    var address = $("#address").val();
    var contact = $("#contact").val();
    var obj = {
        name: name,
        birthday: birthday,
        address: address,
        contact: contact
    };
    student.push(obj);
    console.log(student);

    alert("Student added successfully");


    /*clear input field*/
    $("#name").val("");
    $("#birthday").val("");
    $("#address").val("");
    $("#contact").val("");
});