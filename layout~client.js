/*
    This file contains the basic structure of every page.
    Page contents go into the body.
    If you want to add additional scripts (like Google Analytics, do it here)
*/
import React from "react";

export default function*(reactClass, request) {
    var props = (__initialProps) ? JSON.parse(__initialProps) : {};
    var component = React.createFactory(reactClass)(props);

    if (props.title)
        document.title = props.title;

    React.renderComponent(component, document.getElementsByClassName('app-container')[0]);
}
