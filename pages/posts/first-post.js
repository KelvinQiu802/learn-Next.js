import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout';

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src='https://connect.facebook.net/en_US/sdk.js'
        strategy='lazyOnload'
        onLoad={() => console.log('Facebook Script Loaded')}
      />
      <h1>First Post</h1>
    </Layout>
  );
};

export default FirstPost;
