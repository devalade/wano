import MessageSideBar from "../components/Message/MessageSideBar";

function Messenger() {
  return (
    <div className='font-display w-full h-screen bg-gradient-dark-side text-4xl text-[#FFFF] text-center border-2 border-green'>
      <MessageSideBar />
      <div></div>
    </div>
  );
}

export default Messenger;
