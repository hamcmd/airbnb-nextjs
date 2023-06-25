"use client";
import type { IconType } from "react-icons";

interface ButtonProps {
    disabled?: boolean
    icon?: IconType
    label: string
    onClick: ( e: React.MouseEvent<HTMLButtonElement> ) => void
    outline?: boolean
    small?: boolean
}


const Button: React.FC<ButtonProps> = ( {
  disabled,
  icon: Icon,
  label,
  onClick,
  outline,
  small
} ) => {
  return ( 
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:capacity-80
            transition
            w-full
            ${ outline ? "bg-white border-black text-black" : "bg-rose-500 border-rose-600 text-white" }
            ${ small ? "py-1 text-sm font-light border-[1px]" : "py-3 text-md font-semibold border-2" }
        `}
    >
      {Icon && (
        <Icon 
          size = {24}
          className="
                    absolute 
                    left-4
                    top-3
                    "
        />
      ) }
      {label}
    </button>
  );
};
 
export default Button;