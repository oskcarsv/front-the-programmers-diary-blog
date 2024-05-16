/* eslint-disable react/prop-types */
export const CardPosts = ({ title, subTitle, img }) => {
  return (
    <div className="card-content">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  );
};
