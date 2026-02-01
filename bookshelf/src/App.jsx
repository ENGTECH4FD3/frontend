import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* INSTRUCTION: 
                    "For any path starting with /, use AuthLayout as the wrapper."
                */}
				<Route element={<AuthLayout />}>
					{/* If URL is /login, put <Login /> inside AuthLayout's Outlet */}
					<Route path="/login" element={<Login />} />

					{/* If URL is /register, put <Register /> inside AuthLayout's Outlet */}
					<Route path="/register" element={<Register />} />

					{/* Optional: Redirect plain "/" to "/login" for now */}
					<Route path="/" element={<Navigate to="/login" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
