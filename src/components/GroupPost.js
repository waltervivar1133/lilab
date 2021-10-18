import React, { useEffect, useState } from "react";
import { getData } from "../config/get";
import ItemPost from "./ItemPost";
import Loader from "./Loader";

const GroupPost = () => {
  const [posts, setposts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    getData().then((res) => {
      let data = res.data;
      setposts(data);
      setLoading(true);
    });
  };

  
  return (
    <>
      {loading === false ? (
        <Loader />
      ) : (
        <div className="container bg-dat">
          <div className="row my-5">
            {posts.map((post, key) => (
              <ItemPost 
              key={key} 
              {...post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default GroupPost;
