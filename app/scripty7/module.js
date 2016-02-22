angular.module("scripty7", [])
    .filter("smiley", function() {
        return function(text, emoticon) {
            return emoticon + " " + text + " " + emoticon;
        };
    })
    .value("locales", {
        "de": { greeting: "guten Tag"},
        "en-us": { greeting: "howdy"},
        "fr": { greeting: "bonjour"}
    })
    .filter("localize", function(locales, $locale) {
        return function(key) {
            var locale = locales[$locale.id] || locales["en-us"];
            return locale[key];
        };
    });