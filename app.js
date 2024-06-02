var burger = {
    name: 'bacon burger',
    size: 1 /* sizes.medium */,
};
function greet(name) {
    console.log("Hello, ".concat(name !== null && name !== void 0 ? name : "Alisha", "!"));
}
function sum(values) {
    return values.reduce(function (a, b) {
        return a + b;
    }, 0);
}
