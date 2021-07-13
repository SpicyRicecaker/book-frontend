# Automate

First rename index to `{{{}}}` form, then

```shell
# Build proj
pnpm build
# Move assets to server location (will also have to accompany the actual server)
mv dist/assets ../book-backend
# Move index.html.hbs to templates folder, rename to hbs
mv dist/index.html ../book-backend/templates/index.html.hbs
```

Overall, to run the final server, the following external resources will be needed (along w/ server binary)

- `*.toml` file w/ book config
- `/templates/index.html.hbs` folder & template
- `/assets/*.js` and `/assets/*.css` for javascript & css
