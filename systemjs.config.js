(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            "npm:": "node_modules/"
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: "app",

            // other libraries
            "underscore": "npm:underscore/underscore.js",
        },
        packages: {
            app: {
                main: "./background.js",
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);

System.import("app").catch(function (err) {
    console.error(err);
});