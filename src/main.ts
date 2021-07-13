import "./style.scss"

const initTheme = () => {
  let themeElement = document.getElementById("theme");
  if (!themeElement) { return }
  // First check if localstorage holds it and set accordingly
  let theme = localStorage.getItem("theme") || (themeElement as HTMLSelectElement)?.value;
  // Set class accordingly
  let content = document.getElementById("content");
  if (!content) { return }
  content.className = theme;

  themeElement.addEventListener("change", function () {
    // On any change, update local theme 
    theme = (this as HTMLSelectElement).value
    update_theme();
  });

  // Based on current theme, updates localstorage and content
  function update_theme() {
    localStorage.setItem("theme", theme);
    let content = document.getElementById("content");
    if (!content) { return }
    content.className = theme;
  }
}

const initRequests = () => {
  const request_page = async (direction: string) => {
    // Basically request to server to load the next page
    let res = await fetch(`/api/${direction}`);
    let text = await res.text();
    console.log(text);
    // Then reload after page has successfully reloaded
    window.scrollTo(0, 0);
    location.reload();
  };
  document.getElementById("next_chapter")?.addEventListener("click", async () => {
    request_page("next_chapter");
  });
  document.getElementById("prev_chapter")?.addEventListener("click", async () => {
    request_page("prev_chapter");
  });
}

const init = () => {
  // Initialize theme
  initTheme();

  // Initalize req
  initRequests();

  window.addEventListener("load", () => document.body.style.display = "block", { once: true });
}

init();
