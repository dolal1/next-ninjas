import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) // redirects to pprevious page
      router.push("/");
    }, 5000);
  }, []);

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
