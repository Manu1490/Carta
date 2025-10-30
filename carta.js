//Function Current Date
function todayDate(){
    const tDate = new Date();
    let tDateSt = tDate.toLocaleDateString("es-AR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    tDateSt = tDateSt.charAt(0).toUpperCase() + tDateSt.slice(1);
    console.log(tDateSt);
    return tDateSt;
}

function showDate(){
    document.getElementById("date").innerHTML = todayDate();   
}

showDate();