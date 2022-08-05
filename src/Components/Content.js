import React from "react";

function Content() {
  return (
    <div>
      <div className="contentcss">
        Medical Darphan > Search > <strong>FebiFlu Tablet</strong>
      </div>
      <div className="search-container">
        <form>
          <input type="text" placeholder="   Peracetamol" name="search" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="newline">
        Peracetamol <l>(128 Products)</l>
        <button className="btn-select">Aceclofenac <l> &#10006;</l></button>
        <button className="btn-select">500mg <l> &#10006;</l></button>
        <h6 style={{color : "#720B0B"}}>Remove all</h6>
      </div>
    </div>
  );
}

export default Content;
