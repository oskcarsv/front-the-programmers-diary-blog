/* eslint-disable react/prop-types */
export const CardPublications = ({
    title,
    img
}) => {
    return (
            <div className="card-content">
                <img src={img} alt={title} />
                <h2>{title}</h2>
            </div>
    );
};