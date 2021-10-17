import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Consectetur consectetur ex sit magna est in cupidatat sit ullamco
          laboris et. Qui ullamco in tempor deserunt ullamco et officia elit
          irure. Culpa incididunt Lorem ullamco magna excepteur consectetur
          cupidatat velit aliqua. Non ex nostrud esse qui et in. Aliqua dolor
          commodo officia pariatur voluptate duis cupidatat ex non pariatur. Ad
          do exercitation sint aute est dolore nisi ad dolore ipsum. Labore in
          aliquip cillum id dolore aliquip consequat labore ex labore veniam.
        </p>
        <p className={styles.text}>
          Consectetur consectetur ex sit magna est in cupidatat sit ullamco
          laboris et. Qui ullamco in tempor deserunt ullamco et officia elit
          irure. Culpa incididunt Lorem ullamco magna excepteur consectetur
          cupidatat velit aliqua. Non ex nostrud esse qui et in. Aliqua dolor
          commodo officia pariatur voluptate duis cupidatat ex non pariatur. Ad
          do exercitation sint aute est dolore nisi ad dolore ipsum. Labore in
          aliquip cillum id dolore aliquip consequat labore ex labore veniam.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
