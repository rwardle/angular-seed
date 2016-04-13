angular.module('scripty10')
    .controller("LocationController", function($scope, $location) {
        this.location = $location.absUrl();
    })
    .controller("HomeController", function ($location, $rootScope, eventsLog, logEvent) {
        this.location = $location.absUrl();
        this.link = {path: "#/events", title: "Events"};
        eventsLog.push("HomeController: " + $location.path());

        $rootScope.$on("$routeChangeStart", logEvent);
        $rootScope.$on("$locationChangeStart", logEvent);
        $rootScope.$on("$locationChangeSuccess", logEvent);
        $rootScope.$on("$routeChangeSuccess", logEvent);

        this.eventsLog = eventsLog;
    })
    .controller("EventsController", function (eventsLog, $location) {
        this.location = $location.absUrl();
        this.link = {path: "#/home", title: "Home"};
        eventsLog.push("EventsController: " + $location.path());
        this.eventsLog = eventsLog;
    });
