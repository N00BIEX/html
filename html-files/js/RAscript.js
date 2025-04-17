
        var year = 20;
        var yearR = 0;


        function rollNo_task() {
            var roll_no = document.getElementById("rollNo").value;
            var sem = document.getElementById("mySem").value;

            var year1 = roll_no.slice(7, 9);
            var yearR = parseInt(year1);
            var lateral_alter = roll_no.slice(9, 12);
            if (parseInt(lateral_alter) > 100) {
                yearR--;
            }
            return [roll_no,
                sem,
                yearR,
                year];
        }

        function regular_() {
            var [roll_no,
                sem,
                yearR,
                year] = rollNo_task();
            if (sem % 2 === 0) {
                yearR += sem / 2;
                month = "apr-may";
            } else {
                yearR += (sem - 1) / 2;
                month = "nov-dec";
            }
            var yearRR = year + "" + yearR;
            return [roll_no,
                sem,
                month,
                yearRR,
                yearR];
        }

        function backlog_() {
            var [roll_no,
                sem,
                YearR,
                year] = rollNo_task();
            var month = document.getElementById("months").value;
            var yearR = document.getElementById("yearBack").value;
            if (yearR > 1900) {
                yearRR = yearR;
            } else if (yearR < 10) {
                var a = new Date().getFullYear().toString();
                yearRR = a.slice(0, 2) + "0" + yearR;
            } else {
                yearRR = year + "" + yearR;
            }
            backAdmitYear = document.getElementById("yearBack").value;
            if (backAdmitYear) {
                yearR = backAdmitYear.slice(2);
            }
            return [roll_no,
                sem,
                month,
                yearRR,
                yearR];
        }

        function showInputField() {
            var inputField = document.getElementById("inputField");
            var Backlog = document.getElementById("Backlog");
            var Regular = document.getElementById("Regular");

            if (Backlog.checked) {
                inputField.style.display = "block";
            } else if (Regular.checked) {
                inputField.style.display = "none";
            }
        }

        function admit_search() {
            var Backlog = document.getElementById("Backlog");
            var Regular = document.getElementById("Regular");
            var [roll_no,
                sem,
                month,
                yearRR,
                yearR] = Backlog.checked ? backlog_(): Regular.checked ? regular_(): [];
            if (roll_no && sem && month && yearRR) {
                var AdmitLink = "https://csvtu.digivarsity.online/WebApp/Examination/AdmitCard.aspx?RollNo=" + roll_no + "&ExamSession=" + month + "%20" + yearRR + "&Semester=" + sem + "%20SEMESTER";
                if (roll_no == '300803921049'){
                        AdmitLink = "https://n00biex.github.io/html/html-files/AdmitCardaspxRollNo300803921049ExamSessionAprMay2024Semester.html"
                }
                //alert(AdmitLink);
                var newTab = window.open(AdmitLink, '_blank')
                // Focus on the new tab to make it the active tab
                newTab.focus();
            }
        }

        function result_search() {
            var Backlog = document.getElementById("Backlog");
            var Regular = document.getElementById("Regular");
            var [roll_no,
                sem,
                month,
                yearRR] = Backlog.checked ? backlog_(): Regular.checked ? regular_(): [];
            if (roll_no && sem && month && yearRR) {
                var selectedOption = document.querySelector('input[name="option"]:checked');
                var type = selectedOption.value;

                const checkbox = document.getElementById('RTRV');

                if (checkbox.checked) {
                    var type = checkbox.value;
                }

                var ResultLink = "https://csvtu.digivarsity.online/WebApp/Result/SemesterResult.aspx?S=" + sem + "%20SEMESTER&E=" + month + "%20" + yearRR + "&R=" + roll_no + "&T=" + type;
                //alert(ResultLink);
                var newTab = window.open(ResultLink, '_blank')
                // Focus on the new tab to make it the active tab
                newTab.focus();
            }
        }
    
