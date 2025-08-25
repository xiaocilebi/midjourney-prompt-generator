import { memo } from "react";
import LocaleSwitcher from "@/components/locale-switcher";
import { cn } from "@/utils/style";

type Props = {
  className?: string;
  showBg?: boolean;
};

function Header({ className, showBg }: Props) {
  return (
    <div
      className={cn(
        "w-screen py-2 bg-white shadow-sm select-none max-xl:px-1",
        className
      )}
    >
      {showBg ? (
        <div className="bg absolute -z-10 top-0 left-0 h-14 w-full"></div>
      ) : null}
      <div className="max-w-screen-xl flex justify-between mx-auto">
        <div></div>
        <div>
          <LocaleSwitcher />
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
