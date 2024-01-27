const Album = (props) => {
  const { img, title, year, number } = props;
  // console.log(props);
  console.log(number);

  return (
    <article className="album">
      <img src={img} className="image-pointer" alt={title} />
      <h2>{title}</h2>

      <h4>{year}</h4>
      <span className="number">{`# ${number + 1}`}</span>
    </article>
  );
};
export default Album;
