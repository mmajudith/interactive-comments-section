type TextInputProps = {
    placeholder: string
    reply?: string
    content: string
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ placeholder, reply, content, handleChange}: TextInputProps) => {
    return(
        <div className={`w-[95%] h-20 m-auto ${reply ? `md:w-[73%] md:ml-[11.1%]`:`md:w-9/12 md:ml-[10.4%]`} relative z-10`}>
            <textarea 
                value={content}
                onChange={(e) => handleChange(e)}
                className='w-full h-full placeholder-grayish-blue text-dark-blue resize-none border-light-gray border-[2px] pl-4 pt-3 
                    overflow-hidden rounded-md text-sm outline-none focus:border-moderate-blue focus:border-[1px] caret-moderate-blue'
                placeholder={placeholder}
            >
            </textarea>
        </div>
    )
}

export default TextArea;