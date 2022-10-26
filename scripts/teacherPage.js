var addQ = document.getElementById("addQuestions");
addQ.addEventListener("click", function (event) {
	var question = document.getElementById("question").value;
	var numCase = document.getElementById("numTestCases").value;
	var formData = new FormData();
	const inputArr = [];
	const outputArr = [];
	formData.append("question", question);
	for (i = 0; i < numCase; i++) {
		var input = document.getElementById("input-" + (i + 1)).value;
		var output = document.getElementById("output-" + (i + 1)).value;
		inputArr.push(input);
		outputArr.push(output);
	}
	formData.append("input", inputArr);
	formData.append("output", outputArr);
	event.preventDefault();
	fetch("../teacher/addQuestions.php", {
		method: "POST",
		body: formData,
	}).then(async (response) => {
		const res = await response.json();
		console.log(res.data.isValidQuestion);
		if (res.data.isValidQuestion == "true") {
			alert("Questions and test cases successfully added!");
		} else {
			alert("Questions and test cases unsuccessfully added!");
		}
	});
	window.location.href = "../teacher/teacherPage.html";
});

var addC = document.getElementById("addTestCases");
addC.addEventListener("click", function (event) {
	var numCase = document.getElementById("numTestCases").value;
	var container = document.getElementById("container");
	while (container.hasChildNodes()) {
		container.removeChild(container.lastChild);
	}
	for (i = 0; i < numCase; i++) {
		container.appendChild(document.createTextNode("Input case " + (i + 1)));
		var input = document.createElement("input");
		input.type = "text";
		input.name = "Input case " + (i + 1);
		input.id = "input-" + (i + 1);
		container.appendChild(input);
		container.appendChild(document.createElement("br"));
		container.appendChild(document.createTextNode("Output case " + (i + 1)));
		var output = document.createElement("input");
		output.type = "text";
		output.name = "Output case" + (i + 1);
		output.id = "output-" + (i + 1);
		container.appendChild(output);
		container.appendChild(document.createElement("br"));
		container.appendChild(document.createElement("br"));
	}
	event.preventDefault();
});
