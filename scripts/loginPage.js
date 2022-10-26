var submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var formData = new FormData();
	formData.append("username", username);
	formData.append("password", password);

	event.preventDefault();
	fetch("../login/loginPage.php", {
		method: "POST",
		body: formData,
	}).then(async (response) => {
		const res = await response.json();
		if (res.data.isValidLogin == "true") {
			alert("Successful login! Redirecting you to your page...");
			if (res.data.role == "student") {
				window.location.href = "../student/studentPage.html";
			} else {
				window.location.href = "../teacher/teacherPage.html";
			}
		} else {
			alert(
				"Unsuccessful login! Please check again your username or password."
			);
			window.location.href = "../login/loginPage.html";
		}
	});
});
