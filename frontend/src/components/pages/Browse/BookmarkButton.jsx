import "../../css/Browse/bookmarkButton.css";

const BookmarkButton = ({ onClick = () => {} }) => {
  return onClick ? (
    <img
      onClick={onclick}
      className="bookmark-button"
      alt=""
      src={"/svg/bookmark.svg"}
    />
  ) : (
    <img className="bookmark-button" alt="" src={"/svg/bookmark.svg"} />
  );
};

export default BookmarkButton;
