// Step 1 — Get Elements
const filterInput = document.getElementById("filterInput");
const articles = document.querySelectorAll("#articles li");

// Step 2 - Store original text
articles.forEach((article) => {
  article.dataset.originalText = article.textContent;
});

// Step 3 — Listen to Typing
filterInput.addEventListener("input", function () {
    // Step 4 — Convert to Lowercase
  const searchText = this.value.toLowerCase().trim();

  articles.forEach((article) => {
    const originalText = article.dataset.originalText;
    const lowerText = originalText.toLowerCase();

    // If input is empty
    if (searchText === "") {
      article.style.display = "list-item";
      article.innerHTML = originalText;
      return;
    }

    // Step 4 — Convert to Lowercase
    if (lowerText.includes(searchText)) {
      article.style.display = "list-item";

      // Step 6 — Highlight matched text
      const regex = new RegExp(`(${searchText})`, "gi");

      article.innerHTML = originalText.replace(
        regex,
        `<span class="highlight">$1</span>`
      );
    } else {
      article.style.display = "none";
    }
  });
});