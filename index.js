const UserName = prompt("User name")
console.log(UserName)

if (UserName) {
    alert("Hello, " + UserName + "! How are you?")
}
else{
    alert("Error! User name is required!")
}