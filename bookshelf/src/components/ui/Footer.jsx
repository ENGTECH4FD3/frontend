import Logo from "../../assets/logo.svg?react";

function Footer() {
	return (
		<footer className="flex flex-col shadow-[0_-2px_4px_rgba(0,0,0,0.1)] items-center py-5 border-t dark:bg-neutral-700/50 border-neutral-600/20 dark:border-black/30">
			<div className="flex flex-row items-center gap-2">
				<Logo className="w-6 h-6 text-black dark:text-white" />
				<p className="flex text-md text-black dark:text-white font-bold">
					BookShelf
				</p>
			</div>
            <p className="text-xs mt-3 text-black/50 dark:text-white/50">&copy; 2026 BookShelf &bull; Designed for social readers.</p>
		</footer>
	);
}

export default Footer;
