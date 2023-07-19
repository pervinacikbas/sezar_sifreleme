function encryptPassword() 
{
    const inputPassword = document.getElementById("inputPassword");
    const inputCompile = document.getElementById("inputCompile");
    const password = inputPassword.value;

    if (password === "") {
        alert("Please enter a password!");
        return;
    }

    let encryptedPassword = "";
    for (let i = 0; i < password.length; i++) {
        const charCode = password.charCodeAt(i);
        encryptedPassword += String.fromCharCode(charCode + 5);
    }

    inputCompile.value = encryptedPassword;
}

function decryptPassword() 
{
    const inputPassword = document.getElementById("inputPassword");
    const inputCompile = document.getElementById("inputCompile");
    const compile = inputCompile.value;

    if (compile === "") {
        alert("Please enter a compile of password!");
        return;
    }

    let decryptedPassword = "";
    for (let i = 0; i < compile.length; i++) {
        const charCode = compile.charCodeAt(i);
        decryptedPassword += String.fromCharCode(charCode - 5);
    }

    inputPassword.value = decryptedPassword;
}

function clearPassword() {
    const inputPassword = document.getElementById("inputPassword");
    inputPassword.value = "";
}

function clearCompile() {
    const inputCompile = document.getElementById("inputCompile");
    inputCompile.value = "";
}