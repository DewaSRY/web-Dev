import "./search-box.css";
const SeacrhBox = (props) => {
  const { search, className, placeholder } = props;

  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={search}
    />
  );
};

export default SeacrhBox;
