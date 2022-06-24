
document.querySelector("#check").addEventListener('click', check)

function check()

    const day = document.querySelector('#day').value.toLowercase()

if (day === "thursday"){
    alert("TIME TO FIGHT RUSSIA");
}
else if (day === "sunday" || day === "monday" || day === "tuesday" 
|| day === "wednesday"){
    alert("SOON COMRADE");
}else{
    alert("GIVE EM HELL CYKA");

}


