import React from "react";
import Input from "../form/Input";
import SearchIcon from "../Icons/SearchIcon";
import MessageItem from "./MessageItem";

function MessageSideBar() {
  return (
    <div className='flex flex-col h-full min-w-80 w-80 pl-4 pt-4 border-2 border-white'>
      <div className='space-y-3'>
        <h2 className='text-xl text-left font-medium'>Conversation</h2>
        <Input name='searchBar' type='search' Icon={SearchIcon} />
      </div>
      <div>
        <MessageItem />
        <MessageItem />
        <MessageItem />
      </div>
    </div>
  );
}

export default MessageSideBar;
