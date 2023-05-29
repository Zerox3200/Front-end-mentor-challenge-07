// Get the input of name
let Full_Name = document.querySelector("#name_input");
let Subnetting = document.querySelector("#Confirm");
let Full_Number = document.querySelector("#Number");
let Date_days = document.querySelector("#Days");
let Date_months = document.querySelector("#Months");
let CVC = document.querySelector("#CVC_access");
// Get all the statments of alerts...
let Error_alert = document.querySelector("#Name_alert_message");
let Error_alert2 = document.querySelector("#Number_alert_message");
let Error_alert3 = document.querySelector("#alert3")
let Error_alert4 = document.querySelector("#alert4")
//Get container one...
let container1 = document.querySelector(".Main_pt2_form");
let Complete_container = document.querySelector(".Complete");


Subnetting.addEventListener("click", function (event) {
    // Validate name input value...
    if ((/\w+\s\w+/gi).test(Full_Name.value) === true) {
        let section1 = document.querySelector("#Full_Naming");
        section1.innerHTML = Full_Name.value;
        let input_name = document.querySelector("#name_input");
        input_name.classList.remove("Alerting");
        // Show alert message...
        Error_alert.classList.remove("show");
        Error_alert.classList.add("hide");
    } else {
        let input_name = document.querySelector("#name_input");
        input_name.classList.add("Alerting");
        Error_alert.classList.add("show");
        Error_alert.classList.remove("hide");
        //Prevent the button to do any action
    }

    //Validate number input value...
    if (
        (/[0-9][0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]\s[0-9][0-9][0-9][0-9]$/gim).
            test(Full_Number.value) === true) {
        let section2 = document.querySelector("#Full_Numbering");
        section2.innerHTML = Full_Number.value;
        Full_Number.classList.remove("Alerting")
        // Show alert message...
        Error_alert2.classList.remove("show");
        Error_alert2.classList.add("hide");
    } else {
        let input_name = document.querySelector("#Number");
        input_name.classList.add("Alerting")
        // Show alert message...
        Error_alert2.classList.add("show");
        Error_alert2.classList.remove("hide");
        //Prevent the button to do any action
    }

    //Validate Days date from input value...
    if ((/[1-9]+/gi).test(Date_days.value) === true) {
        let section3_Days = document.querySelector("#Day_test");
        //Check for the days..
        if (Date_days.value <= 9) {
            section3_Days.innerHTML = "";
            section3_Days.innerHTML = `0${Date_days.value}/`;
        } else if (Date_days.value >= 10 && Date_days.value <= 31) {
            section3_Days.innerHTML = "";
            section3_Days.innerHTML = `${Date_days.value}/`;
        } else {
            Error_alert3.classList.add("show");
            Error_alert3.classList.remove("hide");
        }
    } else {
        Error_alert3.classList.add("show");
        Error_alert3.classList.remove("hide");
    }

    //Validate Months date from input value...
    if ((/[0-9]+/gi).test(Date_months.value) === true) {
        let section3_Months = document.querySelector("#Month_test");
        if (Date_months.value <= 2023) {
            section3_Months.innerHTML = "";
            section3_Months.innerHTML = Date_months.value;
            Error_alert3.classList.remove("show");
            Error_alert3.classList.add("hide");
        } else {
            Error_alert3.classList.add("show");
            Error_alert3.classList.remove("hide");
        }
    }

    //Validate CVC code...
    if ((/[0-9][0-9][0-9]$/gim).test(CVC.value) === true) {
        if (CVC.value.length === 3) {
            let section4 = document.querySelector("#CVC_test");
            section4.innerHTML = "";
            section4.innerHTML = CVC.value;
            Error_alert4.classList.remove("show");
            Error_alert4.classList.add("hide");
        } else {
            Error_alert4.classList.add("show");
            Error_alert4.classList.remove("hide");
        }
    } else {
        let Error_alert4 = document.querySelector("#alert4")
        Error_alert4.classList.add("show");
        Error_alert4.classList.remove("hide");
    }

    //Complete the operation...
    if (Error_alert.classList.contains("show") || Error_alert2.classList.contains("show")
        || Error_alert3.classList.contains("show") ||
        Error_alert4.classList.contains("show")) {


        container1.classList.add("visible");
        container1.classList.remove("Remove_smoothly");

    } else if (Error_alert.classList.contains("hide") ||
        Error_alert2.classList.contains("hide")
        || Error_alert3.classList.contains("hide") ||
        Error_alert4.classList.contains("hide")) {


        container1.classList.add("Remove_smoothly");
        //Get the remove in smooth way better than doing it directly
        setTimeout(function () {
            container1.classList.add("Remove");
        }, 500)
        container1.classList.remove("visible");
        setTimeout(function () {
            Complete_container.classList.remove("Remove");
            Complete_container.classList.add("visible");
        }, 520)

    }
})