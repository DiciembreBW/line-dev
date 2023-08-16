const Host = {
	url(): string {
		return `${window.location.protocol}//${window.location.host}`;
	},
};

export default Host;
