/*
    This file contains the basic structure of every page.
    Page contents go into the body.
    If you want to add additional scripts (like Google Analytics, do it here)
*/
import React from "react";

export default function*(reactClass, args) {
    var props;

    if (reactClass.getInitialProps) {
        props = yield* reactClass.getInitialProps.apply(this, args);
    }

    props = props || {};
    var component = React.createFactory(reactClass)(props);

    this.body = `
<!DOCTYPE html>
<html>
    <head>
        <title>${props.title}</title>
        <link href="/css/main.css" rel="stylesheet" media="screen" />
        <script>
            var __initialProps = ${JSON.stringify(props)};
        </script>
        <script src="/vendor/js/browser-polyfill.js"></script>
        <script src="/vendor/js/react.js"></script>
        <script src="/js/app.bundle.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body class="${props.pageName}">
        <div class="app-container">
        ${React.renderToString(component)}
        </div>
    </body>
</html>
    `;
}
