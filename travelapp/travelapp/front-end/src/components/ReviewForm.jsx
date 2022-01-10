import React from "react";

const ReviewForm = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // get input values
    const name = event.target.name.value;
    const comment = event.target.comment.value;

    // clear input values
    event.target.name.value = "";
    event.target.comment.value = "";

    // add the review
    props.addReview(props.id, { name, comment });
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="comment" placeholder="Comment" />
      <input type="submit" value="Add Review" />
    </form>
  );
};

export default ReviewForm;
