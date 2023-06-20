import { forwardRef } from "react";
import { twMerge } from "tailwind-merge"
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
 const Input = forwardRef<HTMLInputElement, InputProps>(({
    className,
    type,
    disabled,
    ...props
 },ref)=>{
   return(<input
    type={type}
    className={twMerge(`flex 
    w-full 
    rounded-md 
    bg-blue-300
    border
    border-transparent
    px-3 
    py-3 
    text-sm 
    file:border-0 
    file:bg-transparent 
    file:text-sm 
    file:font-medium 
    placeholder:text-neutral-700 
    disabled:cursor-not-allowed 
    disabled:opacity-50
    focus:outline-none
  `,
  className
  )}
  disabled={disabled}
      ref={ref}
      {...props}
        />
        )
 });
 Input.displayName="Input";
export default Input;
