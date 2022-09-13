$("#courseHandicap").submit(function (e) {
	e.preventDefault();
	var message = "";
	var title = "";
	var slopeRating = parseFloat($("#slopeRating").val());
	var courseRating = parseFloat($("#courseRating").val());
	var coursePar = parseFloat($("#coursePar").val());
	var handicapIndex = parseFloat($("#handicapIndex").val());
	var handicapAllowance = parseFloat($("#handicapAllowance").val());
	var lengthVal = $("#lengthSelect").val();
	var courseVal = $("#courseSelect").val();
	var courseText = $("#courseSelect option:selected").text();

	if (slopeRating == "") {
		message = "A slope rating is required";
	} else {
		if (handicapIndex == "") {
			message = "A handicap index is required";
		} else {
			var handicap = 0;
			var handicapRaw = 0;
			var handicapPercentage = handicapAllowance / 100;
			if (lengthVal == 9) {
				title = "9 Hole Course Handicap"
				handicapRaw = ((handicapIndex / 2) * (slopeRating / 113)) + courseRating - coursePar;
			} else {
				title = "18 Hole Course Handicap"
				handicapRaw = handicapIndex * (slopeRating / 113);
			}
			var handicapAsPercent = Math.round(handicapRaw) * handicapPercentage;
			handicap = Math.round(handicapAsPercent);
			
			if (lengthVal == 9) {
				if (courseText != "Unlisted Course") {
					message = `Course: <b>${courseText}</b></br>Slope Rating: <b>${slopeRating}</b></br>Course Rating: <b>${courseRating}</b></br>Course Par: <b>${coursePar}</b></br>Handicap Index: <b>${handicapIndex}</b></br>Handicap Allowance: <b>${handicapAllowance}</b></br><hr>Course Handicap: <b>${handicap}</b>`;
				} else {
					message = `Slope Rating: <b>${slopeRating}</b></br>Course Rating: <b>${courseRating}</b></br>Course Par: <b>${coursePar}</b></br>Handicap Index: <b>${handicapIndex}</b></br>Handicap Allowance: <b>${handicapAllowance}</b></br><hr>Course Handicap: <b>${handicap}</b>`;
				}
			} else {
				if (courseText != "Unlisted Course") {
					message = `Course: <b>${courseText}</b></br>Slope Rating: <b>${slopeRating}</b></br>Handicap Index: <b>${handicapIndex}</b></br>Handicap Allowance: <b>${handicapAllowance}</b></br><hr>Course Handicap: <b>${handicap}</b>`;
				} else {
					message = `Slope Rating: <b>${slopeRating}</b></br>Handicap Index: <b>${handicapIndex}</b></br>Handicap Allowance: <b>${handicapAllowance}</b></br><hr>Course Handicap: <b>${handicap}</b>`;
				}
			}
		}
	}

	$("#handicapModalText").html(message);
	$("#handicapModalTitle").text(title);
	$('#handicapModal').modal('show');
});

$("#courseSelect").change(function () {
	var courseVal = $("#courseSelect").val();
	if (courseVal == -3) {
		$("#slopeRating").val("").prop("disabled", true);
		$("#courseRating").val("").prop("disabled", true);
		$("#coursePar").val("").prop("disabled", true);
		$("#handicapIndex").val("").prop("disabled", true);
		$("#handicapAllowance option[value='100%']").prop('selected', true);
		$("#handicapAllowance").prop("disabled", true);
		$("#handicapCalculate").prop("disabled", true);
	} else {
		if (courseVal == -2) {
			$("#slopeRating").val("").prop("disabled", false);
			$("#courseRating").val("").prop("disabled", false);
			$("#coursePar").val("").prop("disabled", false);
			$("#handicapIndex").prop("disabled", false);
			$("#handicapAllowance").prop("disabled", false);
			$("#handicapCalculate").prop("disabled", false);
		} else {
			if (courseVal == -1) {
				$("#slopeRating").val("").prop("disabled", false);
				$("#courseRating").val("").prop("disabled", true);
				$("#coursePar").val("").prop("disabled", true);
				$("#handicapIndex").prop("disabled", false);
				$("#handicapAllowance").prop("disabled", false);
				$("#handicapCalculate").prop("disabled", false);
			} else {
				var courseValParts = courseVal.split(",");
				$("#slopeRating").val(courseValParts[0]).prop("disabled", true);
				if(courseValParts.length == 3) {
					$("#courseRating").val(courseValParts[1]).attr("placeholder", "").prop("disabled", true);
					$("#coursePar").val(courseValParts[2]).attr("placeholder", "").prop("disabled", true);
				} else {                                            
					$("#courseRating").val("").attr("placeholder", "Not Required").prop("disabled", true);
					$("#coursePar").val("").attr("placeholder", "Not Required").prop("disabled", true);
				}                    
				$("#handicapIndex").prop("disabled", false);
				$("#handicapAllowance").prop("disabled", false);
				$("#handicapCalculate").prop("disabled", false);
			}
		}
	}
});

$("#lengthSelect").change(function () {
	var lengthVal = $("#lengthSelect").val();
	if (lengthVal == -1) {
		$("#courseSelect").prop("disabled", true);
		$("#slopeRating").val("").prop("disabled", true);
		$("#courseRating").val("").prop("disabled", true);
		$("#coursePar").val("").prop("disabled", true);
		$("#handicapIndex").val("").prop("disabled", true);
		$("#handicapAllowance option[value='100%']").prop('selected', true);
		$("#handicapAllowance").prop("disabled", true);
		$("#handicapCalculate").prop("disabled", true);
	} else {
		$('#courseSelect').empty();
		$("#courseSelect").prop("disabled", false);
		$('#courseSelect').append("<option value='-3'>Choose...</option>");            
		if (lengthVal == 9) {
			$('#courseSelect').append("<option value='-2'>Unlisted Course</option>");
			$('#courseSelect').append("<option value='107,34,37'>Cuckfield Black (Men's)</option>");
			$('#courseSelect').append("<option value='126,37.4,37'>Cuckfield Black (Ladies)</option>");
			$('#courseSelect').append("<option value='104,33.4,37'>Cuckfield Salmon (Men's)</option>");
			$('#courseSelect').append("<option value='117,36.2,37'>Cuckfield Salmon (Ladies)</option>");
			$('#courseSelect').append("<option value='93,30.7,34'>Cuckfield Blue (Men's)</option>");
			$('#courseSelect').append("<option value='107,32.5,34'>Cuckfield Blue (Ladies)</option>");

			$("#courseRating").val("").attr("placeholder", "").prop("disabled", true);
			$("#coursePar").val("").attr("placeholder", "").prop("disabled", true);
		} else {
			$('#courseSelect').append("<option value='-1'>Unlisted Course</option>");
			$('#courseSelect').append("<option value='103'>Cuckfield White (Men's)</option>");
			$('#courseSelect').append("<option value='120'>Cuckfield White (Ladies)</option>");
			$('#courseSelect').append("<option value='98'>Cuckfield Yellow (Men's)</option>");
			$('#courseSelect').append("<option value='112'>Cuckfield Red (Ladies)</option>");

			$("#courseRating").val("").attr("placeholder", "Not Required").prop("disabled", true);
			$("#coursePar").val("").attr("placeholder", "Not Required").prop("disabled", true);
		}

		$("#slopeRating").val("").prop("disabled", true);
		$("#handicapIndex").val("").prop("disabled", true);
		$("#handicapAllowance option[value='100%']").prop('selected', true);
		$("#handicapAllowance").prop("disabled", true);
		$("#handicapCalculate").prop("disabled", true);
	}
	$("#courseSelect").val(-3);
});