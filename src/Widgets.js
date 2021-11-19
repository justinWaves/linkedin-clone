import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>JustIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "New Jusin Waves record changes lives",
        "Top News - 9999 readers"
      )}
      {newsArticle(
        "Elon Musk found to be of extraterrestrial orgin",
        "Top News - 2832 readers"
      )}
      {newsArticle("Bitcoin breaks 200k!", "Crypto - 2345 readers")}
      {newsArticle(
        "Ocean Beach Boys take over town with exceptional vibes",
        "Local News - 9992 readers"
      )}

      {newsArticle("Is Redux too good?", "Code - 2832 readers")}
      {newsArticle(
        "Self-taught dev makes it to the big leagues with persistence and dedication",
        "Code - 2832 readers"
      )}
    </div>
  );
}

export default Widgets;
