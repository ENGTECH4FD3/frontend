import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import Discover from "./pages/Discover";
import EditProfile from "./pages/EditProfile";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AuthLayout />}>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/forgot" element={<Register />} />
					<Route path="/" element={<Navigate to="/login" replace />} />
				</Route>
				<Route element={<MainLayout />}>
					<Route path="/profile" element={<Profile />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/discover" element={<Discover />} />
					<Route path="/settings" element={<EditProfile />} />
					<Route path="/" element={<Navigate to="/profile" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
