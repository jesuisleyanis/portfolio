import { ComponentPropsWithoutRef } from "react";
import classNames from "classnames";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={classNames(
        "py-0 badge-md badge-outline bg-slate-700 border border-slate-500 rounded px-1 mx-1 inline-flex items-center text-slate-300 roboto-bold",
        className,
      )}
      {...props}
    />
  );
};

export default Code;
