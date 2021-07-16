import "./styles/style.scss"
import { initTheme } from "./theme";


const init = () => {
    initTheme();
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
