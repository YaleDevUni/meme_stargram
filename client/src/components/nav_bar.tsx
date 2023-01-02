import React, { FunctionComponent } from 'react';
import { Hamberger } from './nav/hamberger';
import { Link } from 'react-router-dom';

type NavbarProps = {
  is_signed_in: boolean;
  name: string;
  new_alarm: number;
};

export const Navbar: FunctionComponent<NavbarProps> = ({
  is_signed_in,
  name,
  new_alarm
}) => {
  return (
    <nav className="w-screen rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Hamberger />
        {/* TODO: make Link router works */}
        {/* <Link to="/" className="flex items-center px-8">
          <span className="flex-none self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Meme Stargram
          </span>
        </Link> */}
        <a href="#" className="flex items-center px-8">
          <span className="flex-none self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Meme Stargram
          </span>
        </a>
        <form className="flex-auto px-4">
          <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Search memes"
              required
            />
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900">
            <li>
              <a
                href="#"
                className="block rounded bg-blue-500 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700"
                aria-current="page"
              >
                Home
              </a>
            </li>
            {is_signed_in ? (
              <>
                <li>
                  <a
                    href="#"
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    Friends
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
                >
                  Log In
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
