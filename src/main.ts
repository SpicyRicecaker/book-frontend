import "./style.scss"
const request_page = async (direction: string) => {
  // Basically request to server to load the next page
  let res = await fetch(`/api/${direction}`);
  let text = await res.text();
  console.log(text);
  // Then reload after page has successfully reloaded
  location.reload();
};
document.getElementById("next_chapter")?.addEventListener("click", async (_) => {
  request_page("next_chapter");
});
document.getElementById("prev_chapter")?.addEventListener("click", async (_) => {
  request_page("prev_chapter");
});
