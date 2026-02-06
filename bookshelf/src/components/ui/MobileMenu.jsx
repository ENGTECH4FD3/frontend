import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "../../assets/menu.svg?react";

import { createPortal } from "react-dom";

/* TODO:
    -ADD LOGOUT LOGIC
*/

function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<div className="flex items-center">
			<div className="m-0" ref={menuRef}>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={`flex items-center bg-white/0 border-none hover:border-none focus:outline-none p-0 transition-transform duration-200 ease-in-out rotate-0 ${isOpen ? "rotate-90" : "rotate-0"}`}
				>
					<Menu className="w-8 h-8 text-black dark:text-white" />
				</button>
			</div>

			{createPortal(
				<AnimatePresence>
					{isOpen && (
						<motion.div
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							exit={{ y: "-100%" }}
							transition={{ duration: 0.3, ease: "easeInOut" }}
							className="overscroll-contain fixed inset-x-0 top-[55px] h-dvh bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg overflow-y-auto z-40"
						>
							<nav className="flex flex-col h-full p-8 text-4xl">
								<div className="flex flex-col gap-8 items-center">
									<Link
										onClick={() => setIsOpen(false)}
										to="/profile"
										className="text-black dark:text-white mr-auto"
									>
										My Profile
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										to="/feed"
										className="text-black dark:text-white mr-auto"
									>
										Feed
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										to="/discover"
										className="text-black dark:text-white mr-auto"
									>
										Discover
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										to="/settings"
										className="mt-10 text-black dark:text-white mr-auto"
									>
										Settings
									</Link>
									<Link
										onClick={() => setIsOpen(false)}
										to="#logout"
										className="text-black dark:text-white mr-auto"
									>
										Sign Out
									</Link>
								</div>
							</nav>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body, // This is the destination for the portal
			)}
		</div>
	);
}

export default MobileMenu;
