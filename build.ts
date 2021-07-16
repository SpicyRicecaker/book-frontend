import { mkdir, rm, rename } from "fs/promises";
import path from "path";

(async () => {
    // Declare our backend path
    let bookBackend: string = path.resolve(__dirname, "..", "..", "book-backend");
    try {
        // Make ../ txt file

        // Ensure it exists
        await mkdir(bookBackend, { recursive: true });
        // Delete assets (force ignores exceptions)
        await rm(path.join(bookBackend, "assets"), { force: true, recursive: true });
        // Move assets over
        await rename(path.join(__dirname, "assets"), path.join(bookBackend, "assets"));

        let templates: string = path.join(bookBackend, "templates");
        // Clean out tempaltes folder
        await rm(templates, { force: true, recursive: true });
        // Remake it
        await mkdir(templates, { recursive: true });
        // Move index html over to template folder
        await rename(path.join(__dirname, "index.html"), path.join(templates, "index.html.hbs"));
        // Move books html over to template folder
        await rename(path.join(__dirname, "books.html"), path.join(templates, "books.html.hbs"));
    } catch (err) {
        throw err;
    }
})();