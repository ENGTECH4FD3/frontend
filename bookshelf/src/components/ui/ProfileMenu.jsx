import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"; // random eslint error saying motion isn't used but it is being used
import UserEmpty from "../../assets/user_empty.png";
import { Link } from "react-router-dom";

/* TODO:
		-CHECK IF USER HAS PROFILE PHOTO IN DATABASE ---- IF NULL THEN DISPLAY USEREMPTY PHOTO
	*/

const ProfileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<div className="relative inline-block text-left" ref={menuRef}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center border-2 border-black focus:outline-none hover:border-sky-700 dark:border-white/90 dark:hover:border-gray-400 p-0 rounded-full transition-transform active:scale-95 transition-colors"
			>
				<img
					className="h-10 w-10 rounded-full object-cover"
					src={UserEmpty}
					alt="User"
				/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						className="absolute right-0 mt-2 w-24 rounded-xl shadow-xl bg-white text-center dark:bg-neutral-800 dark:ring-neutral-700 ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"
					>
						<div className="py-2">
							<Link
								to="/settings"
								className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:text-white dark:hover:bg-neutral-700"
							>
								Settings
							</Link>
							<hr className="my-1 border-gray-100 dark:border-neutral-700" />
							<a
								href="#logout"
								className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50 dark:hover:bg-neutral-700 dark:hover:text-red-500"
							>
								Sign out
							</a>{" "}
							{/* ADD LOGOUT LOGIC */}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default ProfileMenu;
