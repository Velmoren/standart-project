const sliceNumbers = (str) => {
	if (str.length > 40) {
		return str.slice(0, 40) + " ...";
	}

	return str;
};

const sliceGosts = (str) => {
	return str.split("/")[0];
};

export { sliceNumbers, sliceGosts };
