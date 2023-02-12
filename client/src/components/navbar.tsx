import temp_logo from './temp_log.png';
import { default as logo } from '../../public/temp_log.svg';

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
              <title>Menu</title>
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
              Docs
            </a>
            <a
              href="#responsive-header"
              className="mt-4 mr-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
            >
              Examples
            </a>
            <a
              href="#responsive-header"
              className="mt-4 block text-teal-200 hover:text-white lg:mt-0 lg:inline-block"
            >
              Blog
            </a>
          </div>
          <div>
            <a
              href="#"
              className="mt-4 inline-block rounded border border-white px-4 py-2 text-sm leading-none text-white hover:border-transparent hover:bg-white hover:text-teal-500 lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
