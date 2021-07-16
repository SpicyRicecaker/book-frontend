export function initTheme() {
    let themeElement = document.getElementById("theme");
    if (!themeElement) { return }
    // First check if localstorage holds it and set accordingly
    let theme = localStorage.getItem("theme") || (themeElement as HTMLSelectElement)?.value;
    // Set class accordingly
    let content = document.getElementById("content");
    if (!content) { return }
    content.className = theme;
    themeElement.className = theme;
    (document.getElementById("theme-circle") as HTMLSelectElement).className = theme;


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
        (themeElement as HTMLElement).className = theme;
        (document.getElementById("theme-circle") as HTMLSelectElement).className = theme;
    }
}