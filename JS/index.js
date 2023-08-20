function getMonthName(monthIndex) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[monthIndex];
}
function getDayName(dayIndex) {
    const monthNames = [
        "SUN","MON", "TUE", "WED", "THU", "FRI", "SAT"
        
    ];

    return monthNames[dayIndex];
}
// Create a Date object
// const currentDate = new Date();

// Get the current month name
// const currentMonthName = getMonthName(currentDate);
// console.log(currentMonthName);



        let hrs = document.getElementById("hrs");
        let mins = document.getElementById("mins");
        let sec = document.getElementById("sec");
        let day = document.getElementById("day");
        let month = document.getElementById("month");
        let year = document.getElementById("year");
        let dayName = document.getElementById("dayName");
        
        setInterval(() => {
            let getDate = new Date();
            hrs.innerHTML = (getDate.getHours()<10?"0":"") + getDate.getHours();
            mins.innerHTML = (getDate.getMinutes()<10?"0":"") + getDate.getMinutes();
            sec.innerHTML = (getDate.getSeconds()<10?"0":"") + getDate.getSeconds();

            // let monthIndex = getDate.getMonth();
            // let monthName = getMonthName(monthIndex);

            day.innerHTML = (getDate.getDate()<10?"0":"") + getDate.getDate();
            month.innerHTML = getMonthName(getDate.getMonth());
            year.innerHTML = (getDate.getFullYear()<10?"0":"") + getDate.getFullYear();


            // dayName.innerHTML = ;

            dayName.innerHTML = getDayName(getDate.getDay());

        }, 1000);




