import React from "react";
import Link from "next/link";

function PageNotFound() {
  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>This Page Cannot be found.</h2>
      <p>
        Lets try this again at the{" "}
        <Link href="">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}

export default PageNotFound;
