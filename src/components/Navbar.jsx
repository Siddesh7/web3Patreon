import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import CreatePost from "./createPost";
const Navbar = () => {
  const { address } = useAccount();
  return (
    <div className="flex flex-row justify-between items-center w-[90%] m-auto pt-[40px]">
      <h1>logo</h1>
      <div className="flex flex-row gap-4">
        {address && <CreatePost />} <ConnectKitButton />
      </div>
    </div>
  );
};

export default Navbar;
