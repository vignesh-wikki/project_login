import React, { useState, useCallback} from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost/backend/api/login.php", user)
      .then((response) => {
        console.log(response.data)
        if (response.data.message === "Login successful.") {
          window.location.href = "/blog";
          
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <div class="text-center mt-24">
        <div class="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            class="w-12 h-12 text-blue-500"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 class="text-4xl tracking-tight">Sign in into your account</h2>
        <span class="text-sm">
          <a href="/register" class="text-blue-500">
            register a new account
          </a>
        </span>
      </div>
      <div class="flex justify-center my-2 mx-4 md:mx-0">
        <form
          class="w-full max-w-xl bg-white rounded-lg shadow-md p-6"
          onSubmit={handleSubmit}
          method="POST"
        >
          <div class="flex flex-wrap -mx-3 mb-6">
           
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Email address
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                required
              />
            </div>
            <div class="w-full md:w-full px-3 mb-6">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="Password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                required
              />
            </div>

            <div class="w-full md:w-full px-3">
              <button class="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
