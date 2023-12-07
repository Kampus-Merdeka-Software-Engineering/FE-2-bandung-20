document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();
    var isValid = validateForm();

    if (isValid) {
        sendForm();
    }
});

function sendForm() {
    const form = document.getElementById("bookingForm");
    const formData = new FormData(form);
    const formProps = {};

    // Convert FormData to an object
    formData.forEach((value, key) => {
        formProps[key] = value;
    });

    // console.log(formProps, "ini formProps");

    // Send data to the server
    fetch("https://be-2-bandung-20-production.up.railway.app/list", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formProps),
    })
        .then(response => response.json())
        .then(data => {
            console.log("success:", data);
            showAlertAndRedirect();
        })
        .catch(error => {
            console.error(error);
        });
}

function validateForm() {
    // Validation logic here...
    var name = document.getElementById("name").value;
    if (name === "") {
        alert("Mohon isi nama Anda.");
        return false;
    }

    // Validasi email
    var email = document.getElementById("email").value;
    if (email === "") {
        alert("Mohon isi alamat email Anda.");
        return false;
    }

    // Validasi nomor telepon
    var phoneNumber = document.getElementById("phone").value;
    if (!/^\d+$/.test(phoneNumber) || phoneNumber.length < 9) {
        alert("Mohon isi nomor telepon dengan benar (tanpa huruf atau karakter khusus).");
        return false;
    }

    // Validasi formulir lainnya di sini...


    return true; // Form is considered valid for now
}

function showAlertAndRedirect() {
    alert("Terima kasih sudah membooking!");
    window.location.href = "index.html";
}
