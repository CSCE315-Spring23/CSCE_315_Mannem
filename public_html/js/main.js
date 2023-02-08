const STYLESHEET_KEY = "stylesheet";


function toggleStyleSheet(){
    var styleElement = document.getElementById("lnk");
    const savedStyle = localStorage.getItem("style");
    console.log(savedStyle);
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var fileName = styleElement.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var newFileName = "assets/style2.css"
    if (fileName == "assets/style.css"){
        localStorage.setItem("style", "style2");
        newFileName = "assets/style2.css"
    }else{
        newFileName = "assets/style.css"
        localStorage.setItem("style", "style");
    }

    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElement.setAttribute("href", newFileName);

    localStorage.setItem(STYLESHEET_KEY, newFileName);
}
window.onload = function(){
    var stylesheetValue = localStorage.getItem(STYLESHEET_KEY) || "assets/style2.css";

    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("lnk");

    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", stylesheetValue);


}

