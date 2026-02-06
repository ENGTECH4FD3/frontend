import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";

function MainLayout() {
	return (
		<div className="flex flex-col md:h-screen min-h-dvh w-screen bg-stone-100/70 dark:bg-neutral-100/0 md:overflow-x-hidden md:overflow-y-scroll">
			<NavBar />
			<main className="flex flex-col grow items-center py-10 z-10">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default MainLayout;
