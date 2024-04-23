import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CommentBox from "../../components/CommentBox/CommentBox";
import "./Comments.css";

const Comments = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 900 },
      items: 4,
    },
    tablet_median: {
      breakpoint: { max: 900, min: 650 },
      items: 3,
    },
    mobile_median: {
      breakpoint: { max: 650, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      className="comments-carousel"
      itemClass="carousel-item"
      
    >
      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
      <CommentBox />
    </Carousel>
  );
};

export default Comments;
