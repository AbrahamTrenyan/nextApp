import Head from 'next/head';
import Faces from '../components/Faces/Faces.jsx';
import getImages from '../helpers/getImages.js';
export async function getServerSideProps() {
  const data = await getImages(5);
  const initialLoad = [];
  data.forEach(elem => {
    initialLoad.push(elem.url)
  });
  return { props: { initialLoad } };
}

export default function Home({initialLoad}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Faces initialImgs = {initialLoad}/>
    </>
  )
}