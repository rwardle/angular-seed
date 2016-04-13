angular.module("scripty10")
    .value("eventsLog", [])
    .factory("logEvent", function (eventsLog) {
        return function (event) {
            eventsLog.push(event.name);
        }
    });
