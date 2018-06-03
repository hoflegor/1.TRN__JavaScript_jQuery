var globalName = 'Tomek';

function sayMyName(name) {
    var greeting = 'Hello';
    name = greeting + ' ' + name;
    debugger;
    return name;
}

function sayGlobalName() {
    var greeting = 'Hi';
    var name = greeting + ' ' + globalName;
    return name;
}

sayGlobalName();
sayMyName("Tom");