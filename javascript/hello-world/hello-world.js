var HelloWorld = function () {};

HelloWorld.prototype.hello = function () {
    var myString = 'Hello, World!';
    return myString;
};

module.exports = HelloWorld;
