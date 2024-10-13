'use client'
 
export default function Button(props: any) {
    const buttonClicked = () => {
        alert("hei")
    }
    return (
      <button className={`w-[100px] h-[100px] bg-blue-100 text-black`} onClick={() => buttonClicked()}>{props.text}</button>
    )
}