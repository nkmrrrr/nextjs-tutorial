import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Alert from "../../components/Alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <Alert type={"success"}>Success</Alert>
      <Alert type={"error"}>Success</Alert>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
