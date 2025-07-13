import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadTime = () => {
    if (minutes < 30) {
      const cups = "☕️".repeat(Math.ceil(minutes / 5));
      return `${cups} ${minutes} min read`;
    } else {
      const boxes = "🍱".repeat(Math.ceil(minutes / 10));
      return `${boxes} ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{getReadTime()}</p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
