import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Moment from "react-moment";

const ItemPost = ({ image, author, tags, comments, likes, date, text }) => {

  const tagsOne = tags.split(" ");

  return (
    <div className="col-md-4 my-3 ">
      <div className="card shadow-sm rounded">
        <LazyLoadImage
          effect="blur"
          src={image}
          alt={image}
          width={image.width}
          height={image.height}
          className="card-img-top"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <div className="card-text text-dark font-bold">
                <span className="p-1 bg-primary text-white rounded mr-2">
                  Autor :
                </span>
                {author}
              </div>
            </div>

            <div className="col-md-6 flex justify-content-center mt-3">
              <p className="italic">
                {" "}
                likes : <i className="fas fa-thumbs-up"></i> {likes}
              </p>
            </div>
            <div className="col-md-6 flex justify-content-center mt-3">
              <p className="italic"> Comentarios :{comments}</p>
            </div>
            <div>
              <p className="text-clamp">{text}</p>
            </div>
            <div className="col-md-12 flex justify-content-center mt-3">
              <p className="italic">
                {" "}
                Fecha de Publicacion :{" "}
                <Moment className="ml-1" format="DD/MM/YYYY">
                  {date}
                </Moment>{" "}
              </p>
            </div>
            <div className="col-md-12 mt-3">
              {tagsOne.map((element,key) => (
                <a href="?"className="cursor-pointer p-1 ml-1 rounded bg-info text-white" key={key}>
                  {element}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPost;
