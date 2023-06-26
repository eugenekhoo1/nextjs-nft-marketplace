import Link from "next/link";
import "dotenv";
import { ConnectButton } from "@web3uikit/web3";
export function Header() {
  return (
    <nav className="p-5 border-b-2 flex flex-row justify justify-between items-center">
      <h1 className="py-4 px-4 font-bold text-3xl">NFT Marketplace</h1>
      <div className="flex flex-row items-center">
        <Link href="/" className="mr-4 p-6">
          Home
        </Link>
        <Link href="listings" className="mr-4 p-6">
          Listings
        </Link>
        <Link href="sell" className="mr-4 p-6">
          Sell NFTs
        </Link>
        <ConnectButton />
      </div>
    </nav>
  );
}
export default Header;
