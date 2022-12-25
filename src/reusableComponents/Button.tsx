type ButtonProps = {
    text: string 
    content: string
    onClickHandler: () => void
}

const Button = ({ text, content, onClickHandler }: ButtonProps) => {
    return(
        <button
            disabled={content ? false : true}
            onClick={onClickHandler}
            className={`w-20 h-9 uppercase text-white  rounded-lg text-sm  flex flex-col justify-center items-center 
                    ${content ? `bg-moderate-blue cursor-pointer hover:opacity-60` : `bg-grayish-blue cursor-auto hover:opacity-100`}`}
        >
            {text}
        </button>
    )
}

export default Button;