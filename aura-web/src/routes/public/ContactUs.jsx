import React from "react";
import { vectors } from "../../assets";

function ContactUs() {
  const clipPathPolygon = vectors.blobClipPath();
  return (
    <div className="isolate bg-base-100 px-6 py-12 sm:py-20 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{ clipPath: clipPathPolygon }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-lg font-semibold text-primary">Contact Us</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
            Get in Touch with AURA
          </p>
        </div>
        <p className="mt-2 text-lg/8 text-base-content/75">
          We'd love to hear from you! Whether you have questions about AURA,
          need
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-8 max-w-xl sm:mt-12"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <label for="first-name" className="input w-full">
            <input
              id="first-name"
              type="text"
              name="first-name"
              autocomplete="given-name"
              placeholder="First name"
            />
          </label>
          <label for="last-name" className="input w-full">
            <input
              id="last-name"
              type="text"
              name="last-name"
              autocomplete="family-name"
              placeholder="Last Name"
            />
          </label>
          <div className="sm:col-span-2">
            <label for="company" className="input w-full">
              <input
                id="company"
                type="text"
                name="company"
                autocomplete="organization"
                placeholder="Company"
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label for="email" className="input w-full">
              <input
                id="email"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="Email"
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <div className="flex flex-row gap-2">
              <select
                id="country"
                name="country"
                autocomplete="country"
                aria-label="Country"
                className="select"
              >
                <option>US</option>
                <option>CA</option>
                <option>EU</option>
              </select>
              <label for="phone-number" className="input w-full">
                <input
                  id="phone-number"
                  type="text"
                  name="phone-number"
                  placeholder="123-456-7890"
                />
              </label>
            </div>
          </div>
          <div className="sm:col-span-2">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="4"
              className="textarea w-full"
            ></textarea>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"></span>
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  name="agree-to-policies"
                  aria-label="Agree to policies"
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
            <label for="agree-to-policies" className="text-sm/6 text-gray-400">
              By selecting this, you agree to our &nbsp;
              <a
                href="#"
                className="font-semibold whitespace-nowrap text-indigo-400"
              >
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button type="submit" className="btn btn-primary w-full">
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
