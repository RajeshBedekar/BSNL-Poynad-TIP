document.getElementById("entryForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    let name = document.getElementById("fullname").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let location = document.getElementById("location").value;

    alert(`Form Submitted ✅\n
Name: ${name}\n
Mobile: ${mobile}\n
Email: ${email}\n
Address: ${address}\n
Location: ${location}`);

    this.reset();
});
