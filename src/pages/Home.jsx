import {
	arrowLeft,
	arrowRight,
	bulldog,
	dog1,
	dog2,
	dog3,
	vectorLine,
	woofsingle,
} from '../assets/assets';

const Home = () => (
	<div className="">
		<div className="relative">
			<div className="absolute left-28 -top-60 text-nowrap">
				<h1 className="font-baloo font-semibold text-5xl text-white">
					HAPPINESS IS <span className="text-[#BC6A4D]">A WARM PUPPY</span>
				</h1>
				<img
					src={woofsingle}
					alt={woofsingle}
					className="w-20 h-20 absolute right-2 bottom-2"
				/>
				<p className="text-white pt-2.5 font-sans font-medium text-base">
					Let&apos;s play with cute dogs
				</p>
			</div>
		</div>
		<div className="flex justify-between pt-36 relative">
			<div className="absolute left-16 bottom-3">
				<div className="flex space-x-8">
					<button>
						<img src={arrowLeft} alt={arrowLeft} className="w-10 h-8" />
					</button>
					<div className="border-dashed border-2 rounded-3xl p-2 border-[#E4C3B8]">
						<img src={dog1} alt={dog1} className="w-48 h-56" />
					</div>
					<div className="border-dashed border-2 rounded-3xl p-2 border-[#E4C3B8]">
						<img src={dog2} alt={dog2} className="w-48 h-56" />
					</div>
					<div className="border-dashed border-2 rounded-3xl p-2 border-[#E4C3B8]">
						<img src={dog3} alt={dog3} className="w-48 h-56" />
					</div>
					<button>
						<img src={arrowRight} alt={arrowRight} className="w-10 h-8" />
					</button>
				</div>
			</div>
			<div>
				<img src={vectorLine} alt="" className="w-[942px] h-[414px]" />
			</div>
			<div className="flex justify-center items-center absolute right-1 top-0">
				<div className="mr-28 text-center -my-28 space-y-4">
					<img src={bulldog} alt="" className="w-48  text-center" />
					<p className="font-baloo font-normal text-3xl text-[#BC6A4D]">
						Bull Dog
					</p>
					<button className="bg-[#BC6A4D] px-5 font-baloo font-semibold text-base text-white py-2 rounded-full">
						Next dog
					</button>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
