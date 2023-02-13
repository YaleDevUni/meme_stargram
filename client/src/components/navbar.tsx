import temp_logo from './temp_log.png';
import { default as logo } from '../../public/temp_log.svg';
import './dropdown.css';

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="flex flex-wrap items-center justify-between p-6">
        <div className="mr-6 flex flex-shrink-0 items-center text-purple-600">
          <a>
            <img
              className="w-40 object-contain"
              src={process.env.PUBLIC_URL + '/temp_logo.png'}
            />
          </a>
          <span className="text-xl font-semibold tracking-tight">
            Memestagram
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center rounded border border-teal-400 px-3 py-2 text-purple-600 hover:text-purple-600 hover:text-purple-800">
            <svg
              className="h-3 w-3 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>My Page</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="block w-full flex-grow lg:flex lg:w-auto lg:items-center">
          <div className="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="mt-4 mr-4 block text-xl font-semibold text-purple-600 hover:text-purple-800 lg:mt-0 lg:inline-block"
            >
              My Page
            </a>
            <a
              href="#responsive-header"
              className="mt-4 mr-4 block text-xl font-semibold text-purple-600 hover:text-purple-800 lg:mt-0 lg:inline-block"
            >
              Community
            </a>
          </div>
          <div className="grow">
            <a>
              <form>
                <label
                  htmlFor="default-search"
                  className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-100 dark:text-purple-400"
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
                    className="block w-full rounded-lg border border-gray-300 bg-white p-4 pl-10 text-sm text-gray-900 focus:border-purple-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-purple-500"
                    placeholder="Put your tag"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2.5 bottom-2.5 rounded-lg bg-purple-700 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                  >
                    Search
                  </button>
                </div>
              </form>
            </a>
          </div>

          <div className="dropdown rounded-lg bg-purple-600">
            <button className="dropbtn">Hottest</button>
            <div className="dropdown-content">
              <a href="#">Daily</a>
              <a href="#">Weekly</a>
              <a href="#">Monthly</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
