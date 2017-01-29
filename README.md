Trello Board Customizer
====================
The extension for Chrome browser to customize your Trello Board's background.

Installation
-----

- `$ npm install`
- `$ npm run gulp`
- Go to `chrome://extensions/` tab.
- Enable the developer mode at top right.
- Click `Load unpacked extension...` and select the `dist` folder.
- Enjoy!

Usage
-----

In your board add new card with this content:

```json
@@boardConfig={
    "background": {
        "color":"<color_value>",
        "image":"<image_url>"
    }
}
```

License
-----

[MIT](http://opensource.org/licenses/MIT)