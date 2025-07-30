const courses = [
  {
    title: "HTML & CSS Basics",
    instructor: "Jane Doe",
    category: "programming",
    level: "beginner",
    price: 0,
    rating: 4.5,
    popularity: 95,
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "Advanced JavaScript",
    instructor: "John Smith",
    category: "programming",
    level: "advanced",
    price: 49,
    rating: 4.8,
    popularity: 120,
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "UI/UX Design",
    instructor: "Ava Kim",
    category: "design",
    level: "intermediate",
    price: 35,
    rating: 4.3,
    popularity: 88,
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "Digital Marketing 101",
    instructor: "Leo Turner",
    category: "marketing",
    level: "beginner",
    price: 0,
    rating: 4.1,
    popularity: 70,
    image: "https://via.placeholder.com/300x150",
  }
];

function displayCourses(list) {
  const container = document.getElementById("courseContainer");
  container.innerHTML = list.map(course => `
    <div class="course-card">
      <img src="${course.image}" alt="${course.title}" />
      <h3>${course.title}</h3>
      <p>Instructor: ${course.instructor}</p>
      <p class="price">${course.price === 0 ? "Free" : "$" + course.price}</p>
      <p>Rating: ${course.rating} ★</p>
    </div>
  `).join("");
}

function applyFilters() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const level = document.getElementById("levelFilter").value;
  const price = document.getElementById("priceFilter").value;
  const sort = document.getElementById("sortSelect").value;

  let filtered = courses.filter(course => {
    return (
      course.title.toLowerCase().includes(search) &&
      (category === "" || course.category === category) &&
      (level === "" || course.level === level) &&
      (price === "" || (price === "free" && course.price === 0) || (price === "paid" && course.price > 0))
    );
  });

  if (sort === "popularity") filtered.sort((a, b) => b.popularity - a.popularity);
  if (sort === "newest") filtered.reverse(); // simple reverse for example
  if (sort === "price") filtered.sort((a, b) => a.price - b.price);

  displayCourses(filtered);
}

document.querySelectorAll("input, select").forEach(el => {
  el.addEventListener("input", applyFilters);
});

displayCourses(courses);
