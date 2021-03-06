import "./styles/style.scss"
import { initTheme } from "./theme";

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

  // Add some filler text
  window.addEventListener("load", () => document.body.style.display = "block", { once: true });
}

// // Test func
// (async () => {
//   let book = document.getElementById("book");
//   if (!book) { return };
//   // let content = await fetch()
//   let t = text.split("\n").join("<br><br>");;

//   book.innerHTML = t;
// })();

init();
