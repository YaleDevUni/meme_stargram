import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal/modal';
import { connect, ConnectedProps } from 'react-redux';
import { showModal } from 'store/actions';
import 'styling/posts_list.css';

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

  // TODO: Should handle this better way with error handling
  // if (error) return <h1>Error</h1>;
  // if (loading) return <h1>Loading</h1>;

  return (
    <div className="posts-list">
      <Modal />
      {posts &&
        posts.map((post, index) => {
          return (
            <>
              <div className="post-image">
                <button
                  className="post-image_button"
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
                    className="post-image_image"
                    src={post.img_url}
                    alt="test"
                  />
                </button>
              </div>
              {index % 3 === 2 ? <div className="break" /> : null}
            </>
          );
        })}
    </div>
  );
}

const mapDispatchToProps = {
  dispatchShowModal: showModal
};
const connector = connect(undefined, mapDispatchToProps);
type AppProps = {} & ConnectedProps<typeof connector>;

export default connector(PostList);
