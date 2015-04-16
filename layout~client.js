/*
    This file contains the basic structure of every page.
    Page contents go into the body.
    If you want to add additional scripts (like Google Analytics, do it here)
*/
import React from "react";

export default function*(reactClass, request) {
    var props = __initialProps || {};
    var component = React.createFactory(reactClass)(props);
    console.log(component);
    if (props.title)
        document.title = props.title;

    React.render(component, document.getElementsByClassName('app-container')[0]);
}
