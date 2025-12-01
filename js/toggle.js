
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const pageContent = document.getElementById("page-content");
  const toggleBtn = document.getElementById("sidebarToggle");

  // If a page doesn't have the toggle (rare), skip
  if (!sidebar || !pageContent || !toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    pageContent.classList.toggle("expanded");

    // Save state in localStorage
    const isClosed = sidebar.classList.contains("collapsed");
    localStorage.setItem("sidebar_state", isClosed ? "closed" : "open");
  });

  // Load the previous state
  const saved = localStorage.getItem("sidebar_state");
  if (saved === "closed") {
    sidebar.classList.add("collapsed");
    pageContent.classList.add("expanded");
  }
});
