const API_URL = "https://spxzdc3y08.execute-api.us-east-1.amazonaws.com/Prod/counter";

// Run once per page load
window.addEventListener("load", () => {
  // Only call API if not already incremented in this session
  if (!sessionStorage.getItem("counterIncremented")) {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log("Visitor count updated:", data.siteviews); // Optional debug
        sessionStorage.setItem("counterIncremented", "true");
      })
      .catch(err => console.error("Error updating counter:", err));
  }
});
