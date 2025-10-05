// Projects page script neutralized - redirect back to homepage
document.addEventListener("DOMContentLoaded", function () {
  // If someone opens the old projects page, send them home
  if (location.pathname.indexOf("/projects") !== -1) {
    // use replace so back doesn't return here
    location.replace("/");
  }
});
