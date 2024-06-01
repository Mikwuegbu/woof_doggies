import { searchicon, woofBtn } from '../assets/assets';
import useFetch from '../components/useFetch';
import { useState, useEffect } from 'react';

const Dogs = () => {
	const dogApi = 'https://api.thedogapi.com/v1/images/search?limit=10';
	const { data, loading } = useFetch(dogApi);
	const [searchValue, setsearchValue] = useState('');
	const [filteredData, setfilteredData] = useState([]);

	const inputHandler = (e) => {
		setsearchValue(e.target.value);
	};

	//for re-rendering at change of search value
	useEffect(() => {
		setfilteredData(
			data.filter((item) => {
				return item.url.toLowerCase().includes(searchValue.toLowerCase());
			})
		);
	}, [data, searchValue]);

	return (
		<div className=" flex relative justify-center">
			<div className="absolute -top-40 flex justify-center items-center">
				<div className="flex items-center bg-[#FCF8F6] px-3 py-3 pl-5 rounded-full">
					<img src={searchicon} alt={searchicon} className="w-4 h-4 mb-1" />
					<input
						type="text"
						className="placeholder:font-baloo placeholder:text-3xl placeholder:text-[#BC6A4D] px-3.5 py-5 w-72 outline-none bg-transparent"
						placeholder="Search Dog bread"
						value={searchValue}
						onChange={inputHandler}
					/>
					<button className="bg-[#BC6A4D] flex items-center rounded-full px-8">
						<img src={woofBtn} alt={woofBtn} className="w-10 h-10 " />
						<div className="text-white font-baloo text-3xl font-semibold py-6 px-3">
							dogs
						</div>
					</button>
				</div>
			</div>
			<div className="pb-20">
				{loading ? (
					<div className="font-baloo text-xl text-[#BC6A4D]">
						Loading Dogs...{' '}
					</div>
				) : filteredData.length === 0 ? (
					<div className="font-baloo text-xl text-[#BC6A4D]">No Dogs Found</div>
				) : (
					<div className="grid grid-cols-3 gap-10 -p">
						{filteredData.map((dog) => (
							<div
								className="border-dashed border-2 rounded-3xl p-2 border-[#E4C3B8]"
								key={dog.id}
							>
								<img
									src={dog.url}
									alt={dog.id}
									className="w-48 h-56 rounded-xl"
								/>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
export default Dogs;
