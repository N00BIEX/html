
        //regular backlog options extends
        function showInputField() {
            var option1 = document.getElementById("option1");
            var option2 = document.getElementById("option2");
            var inputField = document.getElementById("inputField");

            if (option1.checked) {
                inputField.style.display = "block";
            } else if (option2.checked) {
                inputField.style.display = "none";
                location.reload();
            }
        }

        // Create a new select element
        var select = document.createElement("select");

        // Set the ID attribute of the select element
        select.setAttribute("id", "mySelect");
        select.setAttribute("name", "semester");

        // Create options using a for loop
        for (var i = 1; i <= 8; i++) {
            // Create a new option element
            var option = document.createElement("option");

            // Set the value and text of the option
            option.value = i;
            option.text = i;

            // Append the option to the select element
            select.appendChild(option);
        }

        // Append the select element to the document body or any desired container
        document.body.appendChild(select);

        // Get the form element by ID
        var form = document.getElementById("formSemS");
        // Append the select element to the form
        form.appendChild(select);


        document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            // Prevent form submission

            // Retrieve input values
            var roll_no = document.getElementById("name").value;




            var sem = document.getElementById("mySelect").value;

            var year1 = roll_no.slice(7, 9);
            yearR = parseInt(year1);
            var year1 = parseInt(yearR)-1;
            var year = 20;

            function getMonths(number) {
                if (sem % 2 === 0) {
                    yearR += sem/2;
                    return "apr-may";
                } else {
                    yearR += (sem-1)/2;
                    return "nov-dec";
                }
            }
            var lateral_alter = roll_no.slice(9, 12);
            if (parseInt(lateral_alter) > 100) {
                yearR--;

            }

            month = getMonths(sem);


            //open link
            // Specify the URL of the editable link

            // Display the string
            // alert(editableLink);




            //alert("Roll no. : "+roll_no);




            // Get reference to the selected radio button
            yearRR = year+""+yearR;
            var selectedOption = document.querySelector('input[name="option"]:checked');
            if (option1.checked) {
                month = document.getElementById("months").value;
                yearR = document.getElementById("textInput").value;
                if (yearR > 1900) {
                    yearRR = yearR;
                } else if (yearR < 10) {
                    yearRR = "0"+yearR;
                } else {
                    yearRR = year+""+yearR;
                }
            } else {
                month = getMonths(sem);
            }
            var type = selectedOption.value;



            var editableLink = "https://csvtu.digivarsity.online/WebApp/Result/SemesterResult.aspx?S="+sem+"%20SEMESTER&E="+month+"%20"+yearRR+"&R="+roll_no+"&T="+type;
            //alert(editableLink);

            //second sem
            /* var editableLink = "https://csvtu.digivarsity.online/WebApp/Result/SemesterResult.aspx?S=2%20semester&E=Apr-May%202022&R=300803921049&T=Regular";
            // first SemesterResult
            var editableLink = "https://csvtu.digivarsity.online/WebApp/Result/SemesterResult.aspx?S=1%20SEMESTER&E=Nov-Dec%202021&R=300803921050&T=Regular";*/



            // Open the link in a new tab
            var newTab = window.open(editableLink, '_blank');


            // Focus on the new tab to make it the active tab
            newTab.focus();
        });

        document.getElementById("admit").addEventListener("click", function(event) {
            event.preventDefault();
            // Prevent form submission

            // Retrieve input values
            var roll_no = document.getElementById("name").value;




            var sem = document.getElementById("mySelect").value;

            var year = roll_no.slice(7, 9);
            yearR = parseInt(year);
            var year = parseInt(yearR)-1;

            function getMonths(number) {
                if (sem % 2 === 0) {
                    yearR += sem/2;
                    return "apr-may";
                } else {
                    yearR += (sem-1)/2;
                    return "nov-dec";
                }
            }

            month = getMonths(sem);


            //open link
            // Specify the URL of the editable link

            // Display the string
            // alert(editableLink);




            //alert("Roll no. : "+roll_no);;
            backAdmitYear=document.getElementById("textInput").value;
            if(backAdmitYear){
                yearR=backAdmitYear.slice(2);
            }
            var admitlink = "https://csvtu.digivarsity.online/WebApp/Examination/AdmitCard.aspx?RollNo="+roll_no+"&ExamSession="+month+"%20"+year+""+yearR+"&Semester="+sem+"%20SEMESTER";

            var newTab = window.open(admitlink, '_blank')
            // Focus on the new tab to make it the active tab
            newTab.focus();

        });
    