function RegisterForm() {
	return (
		<form className="w-full mb-8">
			<div className="mb-5">
				<label
					htmlFor="first-name"
					className="text-black dark:text-white block mb-2 text-sm text-left font-medium"
				>
					First Name
				</label>
				<input
					id="first-name"
					className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-100 placeholder:text-body"
					placeholder="John"
					required
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="last-name"
					className="text-black dark:text-white block mb-2 text-sm text-left font-medium"
				>
					Last Name
				</label>
				<input
					id="last-name"
					className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-100 placeholder:text-body"
					placeholder="Doe"
					required
				/>
			</div>
			<div className="mb-5">
				<label
					htmlFor="username"
					className="text-black dark:text-white block mb-2 text-sm text-left font-medium"
				>
					Username
				</label>
				<input
					id="username"
					className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-100 placeholder:text-body"
					placeholder="John_Doe"
					required
				/>
			</div>
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
				</div>
				<input
					type="password"
					id="password-alternative"
					className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-100 placeholder:text-body"
					placeholder="••••••••"
					required
				/>
			</div>
			<div className="mb-8">
				<div className="flex flex-row">
					<label
						htmlFor="confirm-password-alternative"
						className="text-black dark:text-white block mb-2 text-sm text-left font-medium"
					>
						Confirm Password
					</label>
				</div>
				<input
					type="password"
					id="confirm-password-alternative"
					className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-800 dark:focus:border-neutral-100 placeholder:text-body"
					placeholder="••••••••"
					required
				/>
			</div>
			<button
				type="submit"
				className="w-full border-2 border-black/25 dark:border-white/25 text-white rounded-none bg-sky-500 dark:bg-black font-medium text-sm px-4 py-2.5 hover:bg-sky-400 dark:hover:bg-neutral-800 hover:border-black dark:hover:border-white"
			>
				CREATE ACCOUNT
			</button>
		</form>
	);
}

export default RegisterForm;
