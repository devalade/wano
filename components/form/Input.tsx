interface Input {
  name: string;
  type?: string;
  value?: string | number;
  className?: string;
  Icon: Function;
}

function Input({ name, type, Icon }: Input) {
  return (
    <div className='group w-72 flex space-x-2 px-1.5 py-2 border-2 border-gray rounded-md'>
      <Icon className='w-3.5 h-3.5 fill-gray' />
      <input
        type={type}
        name={name}
        id=''
        placeholder='Search user'
        className=' h-4 w-32 bg-transparent text-xs border-none outline-none placeholder:text-xs '
      />
    </div>
  );
}

export default Input;
