$(document).ready(function () {
    $(".input__btn").click(saveUserData);
})
 
let saveUserData = () => {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("last-name").value;

    if (name != "" && lastName !=""){
        localStorage.setItem("name",name);
        localStorage.setItem("lastName",lastName);
        document.location.href = "pickTest.html";
    }
    else {
        alert("заполните поля")
    }
        
}