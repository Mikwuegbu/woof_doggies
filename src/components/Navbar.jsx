import { NavLink } from 'react-router-dom';
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
				<div className="space-x-14 font-semibold text-3xl text-center py-10 font-baloo text-[#BC6A4D] text-nowrap">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? 'bg-[#BC6A4D] text-white px-8 rounded-full'
								: 'bg-white'
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/dogs"
						className={({ isActive }) =>
							isActive
								? 'bg-[#BC6A4D] text-white px-8 rounded-full'
								: 'bg-white'
						}
					>
						dogs
					</NavLink>
					<NavLink
						to="contacts"
						className={({ isActive }) =>
							isActive
								? 'bg-[#BC6A4D] text-white px-8 rounded-full'
								: 'bg-white'
						}
					>
						Contact us
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default Navbar;
