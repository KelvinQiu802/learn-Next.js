import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => console.log('Facebook Script Loaded')}
      />
      <h1>First Post</h1>
      <h2>
        <Link href='/'>cd ..</Link>
      </h2>
    </>
  );
};

export default FirstPost;
