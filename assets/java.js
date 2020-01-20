function Replace(selector, context) {
    let element = document.querySelector(selector);
    let template = Handlebars.compile(element.innerHTML);
    element.innerHTML = template(context);
}
