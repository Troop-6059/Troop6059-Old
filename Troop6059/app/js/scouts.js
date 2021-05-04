function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = url;  // set its src to the provided URL

    document.head.appendChild(script);  // add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}

/* Extract from scouting.org */
dynamicallyLoadScript("https://www.scouting.org/wp-content/themes/bsa-child/media/vendors/jquery/jquery-3.4.1.min.js?ver=5.7.1");
dynamicallyLoadScript("https://www.scouting.org/wp-content/themes/bsa-child/media/js/nav.min.js?ver=5.7.1");