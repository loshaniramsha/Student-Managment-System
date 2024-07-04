
var students = [];
const mobileRegex = /^7|0|(?:\+94)[0-9]{9,10}$/;


/*Add student*/
function addCustomer() {
    try {
        var name = document.getElementById("studentName").value;
        var gender = document.querySelector('input[name="gender"]:checked');
        var dob = document.getElementById("studentDOB").value;
        var address = document.getElementById("studentAddress").value;
        var contact = document.getElementById("studentContact").value;
        var stImg;
        if (gender.value === "male") {
            /*stImg = "";*/
            stImg="../assets/img/male.png"
        } else {
            stImg = "../assets/img/female.png";
        }
        let isMobileValid = mobileRegex.test(contact);

        for (let i = 0; i < students.length; i++) {
            if (students[i].name === name) {
                alert("Name already exists");
            }else if (students[i].contact === contact){
                alert("Contact already exists");
            }
        }

        if (!dob) {
            alert("Invalid date of birth");
        } else if (!isMobileValid) {
            alert("Invalid Contact Number");
        } else {
            var student = {
                name: name,
                gender: gender.value,
                dob: dob,
                address: address,
                contact: contact,
                img: stImg
            }
            students.push(student);
            document.getElementById("studentName").value = "";
            document.getElementById("studentDOB").value = "";
            document.getElementById("studentAddress").value = "";
            document.getElementById("studentContact").value = "";

            console.log(students);
            viewAllStudents(students);
        }
    } catch (error) {
        console.log(error);
    }
}

/*View all students*/
function viewAllStudents(selectedArr) {
    document.getElementById("studentDetails").innerHTML = "";
    for (let i = 0; i < selectedArr.length; i++) {
        let newCustomer =
            `<div class="card col-8 col-sm-6 col-lg-4" style="width: 23rem;margin-bottom: 20px">
                <div class="card-img-top" style="background-color: #FFC107; height: 200px;position: relative">
                    <img src=${selectedArr[i].img} class="card-img-top" alt="student-image" style="width: 120px; height: 120px;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto">
                </div>
                <div style="background-color: #032830;color: white;border-radius: 0 0 12px 12px;box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;">
                     <div class="card-body" style="padding-left: 60px">
                        <p class="card-text">Student Name&nbsp;&nbsp;- ${selectedArr[i].name}</p>
                        <p class="card-text">Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - ${selectedArr[i].gender}</p>
                        <p class="card-text">DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - ${selectedArr[i].dob}</p>
                        <p class="card-text">Address&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - ${selectedArr[i].address}</p>
                        <p class="card-text">Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - ${selectedArr[i].contact}</p>
                    </div>
                    <div style="position: relative;text-align: center;margin-bottom: 15px">
                            <a class="btn btn-danger" style="text-align: center" data-bs-toggle="modal" data-bs-target="#deleteStudentModal" onclick="deleteStudent(${i})">Delete</a>
                    </div>
                </div>
            </div>`;
        document.getElementById("studentDetails").innerHTML += newCustomer;
    }
}

/*Delete customer function*/
function deleteStudent(id) {
    students.splice(id, 1);
    viewAllStudents(students);
}

/*Search Students Function*/
function searchStudent(studentDetail) {
    if (!studentDetail) {
        viewAllStudents(students);
    } else {
        let filteredStudents = students.filter(student => student.name === studentDetail || student.dob === studentDetail || student.address === studentDetail || student.contact === studentDetail || student.gender === studentDetail);
        viewAllStudents(filteredStudents);
    }
}

