import BasketIcon from "../Icons/BasketIcon";
import GroupeIcon from "../Icons/GroupeIcon";
import HomeIcon from "../Icons/HomeIcon";
import MessageIcon from "../Icons/MessageIcon";
import UserIcon from "../Icons/UserIcon";
import SideBarItem from "./SideBarMenuItem";

function SideBarMenu() {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      <SideBarItem Icon={HomeIcon} />
      <SideBarItem Icon={MessageIcon} active />
      <SideBarItem Icon={GroupeIcon} />
      <SideBarItem Icon={BasketIcon} />
    </div>
  );
}

function SideBar() {
  return (
    <div className='h-screen flex flex-col justify-between border-2 border-white w-20 p-2.5'>
      <h2 className='p-2 bg-gradient-green rounded-md text-secondary shadow-md shadow-green/40 text-center text-3xl font-bold'>
        W
      </h2>
      <SideBarMenu />
      <UserIcon className='w-10 h-10 fill-gray mx-auto' />
    </div>
  );
}

export default SideBar;
