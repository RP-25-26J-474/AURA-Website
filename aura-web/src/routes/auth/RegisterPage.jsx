import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { logos } from "../../assets";
import ExitButton from "../../components/buttons/ExitButton";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email: form.email, password: form.password }).then((user) => {
      if (user.role === "developer") navigate("/dev/dashboard");
      else navigate("/client/dashboard");
    });
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-base-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img src={logos.aura} alt="AURA" className="mx-auto h-15 w-auto" />
        <h2 className="mt-5 text-center text-2xl font-bold tracking-tight text-white">
          Create your AURA account
        </h2>
      </div>
      <ExitButton />

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
          {/* Name */}
          <label htmlFor="name" className="input w-full">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Full name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>

          {/* Email */}
          <label htmlFor="email" className="input w-full">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email address"
              required
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </label>

          {/* Password */}
          <label htmlFor="password" className="input w-full">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </label>

          {/* Role selection (optional) */}
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="select w-full"
          >
            <option disabled selected value="">
              Who are you?
            </option>
            <option value="client">Client</option>
            <option value="developer">Developer</option>
          </select>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-full mt-6">
            Create account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
