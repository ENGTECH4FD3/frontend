import { Link } from "react-router-dom";

function LoginForm() {
	//TODO: CONNECT FORGOT PASSWORD HREF
	return (
		<form className="w-full mb-8">
			<div className="mb-5">
				<label
					htmlFor="email-alternative"
					className="text-black dark:text-white block mb-2 text-sm text-left font-medium"
				>
					Email Address
				</label>
				<input
					type="email"
					id="email-alternative"
					className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-100 placeholder:text-body"
					placeholder="name@hotmail.com"
					required
				/>
			</div>
			<div className="mb-5">
				<div className="flex flex-row">
					<label
						htmlFor="password-alternative"
						className="text-black dark:text-white block mb-2 text-sm text-left font-medium"
					>
						Password
					</label>
					<Link
						className="text-sm text-black/40 dark:text-white/40 opacity-1 hover:text-black dark:hover:text-white ml-auto"
						to="/forgot"
					>
						Forgot?
					</Link>
				</div>
				<input
					type="password"
					id="password-alternative"
					className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-100 placeholder:text-body"
					placeholder="••••••••"
					required
				/>
			</div>
			<button
				type="submit"
				className="w-full border-2 border-black/25 dark:border-white/25 text-white rounded-none bg-sky-500 dark:bg-black font-medium text-sm px-4 py-2.5 hover:bg-sky-400 dark:hover:bg-neutral-800 hover:border-black dark:hover:border-white"
			>
				SIGN IN
			</button>
		</form>
	);
}

export default LoginForm;
