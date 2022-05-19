import React, { useState } from "react";

const CommentBox = ({ Data }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="container">
      ------------------Comment Box---------------------
      <div>{Data?.id}</div>
      <div className="timestamp">{Data?.timestamp}</div>
      <div className="body">{Data?.body}</div>
      <div className="buttonBox" onClick={() => setExpand(!expand)}>
        <div>Reply</div>
        <div>Give</div>
        <div>Award</div>
        <div>Share</div>
        <div>Repost</div>
        <div>Save</div>
      </div>
      <div
        style={{
          display: expand ? "block" : "none",
          paddingLeft: "50px",
          borderLeft: "2px solid black",
        }}
      >
        {Data.replies &&
          Data?.replies.map((exp) => {
            return <CommentBox Data={exp} />;
          })}
      </div>
    </div>
  );
};

export default CommentBox;
