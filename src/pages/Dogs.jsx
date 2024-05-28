import { searchicon, woofBtn } from '../assets/assets';

const Dogs = () => (
	<div className="flex relative justify-center">
		<div className="absolute bottom-36 flex justify-center items-center">
			<div className="flex items-center bg-[#FCF8F6] px-3 py-3 pl-5 rounded-full">
				<img src={searchicon} alt={searchicon} className="w-4 h-4 mb-1" />
				<input
					type="text"
					className="placeholder:font-baloo placeholder:text-3xl placeholder:text-[#BC6A4D] px-3.5 py-5 w-72 outline-none bg-transparent"
					placeholder="Search Dog bread"
				/>
				<button className="bg-[#BC6A4D] flex items-center rounded-full px-8">
					<img src={woofBtn} alt={woofBtn} className="w-10 h-10 " />
					<div className="text-white font-baloo text-3xl font-semibold py-6 px-3">
						dogs
					</div>
				</button>
			</div>
		</div>
		<div>the tiles</div>
	</div>
);
export default Dogs;
