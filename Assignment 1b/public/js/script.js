$(document).ready(function () {
$("#submit").click(function () {
	
	
	$.post("/request",
	{
		name: "Student",
		designation: "UG"
	},
	function (data, status) {
		console.log(data)
		localStorage.setItem(["name", "designation"],["Student","UG"]);
		// alert(data[0].name_recieved)
	});
});
});
