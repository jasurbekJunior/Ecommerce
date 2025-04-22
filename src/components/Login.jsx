import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      toast.error("Email noto'g'ri formatda.");
      isValid = false;
    }

    if (password.length < 8) {
      toast.error("Parol kamida 8 ta belgidan iborat bo'lishi kerak.");
      isValid = false;
    }

    if (!isValid) return;

    // For demo purposes - in a real app, you would validate with a backend
    if (email === "admin@gmail.com" && password === "12345678") {
      try {
        // Extract username from email (everything before @)
        const userName = email.split("@")[0];

        // Store BOTH token AND user in localStorage - with error handling
        window.localStorage.setItem("token", "fake_token_123");
        window.localStorage.setItem("user", userName);
        window.localStorage.setItem("userEmail", email);

        // Verify the data was saved
        const savedToken = window.localStorage.getItem("token");
        const savedUser = window.localStorage.getItem("user");
        
        console.log("Saved to localStorage:", { 
          token: savedToken, 
          user: savedUser,
          userEmail: window.localStorage.getItem("userEmail")
        });

        if (savedToken && savedUser) {
          toast.success("Muvaffaqiyatli kirdingiz!");
          
          // Force a reload to ensure all components recognize the login state
          setTimeout(() => {
            navigate("/");
            window.location.reload();
          }, 500);
        } else {
          toast.error("Login ma'lumotlarini saqlashda xatolik yuz berdi.");
        }
      } catch (error) {
        console.error("Login error:", error);
        toast.error("Xatolik yuz berdi. Iltimos qaytadan urinib ko'ring.");
      }
    } else {
      toast.error("Email yoki parol noto'g'ri.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-full md:w-1/2 flex mx-auto justify-center items-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8 flex items-center justify-center md:justify-start">
            <div className="flex items-center">
              <svg className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-blue-600 font-bold text-xl ml-2">Market</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">Akkauntga kirish</h1>

          <p className="text-gray-600 mb-8">
            Hali akkauntingiz yo'qmi?{" "}
            <a href="/register" className="text-blue-500 hover:text-blue-700">
              Ro'yxatdan o'tish
            </a>
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-pochta <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="misol@gmail.com"
                required
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Parol <span className="text-red-500">*</span>
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Kamida 8ta belgi"
                required
                className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-end">
              <a href="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
                Parolni unutdingizmi? Qayta tiklash
              </a>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Akkauntga kirish
            </button>
          </form>

          <div className="mt-12 text-center text-gray-500 text-sm">© 2023 - 2025. "Mene Market"</div>
        </div>
      </div>
    </div>
  );
}

export default Login;