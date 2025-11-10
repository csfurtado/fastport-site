document.getElementById("feedback-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const link = document.getElementById("link").value.trim();
  const comment = document.getElementById("comment").value.trim();

  if (!name || !comment) return;

  const testimonial = document.createElement("div");
  testimonial.className = "testimonial";
  testimonial.innerHTML = `
    <p><strong>${name}</strong>: ${comment}</p>
    ${link ? `<p><a href="${link}" target="_blank">${link}</a></p>` : ""}
  `;

  document.getElementById("testimonial-list").prepend(testimonial);

  this.reset();
});
