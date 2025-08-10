function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "-220px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-220px";
  }
}
