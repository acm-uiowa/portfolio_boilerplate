# Portfolio Boilerplate Code | ACM @UIowa 2023

## Initializing your Project From Scratch (skip this if you clone this repository)

1. Create **3** files:
    - `index.html`
    - `styles.css`
    - `script.js`
    - *note*: only `index.html` is mandatory, the other two files can be named whatever

2. In `index.html` type: `html:5` and hit enter
    - You should now see:
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
    </body>
    </html>
    ```

## Linking css file to html

In between the two `<head>` and `</head>` tags, add the line: 

```html
<link rel="stylesheet" href="./styles.css">
```

In your `script.css` file, add these lines to the top:

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

This is just standard procedure for any css file


## Linking javascript to html

In between the two `<body>` and `</body>` tags, at the very end right before the `</body>`add the line:

```html
<script src="./script.js"></script>
```

## Running your site

If using VSCode go to extensions and install "Live Server"

Else go to your file explorer and open your  `index.html` file in chrome or whatever browser you use.

If you make a change and nothing happens, just refresh the page, changes should take place.

## Hosting your new site

Google how to do this, many resources for a variety of ways

**Free ways to host**:
1. Github pages
2. Netlify
3. Vercel

Find youtube videos or documentation online on how to host your site

## Purchase a domain

1. Google domains

Again, find online resources on where to purchase and how to setup a domain on whatever site you used to host
