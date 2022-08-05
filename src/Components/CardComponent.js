import React from "react";
import NewSvg from "../Icons/NewSVG";

function CardComponent({src, heading, body, amount}) {
  return (
    <div>
      <div class="card">
        <div class="card-header">
          <img src={src} alt="component pic" />
        </div>
        <div class="card-body">
          <h4>
            {heading}
            <h3>
              <l> Rs 1,775</l> /<small> stripe</small>
            </h3>
          </h4>
          <div>
            <strong>Glenmark Pharmaceutical Limited</strong>
          </div>
          <p>{body}</p>
        </div>
        <hr></hr>
        <div className="newSVG">
          <NewSvg fill="#039b99" /> <l>Contact Supplier</l>
        </div>
        <hr className="h"></hr>
      </div>
    </div>
  );
}

export default CardComponent;
