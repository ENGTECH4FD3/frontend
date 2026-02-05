import Logo from "../../assets/logo.svg?react";
import Search from "../../assets/search.svg?react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import NotificationMenu from "./NotificationMenu";
import MobileMenu from "./MobileMenu";

function NavBar() {
	return (
		<nav className="flex border-stone-200 py-2 px-2 sticky shadow border-b border-neutral-600/20 dark:border-black/30 top-0 dark:bg-neutral-700/50 backdrop-blur-lg z-50">
			<div className="flex flex-row items-center gap-2 ml-2 md:ml-6">
				<Logo className="w-10 h-10 text-black dark:text-white" />
				<p className="hidden lg:flex flex text-2xl text-black dark:text-white italic font-serif">
					BookShelf
				</p>
			</div>
			<div className="hidden md:flex items-center lg:gap-8 md:gap-6 lg:ml-10 md:ml-6">
				<Link
					to="/profile"
					className="text-black dark:text-white dark:hover:text-white/50 hover:text-sky-700 transition-colors"
				>
					My Profile
				</Link>
				<Link
					to="/feed"
					className="text-black dark:text-white dark:hover:text-white/50 hover:text-sky-700 transition-colors"
				>
					Feed
				</Link>
				<Link
					to="/discover"
					className="text-black dark:text-white dark:hover:text-white/50 hover:text-sky-700 transition-colors"
				>
					Discover
				</Link>
			</div>
			<div className="flex gap-4 grow my-auto items-center justify-end md:mr-6">
				<div className="relative">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<Search className="w-5 h-5 text-black/60 dark:text-white/60" />
					</div>
					<input
						type="text"
						className="py-2 pl-10 pr-1 2xl:w-[52rem] xl:w-[40rem] lg:w-96 md:w-72 w-48 bg-neutral-200/60 dark:bg-neutral-700 rounded-lg outline-none transition-all duration-200 focus:outline focus:outline-sky-700 dark:focus:outline-white/50"
						placeholder="Search books..."
					></input>
				</div>
				<div className="hidden md:flex gap-4 my-auto items-center">
					<NotificationMenu />
					<ProfileMenu />
				</div>
			</div>
			<div className="md:hidden mr-2 flex grow gap-2 items-center justify-end">
				<MobileMenu />
				<NotificationMenu />
			</div>
		</nav>
	);
}

export default NavBar;
