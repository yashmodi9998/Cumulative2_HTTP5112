// AJAX for teacher Add can go in here!
// This file is connected to the project via Shared/_Layout.cshtml


function AddTeacher() {
	//POST : http://localhost:59667/api/TeacherData/AddTeacher
	

	var URL = "http://localhost:59667/api/TeacherData/AddTeacher";

	var rq = new XMLHttpRequest();

	var TeacherFname = document.getElementById('TeacherFname').value;
	var TeacherLname = document.getElementById('TeacherLname').value;
	var EmployeeNumber = document.getElementById('EmployeeNumber').value;
	var HireDate = document.getElementById('HireDate').value;
	var Salary = document.getElementById('Salary').value;

	var TeacherData = {
		"TeacherFname": TeacherFname,
		"TeacherLname": TeacherLname,
		"EmployeeNumber": EmployeeNumber,
		"HireDate": HireDate,
		"Salary": Salary
	};

	rq.open("POST", URL, true);
	rq.setRequestHeader("Content-Type", "application/json");
	rq.onreadystatechange = function () {
		//ready state should be 4 AND status should be 200
		if (rq.readyState == 4 && rq.status == 200) {
		

			
		}

	}
	//POST information sent through the .send() method
	rq.send(JSON.stringify(TeacherData));

}