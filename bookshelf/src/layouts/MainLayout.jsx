import { Outlet } from "react-router-dom";
import NavBar from "../components/ui/NavBar";
import Footer from "../components/ui/Footer";

function MainLayout() {
	return (
		<div className="flex flex-col h-screen w-screen overflow-x-hidden bg-stone-100/70 dark:bg-neutral-100/0">
			<NavBar />
			<main className="flex flex-col grow w-full justify-center items-center py-10">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default MainLayout;
