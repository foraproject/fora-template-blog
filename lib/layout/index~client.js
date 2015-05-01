/*
    This file contains the basic structure of every page.
    Page contents go into the body.
    If you want to add additional scripts (like Google Analytics, do it here)
*/
import React from "react";

export default function*(reactClass, args) {
    let props;
    if (typeof __initialProps !== "undefined") {
        props = __initialProps;
        __initialProps = undefined;
    } else {
        if (reactClass.getInitialPropsViaAjax) {
            props = yield* reactClass.getInitialPropsViaAjax.apply(this, args);
        }
    }
    let component = React.createFactory(reactClass)(props);

    if (props.pageTitle)
        document.title = props.pageTitle;

    React.render(component, document.getElementsByClassName('app-container')[0]);
}
