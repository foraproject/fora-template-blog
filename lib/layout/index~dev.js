/*
    This file contains the basic structure of every page.
    Page contents go into the body.
    If you want to add additional scripts (like Google Analytics, do it here)
*/
import React from "react";

export default function*(reactClass, args) {
    let props = reactClass.getInitialProps ? (yield* reactClass.getInitialProps.apply(this, args)) : {};
    var component = React.createFactory(reactClass)(props);

    if (props.pageTitle)
        document.title = props.pageTitle;

    React.render(component, document.getElementsByClassName('app-container')[0]);
}
