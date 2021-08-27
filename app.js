
console.log("text1")
localStorage.setItem("password", "123456")
localStorage.setItem("email", "abc@gmail.com")
document.getElementById('btnSignIn').addEventListener('click', function () {

    console.log("text");
    if (document.getElementById("ipPw").value == localStorage.password && document.getElementById("ipSignin").value == localStorage.email) {
        window.location.href = "./home.html";
        localStorage.setItem("rfEmail", document.getElementById("ipSignin").value)
        
    }else{
        alert('sai tk hoac mk')
    localStorage.removeItem("rfEmail", document.getElementById("ipSignin").value)
    }
})
if (localStorage.rfEmail != undefined) {
    document.getElementById("ipSignin").value = localStorage.rfEmail;
}


