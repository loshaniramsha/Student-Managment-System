var student=[];

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
});