import { DropdownTheme } from "../DropdownTheme/DropdownTheme";


export function Navbar() {
  return (
    <nav className="flex h-20 w-full p-2">
      <div id="left" className="flex justify-start items-center h-full w-full">

      </div>
      <div id="rigth" className="flex justify-end items-center h-full w-full">
        <span>
            <DropdownTheme />
        </span>
      </div>
    </nav>
  );
}
