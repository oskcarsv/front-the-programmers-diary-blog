/* eslint-disable react/prop-types */
export const CardPosts = ({ title, img }) => {
  return (
    <div className="card-content">
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </div>
  );
};