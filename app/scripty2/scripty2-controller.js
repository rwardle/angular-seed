function ScriptyController() {
	this.authorized = false;

    this.toggle = function() {
        this.authorized = !this.authorized;
    };
};
