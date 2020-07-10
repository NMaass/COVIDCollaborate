function FrontendDev(details) {
    this.details = details;

    this.say = function () {
        log.add("Front-end Developer" + details);
    };
}

function FrontendDevFactory() {

    this.create = function(details) {
        return new FrontendDev(details);
    };
}

function BackendDev(details) {
    this.details = details;

    this.say = function () {
        log.add("Back-end Developer " + details);
    };
}

function BackendDevFactory() {

    this.create = function(details) {
        return new BackendDev(details);
    };
}

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
}

function run() {
    var developers = [];
    var frontenddevFactory = new FrontendDevFactory();
    var backenddevFactory = new BackendDevFactory();

    developers.push(frontenddevFactory.create("My name is Nicholas "));
    developers.push(backenddevFactory.create("My name is Kaniz Khanom.")));
developers.push(frontenddevFactory.create("My name is Joy Dass"));
developers.push(backenddevFactory.create("My name is birol Guldal."));
developers.push(backenddevFactory.create("My name is Henry Kisthardt."));
developers.push(backenddevFactory.create("My Name is Mitun Das."));


for (var i = 0, len = developers.length; i < len; i++) {
    developers[i].say();
}

log.show();
}
