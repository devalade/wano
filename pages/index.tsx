import Head from "next/head";
import SideBar from "../components/SideBar/SideBar";
import Messenger from "./Messenger";

console.log(true || 1);

export default function Home() {
  return (
    <div className='max-w-full min-h-screen max-h-screen flex  bg-secondary '>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <SideBar />
      <Messenger />
    </div>
  );
}
