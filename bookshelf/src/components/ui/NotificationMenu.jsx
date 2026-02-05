import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"; // random eslint error saying motion isn't used but it is being used
import NotificationEmpty from "../../assets/notifications_empty.svg?react";
import Close from "../../assets/close.svg?react";
import { Link } from "react-router-dom";

/* TODO:
		CONNECT DATABASE NOTIFICATIONS TO ARRAY TO DISPLAY
	*/

const NotificationMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);
	const clearAll = () => setNotifications([]);

	const [notifications, setNotifications] = useState([
		{ id: 1, text: "New comment on your review!", link: "/review with id" },
		{ id: 2, text: "You have a new follower!", link: "/user profile" },
	]);

	const removeNoti = (id) => {
		setNotifications((prev) => prev.filter((n) => n.id !== id));
	};

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
			{/* NOTIFICATION BUTTON W RED DOT FOR ALERTS */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center bg-white/0 border-none hover:border-none focus:outline-none p-1 transition-transform active:scale-90"
			>
				<NotificationEmpty className="md:hover:text-sky-700 md:dark:hover:text-white/50 transition-colors" />
				{notifications.length > 0 && (
					<span className="absolute top-1 right-1 block h-1.5 w-1.5 rounded-full bg-red-500" />
				)}
			</button>

			<AnimatePresence>
				{isOpen && (
					// DIV BACKGROUND LAYOUT
					<motion.div
						initial={{ opacity: 0, y: -10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: -10, scale: 0.95 }}
						className="absolute right-0 mt-2 w-[325px] md:w-96 rounded-xl shadow-2xl bg-white dark:bg-neutral-800 ring-1 ring-black/5 dark:ring-white/10 z-50 overflow-hidden"
					>
						<div className="px-4 py-3 border-b border-gray-100 dark:border-neutral-700 flex justify-between items-center bg-gray-50/50 dark:bg-neutral-800/50">
							<span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-neutral-400">
								Notifications
							</span>
							{notifications.length > 0 && (
								<button
									onClick={clearAll}
									className="text-[11px] font-medium border-2 bg-neutral-200/50 text-sky-700 focus:outline-none hover:text-sky-700 hover:border-sky-700 dark:bg-white/10 dark:text-white/80 dark:hover:text-white dark:hover:border-white transition-colors"
								>
									Clear All
								</button>
							)}
						</div>

						<div className="max-h-80 overflow-y-auto overflow-x-hidden">
							<AnimatePresence mode="popLayout">
								{notifications.length > 0 ? (
									notifications.map((noti) => (
										<motion.div
											key={noti.id}
											layout
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											className="group relative flex items-center border-b border-gray-50 dark:border-neutral-700 last:border-0"
										>
											<Link
												to={noti.link}
												className="flex-1 px-4 py-4 text-sm text-gray-700 hover:text-sky-700 dark:text-white dark:hover:text-blue-300 hover:bg-gray-50 dark:hover:bg-neutral-700/40 transition-colors"
											>
												{noti.text}
											</Link>
											<button
												onClick={() => removeNoti(noti.id)}
												className="mx-3 px-0 py-0 flex justify-center items-center bg-neutral-200/50 hover:bg-gray-200 hover:border-sky-700 focus:outline-none dark:hover:border-white border-2 dark:hover:bg-neutral-600 dark:bg-white/10 text-gray-400 hover:text-sky-700 dark:text-neutral-500 dark:hover:text-white transition-all leading-none"
												aria-label="Close"
											>
												<Close className="w-6 h-6" />
											</button>
										</motion.div>
									))
								) : (
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										className="px-4 py-10 text-center text-sm text-gray-500"
									>
										You're all caught up!
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default NotificationMenu;
