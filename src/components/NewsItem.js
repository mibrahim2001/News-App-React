
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="m-2">
      <div className="card mx-2" style={{ maxWidth: "25rem" }}>
        <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
          <span className="position-absolute top-0 badge rounded-pill bg-danger ">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." style={{ maxHeight: "12rem" }} />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">
            {description
              ? description.length > 88
                ? description.slice(0, 87).concat("...")
                : description
              : "No description!"}
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {author} at {date}
            </small>
          </p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-small btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
