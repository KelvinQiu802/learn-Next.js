import Link from 'next/link';

const FirstPost = () => {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>cd ..</Link>
      </h2>
    </>
  );
};

export default FirstPost;
