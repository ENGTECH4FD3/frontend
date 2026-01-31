function LoginForm() {
    //TODO: CONNECT FORGOT PASSWORD HREF
    return (
        <form className="w-full mb-8">
            <div className="mb-5">
                <label htmlFor="email-alternative" className="text-black dark:text-white block mb-2 text-sm text-left font-medium">Email Address</label>
                <input type="email" id="email-alternative" className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-100 placeholder:text-body" placeholder="name@hotmail.com"/>
            </div>
            <div className="mb-5">
                <div className="flex flex-row">
                    <label htmlFor="password-alternative" className="text-black dark:text-white block mb-2 text-sm text-left font-medium">Password</label>
                    <a className="text-sm text-black/40 dark:text-white/40 opacity-1 hover:text-black dark:hover:text-white ml-auto" href="forgot-password">Forgot?</a>
                </div>
                <input type="password" id="password-alternative" className="bg-transparent border-b-2 border-neutral-400 text-sm block w-full px-3 py-2.5 focus:outline-none focus:border-neutral-100 placeholder:text-body" placeholder="••••••••"/>
            </div>
            <button type="submit" className="w-full border-sm border-black/10 dark:border-white/25 text-white rounded-none bg-black font-medium text-sm px-4 py-2.5">SIGN IN</button>
        </form>
    );
}

export default LoginForm;