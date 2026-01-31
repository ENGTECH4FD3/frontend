import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg?react';
import AppleLogo from '../assets/apple.svg?react';
import GoogleLogo from '../assets/google.svg?react';
import LoginForm from "../components/ui/LoginForm";

function Login() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="mb-12">
                <div className="flex items-center gap-2 mb-10">
                    <Logo className="w-10 h-10 text-black dark:text-white"/> 
                    <p className="text-2xl text-black dark:text-white italic font-serif">BookShelf</p>
                </div>
                <p className="text-black dark:text-white font-bold text-3xl text-left pb-3">Sign In</p>
                <p className="text-left text-black/60 dark:text-white/60">Enter your details to access your bookshelf.</p>
            </div>
            <LoginForm/>
            <div className="w-full mb-8">
                <p className="mb-8 text-black/60 dark:text-white/60 text-sm font-bold">────── SOCIAL LOGIN ──────</p>
                <div className="flex flex-row gap-4">
                    <button className="flex items-center justify-center gap-3 px-4 py-2 grow border-sm border-black/10 dark:border-white/10 text-black dark:text-white"><GoogleLogo className="w-5 h-5 m-0 p-0 text-black dark:text-white"/><span>GOOGLE</span></button>
                    <button className="flex items-center justify-center gap-3 px-4 py-2 grow border-sm border-black/10 dark:border-white/10 text-black dark:text-white"><AppleLogo className="w-6 h-6 text-black dark:text-white"/>APPLE</button>
                </div>
            </div>
            <div className="">
                <p className="text-black dark:text-white">Don't have an account? <a className="border-b-2 font-bold text-black dark:text-white hover:text-stone-400" href="create-account">Create Account</a></p>
            </div>
        </div>
    );
}

export default Login;