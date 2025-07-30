document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("input", function () {
    const keyword = searchBar.value.toLowerCase();
    const courses = document.querySelectorAll(".course-card");

    courses.forEach(course => {
      const title = course.querySelector("h3").textContent.toLowerCase();
      if (title.includes(keyword)) {
        course.style.display = "block";
      } else {
        course.style.display = "none";
      }
    });
  });
});
