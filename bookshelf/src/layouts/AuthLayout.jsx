import { Outlet } from "react-router-dom";
import loginSplash from "../assets/login-splash.jpg";

function AuthLayout() {
	return (
	    <div className="flex h-screen w-screen overflow-hidden">
			<div className="hidden md:flex md:w-3/5">
				<img src={loginSplash} alt="login-splash" className="object-cover w-full h-full" />
			</div>
			<div className="w-full md:w-2/5 flex flex-col overflow-y-auto px-10">
				<div className="w-full min-h-screen flex items-center justify-center">
					<div className="w-full max-w-md mx-auto my-auto py-10">
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthLayout;
