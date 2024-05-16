/* eslint-disable react/prop-types */
export const CardPosts = ({ title, subTitle, img }) => {
  return (
    // <div className="card-content">
    <div className="card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};
