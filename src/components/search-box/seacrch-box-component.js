import { Component } from "react";
import "./search-box.css";
class SeacrhBox extends Component {
  render() {
    const { search, className, placeholder } = this.props;

    return (
      <input
        className={className}
        type="search"
        placeholder={placeholder}
        onChange={search}
      />
    );
  }
}

export default SeacrhBox;
