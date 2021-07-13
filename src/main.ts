import "./style.scss"

const init = () => {
  // Initialize theme

  // First check if localstorage holds it and set accordingly
  let theme = localStorage.getItem("theme") || (document.getElementById("theme") as HTMLSelectElement).value;

  // document.getElementById("theme")?.addEventListener("change", (_) => {
  //   console.log((this as HTMLSelectElement).value);
  //   localStorage.setItem("theme", "123")
  // });

  document.getElementById("theme")?.addEventListener("change", function () {
    theme = (this as HTMLSelectElement).value
  });

  const request_page = async (direction: string) => {
    // Basically request to server to load the next page
    let res = await fetch(`/api/${direction}`);
    let text = await res.text();
    console.log(text);
    // Then reload after page has successfully reloaded
    location.reload();
  };
  document.getElementById("next_chapter")?.addEventListener("click", async () => {
    request_page("next_chapter");
  });
  document.getElementById("prev_chapter")?.addEventListener("click", async () => {
    request_page("prev_chapter");
  });

  function update_theme () {
    localStorage.setItem("theme", theme);
    document.getElementById("content")?.
  }
}

init();
