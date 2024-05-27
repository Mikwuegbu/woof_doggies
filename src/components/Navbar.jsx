import { Link } from 'react-router-dom';
import { vector1, woofprint } from '../assets/assets';

const Navbar = () => {
	return (
		<>
			<div className="flex space-x-52 relative overflow-hidden">
				<div className="w-[569.81px] h-[412.9px]">
					<img src={vector1} alt={vector1} />
				</div>
				<img
					src={woofprint}
					alt={woofprint}
					className="absolute w-48 h-24 top-12 -left-20"
				/>
				<div className="space-x-10 font-semibold text-4xl text-center py-10 font-baloo text-[#BC6A4D]">
					<Link className="">Home</Link>
					<Link>dogs</Link>
					<Link>Contact us</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
