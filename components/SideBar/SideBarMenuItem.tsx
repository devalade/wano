function SideBarItem({ Icon, active }: { Icon: Function; active?: boolean }) {
  return (
    <>
      <Icon
        className={`p-2 fill-gray h-10 w-10 hover:bg-gradient-green hover:shadow-md hover:shadow-green/40 hover:fill-secondary rounded-md transition-all${
          active &&
          " bg-gradient-green  fill-secondary shadow-md shadow-green/40"
        }`}
      />
    </>
  );
}

export default SideBarItem;
