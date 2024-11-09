'use client'
 
export interface ButtonProps {
  text: string;
}
export default function Button(props: any) {
    const buttonClicked = () => {
        alert("Clicked")
    }
    return (
      <button className={`w-[100px] h-[100px] bg-blue-100 text-black`} onClick={() => buttonClicked()}>{props.text}</button>
    )
}