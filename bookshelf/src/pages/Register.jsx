import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg?react";
import AppleLogo from "../assets/apple.svg?react";
import GoogleLogo from "../assets/google.svg?react";
import RegisterForm from "../components/ui/RegisterForm";

function Register() {
	return (
		<div className="flex flex-col justify-center">
			<div className="mb-12">
				<div className="flex items-center gap-2 mb-10">
					<Logo className="w-10 h-10 text-black dark:text-white" />
					<p className="text-2xl text-black dark:text-white italic font-serif">
						BookShelf
					</p>
				</div>
				<p className="text-black dark:text-white font-bold text-3xl text-left pb-3">
					Create your Bookshelf account
				</p>
				<p className="text-left text-black/60 dark:text-white/60">
					Start your reading journey and share your reviews with friends.
				</p>
			</div>
			<div className="w-full mb-10">
				<div className="flex flex-col gap-4 mb-10">
					<button className="flex items-center justify-center gap-3 px-4 py-2 grow border-sm border-black/10 dark:border-white/10 text-black dark:text-white hover:border-black dark:hover:border-white">
						<GoogleLogo className="w-5 h-5 m-0 p-0 text-black dark:text-white" />
						<span>Sign up with Google</span>
					</button>
					<button className="flex items-center justify-center gap-3 px-4 py-2 grow border-sm border-black/10 dark:border-white/10 text-black dark:text-white hover:border-black dark:hover:border-white">
						<AppleLogo className="w-6 h-6 text-black dark:text-white" />
						<span>Sign up with Apple</span>
					</button>
				</div>
				<p className="text-black/60 dark:text-white/60 text-sm font-bold">
					────── OR ──────
				</p>
			</div>
			<RegisterForm />
			<div className="flex flex-col">
				<p className="text-black dark:text-white">
					Already have an account?{" "}
					<Link
                        to="/login"
						className="border-b-2 border-stone-300 font-bold text-black dark:text-white hover:border-black dark:border-stone-500 dark:hover:border-white hover:text-black dark:hover:text-white"
					>
						Log In
					</Link>
				</p>
			</div>
            <div className="flex justify-center">
                <p className="mt-6 max-w-sm text-black/40 text-xs text-center dark:text-white/40">By registering an account, you agree to our Terms of Service, Privacy Policy, and Cookie Policy.</p>
            </div>
		</div>
	);
}

export default Register;
