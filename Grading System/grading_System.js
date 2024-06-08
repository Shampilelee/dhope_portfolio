/*
    Grading System
*/
const first_Name = document.getElementById("first_Name");
const last_Name = document.getElementById("last_Name");
const assignment_Marks = document.getElementById("assignment_Marks");
const test_Marks = document.getElementById("test_Marks");
const midSem_Marks = document.getElementById("midSem_Marks");
const exams_Marks = document.getElementById("exams_Marks");

// DISABLE DEFAULT FORM PAGE RELOAD, WHICH TAKES RESULTS OFF SCREEN
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
  
    // Handle form data or perform other actions here
    // For example, you can use AJAX to submit the form data without page reload
});

// Buttons
const submit_Btn = document.getElementById("submit_Btn");
const reset_Btn = document.getElementById("reset_Btn");

// RESULTS
let results_FulName = document.createElement("p");
document.getElementById("collect_Data").appendChild(results_FulName);

let results_Marks = document.createElement("h3");
document.getElementById("collect_Data").appendChild(results_Marks);

let grade_Letter = document.createElement("h1");
document.getElementById("collect_Data").appendChild(grade_Letter);


submit_Btn.addEventListener('click', function() {

    if (
        first_Name.value === "" || 
        last_Name.value === "" ||
        assignment_Marks.value === "" ||
        test_Marks.value === "" ||
        midSem_Marks.value === "" ||
        exams_Marks.value === ""
    ) {

        results_FulName.textContent = "Fill All Fields and press again";

    } else {

        // CONVERT MARK FEILDS TO NUMBERS
        let assign_Mk = Number(assignment_Marks.value); 
        let tst_Mk = Number(test_Marks.value); 
        let midsem_Mk = Number(midSem_Marks.value); 
        let exams_Mk = Number(exams_Marks.value);

        // CHECK IS USER ENTERED INCORRECT NUMBERS
        if (
            assign_Mk > 100 ||
            assign_Mk <= -0 ||
            tst_Mk > 100 ||
            tst_Mk <= -0 ||
            midsem_Mk > 100 ||
            midsem_Mk <= -0 ||
            exams_Mk > 100 ||
            exams_Mk <= -0
        ) {
            results_FulName.textContent = "Marks Can't be LESS than 0 Or MORE than 100";
        } else {
            // APPLING THE ALGORIDIUM FOR GRADING SYSTEM
            assign_Mk = assign_Mk / 10;
            tst_Mk = tst_Mk / 10;
            midsem_Mk = midsem_Mk * 4 / 20;
            exams_Mk = (exams_Marks.value * 12 / 60) * 3;

            // ASSIGINING TOTAL
            let tot_Mk = assign_Mk + tst_Mk + midsem_Mk + exams_Mk;
            
            // DISPLAY USER NAME 
            results_FulName.textContent = `${first_Name.value.toUpperCase()} ${last_Name.value.toUpperCase()}`;
            results_Marks.textContent = tot_Mk;
            
            
            // DISPLAY Grade Letter
            switch (true) {
                case tot_Mk > 90:
                    grade_Letter.textContent = "A";
                    break;
                case tot_Mk >= 80:
                    grade_Letter.textContent = "B";
                    break;
                case tot_Mk >= 70:
                    grade_Letter.textContent = "C";
                    break;
                case tot_Mk >= 50:
                    grade_Letter.textContent = "D";
                    break;
                case tot_Mk < 50:
                    grade_Letter.textContent = "FAIL";
                    break;
            }
        }
    }
})


reset_Btn.addEventListener('click', () => {
    results_FulName.textContent = "";
    results_Marks.textContent = "";
    grade_Letter.textContent = "";
})

































