function expandArticleBody() {
  const expandButtons = document.querySelectorAll(".expand_button");
  for (let btn of expandBtns) {
    btn.addEventListener("click", function (event) {
      const button = event.target;
      const article = button.closest("article");
      const articleBody = article.querySelector(".article_body");

      if (button.innerText === "V") {
        button.innerText = ">";
        articleBody.style.display = "none";
      } else {
        button.innerText = "V";
        articleBody.style.display = "block";
      }
    });
  }
}

function highlightArticle() {
  const highlightBtns = document.querySelectorAll(".expand_button");
  for (let btn of highlightBtns) {
    btn.addEventListener("click", function (event) {
      const btn = event.target;
      const article = button.closest("article");
      if (btn.innerText === "+") {
        btn.innerText = "-";
        article.classList.add("highlight");
      } else {
        btn.innerText = "+";
        article.classList.remove("highlight");
      }
    });
  }
}
