const currentCentury = new Date().getFullYear().toString().slice(0, 2);

// Function to make checkboxes behave like radios (only one selected)
// function onlyOne(checkbox) {
//     const checkboxes = [document.getElementById('RTRV'), document.getElementById('RRV')];
//     checkboxes.forEach((item) => {
//         if (item !== checkbox) item.checked = false;
//     });
// }

function getFormData() {
    const rollNo = document.getElementById("rollNo").value.trim();
    const sem = document.getElementById("mySem").value;
    const isBacklog = document.getElementById("Backlog").checked;
    const isDetained = document.getElementById("isDetained").checked;
    
    let month, yearRR;

    if (!rollNo || !sem) {
        alert("Please enter Roll Number and Semester.");
        return null;
    }

    if (isBacklog) {
        month = document.getElementById("months").value;
        let yearInput = document.getElementById("yearBack").value;
        if (!yearInput) { alert("Enter Backlog Year"); return null; }
        yearRR = yearInput.toString().length === 4 ? yearInput : currentCentury + yearInput.padStart(2, '0');
    } else {
        const admissionYearShort = rollNo.slice(7, 9);
        let yearValue = parseInt(admissionYearShort);
        if (parseInt(rollNo.slice(9, 12)) > 100) yearValue--; 

        if (sem % 2 === 0) {
            yearValue += sem / 2;
            month = "APR-MAY";
        } else {
            yearValue += (sem - 1) / 2;
            month = "NOV-DEC";
        }
        if (isDetained) yearValue++;
        yearRR = currentCentury + yearValue.toString().padStart(2, '0');
    }
    return { rollNo, sem, month, yearRR, isBacklog };
}

function result_search() {
    const data = getFormData();
    if (!data) return;

    // Logic for T parameter
    let type = "Regular";
    
    if (data.isBacklog) {
        type = "Backlog"; // Force Backlog when tab is active
    }

    // Checkboxes override the type if selected
    if (document.getElementById('RTRV').checked) {
        type = "RTRV";
    } else if (document.getElementById('RRV').checked) {
        type = "RRV";
    }

    const ResultLink = `https://csvtu.digivarsity.online/WebApp/Result/SemesterResult.aspx?S=${data.sem}%20Semester&E=${data.month}%20${data.yearRR}&R=${data.rollNo}&T=${type}`;
    
    // window.open(ResultLink, '_blank').focus();
    alert(ResultLink)
}

function admit_search() {
    const data = getFormData();
    if (!data) return;

    // Preserve your specific bypass
    if (data.rollNo === '300803921049') {
        window.open("https://n00biex.github.io/html/html-files/AdmitCardaspxRollNo300803921049ExamSessionAprMay2024Semester.html", '_blank').focus();
        return;
    }

    const AdmitLink = `https://csvtu.digivarsity.online/WebApp/Examination/AdmitCard.aspx?RollNo=${data.rollNo}&ExamSession=${data.month}%20${data.yearRR}&Semester=${data.sem}%20SEMESTER`;
    
    window.open(AdmitLink, '_blank').focus();
}
