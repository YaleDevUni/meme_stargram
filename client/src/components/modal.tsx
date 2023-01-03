import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
// import GroupList from './components/group_list';

export default function Modal_ImgPopUp() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="rounded bg-blue-500 px-3 py-3 text-lg uppercase text-white"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Test Modal
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 top-0 left-0 right-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden p-60 outline-none focus:outline-none">
            <div className="max-6x6 relative my-6 mx-auto w-auto">
              {/*content*/}
              <div className="bg-black-500 relative flex grid w-full grid-cols-12 flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*body*/}
                <div className="relative col-span-8 m-8 flex-none border-inherit object-scale-down p-6">
                  <img
                    className="m-8 aspect-video w-full border-black object-scale-down"
                    // type="button"
                    src="https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg"
                    width="100"
                    height="100"
                  />
                  Clicked Image from mainPage1
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {/* {post.name} */}
                  </p>
                </div>
                <div className="relative col-span-4 flex flex-initial flex-wrap justify-center p-6">
                  {/* <img
                    className="h-auto w-6/12 max-w-full rounded-full rounded-full object-scale-down px-4 sm:w-4/12"
                    // type="button"
                    src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                    width="100"
                    height="100"
                  /> */}
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                    <svg
                      className="absolute -left-1 h-12 w-12 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  User ID Post information
                  <img
                    className="aspect-video w-full object-scale-down"
                    // type="button"
                    src="https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg"
                    width="100"
                    height="100"
                  />
                  Comment Section
                  <p className="my-4 text-lg leading-relaxed text-slate-500">
                    {/* {post.name} */}
                  </p>
                </div>

                {/*profile*/}

                <div className="justify-right relative flex-wrap">
                  <div className="top-0 right-0 w-6/12 px-4 sm:w-4/12">
                    <img
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png"
                      alt="..."
                      className="shadow-lgobject-contain h-auto max-w-full rounded-full border-none align-middle hover:object-scale-down"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-60"></div>
        </>
      ) : null}
    </>
  );
}
