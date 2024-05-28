import { useEffect, useState } from 'react';
import fetchData from './fetchData';
const useFetch = (url, options) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		let isMounted = true;
		fetchData(url, options)
			.then((data) => {
				if (isMounted) {
					setData(data);
					setLoading(false);
				}
			})
			.catch((err) => {
				if (isMounted) {
					setError(err.message);
					setLoading(false);
				}
			});
		return () => {
			isMounted = false;
		};
	}, [url, options]);

	return {
		data,
		loading,
		error,
	};
};

export default useFetch;
