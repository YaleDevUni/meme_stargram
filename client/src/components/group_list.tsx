// import React from 'react';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import Modal_ImgPopUp from './modal';
import Modal_test from './modal_test';

// interface group {
//   username: string;
//   datetime: Date;
//   img_url: string;
//   description: string;
//   tags: string[];
// }

// function iterateGroup(groups: any[]): any {
//   const [showModal, setShowModal] = React.useState(false);

//   function updateHoistedState() {
//     setShowModal(!showModal);
//   }
//   return (
//     <div>
//       {groups &&
//         groups.map((group) => {
//           return (
//             <>
//               <button>
//                 <img
//                   className="...  aspect-square w-1/3 w-96 object-contain object-contain"
//                   src={group.img_url}
//                   alt="test"
//                   width="100"
//                   height="100"
//                   onClick={() => {
//                     setShowModal(true);
//                     Modal_ImgPopUp({ group, showModal, updateHoistedState });
//                   }}
//                 />
//               </button>
//             </>
//           );
//         })}
//     </div>
//   );
// }
// import './App.css';
// test
function test() {
  console.log('close button');
}
function GroupList() {
  const [groups, setGroups] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  // fetch data from the local server to run the server pls check backend/readme.md !!
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await fetch('http://127.0.0.1:8000/posts/')
        .then((resp) => resp.json())
        .then((data) => {
          setGroups(data);
          setLoading(false);
          console.log('From api: ', data);
        })
        .catch((e) => {
          setError(true);
          setLoading(false);
          console.log('Error... : ', e);
        });
    };
    getData();
  }, []);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;

  console.log('showModal', showModal);
  {
    return (
      <div className="container m-10 mx-auto flex rounded-xl border bg-green-200 p-12 shadow">
        {/* <div className="flex"></div> */}
        <div className="text-lg text-blue-600">
          <div className="flex flex-wrap">
            <div>
              {groups &&
                groups.map((group) => {
                  return (
                    <>
                      <button>
                        <img
                          className="...  aspect-square w-1/3 w-96 object-contain object-contain"
                          src={group.img_url}
                          alt="test"
                          width="100"
                          height="100"
                          onClick={() => {
                            setShowModal(true);
                            // <Modal_test onCloseButtonClick={test} />;
                            // console.log('this is my test', group);
                            Modal_ImgPopUp({
                              group,
                              showModal
                            });
                          }}
                        />
                      </button>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  // test
}
export default GroupList;
