import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logos } from "../../assets";
import ExitButton from "../../components/buttons/ExitButton";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await login(form);

      // redirect based on role
      if (user.role === "developer") navigate("/dev/dashboard");
      else navigate("/client/dashboard");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logos.aura} alt="AURA" className="mx-auto h-15 w-auto" />
        <h2 className="mt-2 text-center text-2xl font-bold tracking-tight">
          Welcome Back!
        </h2>
      </div>
      <ExitButton />
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="input w-full">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="input w-full">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Password"
                required
                value={form.password}
                onChange={handleChange}
              />
            </label>
            <Link to="/forgot" className="text-xs font-semibold hover:text-indigo-300 mt-2 block text-right">
              Forgot password?
            </Link>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
            >
              Sign in
            </button>
          </div>
        </form>

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-gray-400">
          Not a member?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
