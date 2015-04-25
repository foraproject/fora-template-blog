/*
    This file contains the basic structure of every page.
    Page contents go into the body.
    If you want to add additional scripts (like Google Analytics, do it here)
*/
import React from "react";

export default function*(reactClass, request) {
    let props;
    if (typeof __initialProps !== "undefined") {
        props = __initialProps;
        __initialProps = undefined;
    } else {
        if (reactClass.getInitialPropsViaAjax) {
            props = JSON.parse(yield reactClass.getInitialPropsViaAjax(request));
        }
    }
    let component = React.createFactory(reactClass)(props);

    if (props.title)
        document.title = props.title;

    React.render(component, document.getElementsByClassName('app-container')[0]);
}
