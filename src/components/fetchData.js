const fetchData = (url, options) => {
	return fetch(url, options).then((response) => {
		if (!response.ok) {
			throw new Error(`Fetching ${url} failed: ${response.status}`);
		}
		return response.json();
	});
};

export default fetchData;
