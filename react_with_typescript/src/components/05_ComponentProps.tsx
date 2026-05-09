//resuse

import type { ComponentProps, CSSProperties } from "react";


type ButtonBaseProps = ComponentProps<"button">;
// button element-এর সব props নিয়ে আসে
// ✅ Button element normally কী কী props নেয়?
// যেমন:
// <button
//   onClick={handleClick}
//   disabled
//   className="btn"
//   type="submit"
// >
//   Click
// </button>
// type ButtonBaseProps = {
//   onClick?: () => void;
//   disabled?: boolean;
//   className?: string;
//   type?: "button" | "submit" | "reset";
//   children?: React.ReactNode;
//   ...
// }

// এগুলা সব props:
// onClick
// disabled
// className
// type
// children
// style
// সব automatically ButtonBaseProps এর মধ্যে চলে আসে 🔥
type ButtonProps = ButtonBaseProps & { variant?: "primary" | "secondary" };

export function Button({ variant = "primary", style, ...rest }: ButtonProps) {
  const base: CSSProperties = {
    padding: "10px",
  };

  return <button style={{ ...base, ...style }} {...rest} />;
}
