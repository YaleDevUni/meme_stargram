// import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import { connect, ConnectedProps } from 'react-redux';
import { showModal } from '../store/actions';

const mapDispatchToProps = {
  dispatchShowModal: showModal
};
const connector = connect(undefined, mapDispatchToProps);
type AppProps = {} & ConnectedProps<typeof connector>;

function PostList(props: AppProps) {
  const { dispatchShowModal } = props;
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false); // fetch data from the local server to run the server pls check backend/readme.md !!

  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      await fetch('http://127.0.0.1:8000/posts/')
        .then((resp) => resp.json())
        .then((data) => {
          setPosts(data.results);
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

  console.log('is loading', loading);

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="container m-10 mx-auto rounded-xl border bg-green-200 p-12 shadow">
      <Modal />

      <p className="text-lg text-blue-600">
        {posts &&
          posts.map((post) => {
            return (
              <div>
                <p>user: {post.username}</p>
                <button
                  className="text-black-1200 text-lg"
                  onClick={() => {
                    dispatchShowModal({
                      user: post.username,
                      description: post.description,
                      imglink: post.img_url,
                      datetime: post.datetime,
                      tag: post.tags
                    });
                  }}
                >
                  <img
                    src={post.img_url}
                    alt="test"
                    width="100"
                    height="100"
                  ></img>
                </button>

                <p>{post.description}</p>
                <p className="text-red-600">{post.datetime}</p>
                {post.tags &&
                  post.tags.map((tag: any) => {
                    return <p>{tag}</p>;
                  })}
              </div>
            );
          })}
      </p>
    </div>
  );
}
// test
export default connector(PostList);
