
/*define array*/
var student = [];

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

    // Update the card with the student's information
    $("#name-card").text("Name: " + name);
    $("#birthday-card").text("Birthday: " + birthday);
    $("#address-card").text("Address: " + address);
    $("#contact-card").text("Contact: " + contact);

    alert("Student added successfully");

    // Clear input fields
    $("#name").val("");
    $("#birthday").val("");
    $("#address").val("");
    $("#contact").val("");
});

$("#btn-search").click(function(){
    alert("hey");
});
