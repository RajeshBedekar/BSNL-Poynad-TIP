function handleOFCSubmit() {
  const location = document.getElementById("location").value;
  const length = document.getElementById("cable-length").value;
  const status = document.getElementById("status").value;
  const remarks = document.getElementById("remarks").value;

  if (location && length && status) {
    console.log("Submitted Data:", {
      location,
      length,
      status,
      remarks
    });

    document.getElementById("result-message").textContent = "OFC Data submitted successfully!";
    return false; // Prevent page reload
  }

  return false;
}
