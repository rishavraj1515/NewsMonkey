import React, { Component } from "react";
import defImg from "./defaultimage.jpg";

export class Newscomp extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: 1}}> {source}
          </span>
          <img
            src={imgUrl ? imgUrl : defImg}
            className="card-img-top"
            alt="..."
            style={{ width: '400px', height: '350px' }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newscomp;
