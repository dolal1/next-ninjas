import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
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
    <>
      <Head>
        <title>Ninja List | Unknown URL</title>
        <meta name="keywords" content="ninjas" />
      </Head>
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
    </>
  );
}

export default PageNotFound;
