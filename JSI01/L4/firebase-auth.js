import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js'

let emailSignUp = document.getElementById("email-signup")
let formSignUP = document.getElementById("signup")
let passwordSignUp = document.getElementById("password-signup")
let userSignUP = document.getElementById("user-signup")

formSignUP.addEventListener("submit", (e) => {
    e.preventDefault()
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, emailSignUp.value, passwordSignUp.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("Dang ki thanh cong")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
})


const signIn = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Dang nhap thanh cong")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Dang nhap that bai")
        });
}

let formSignIn = document.getElementById("form2")

formSignIn.addEventListener("submit", (e) => {
    e.preventDefault()
    let email = document.getElementById("email-signin").value
    let password = document.getElementById("password-signin").value
    signIn(email, password)
    console.log(email)
})





