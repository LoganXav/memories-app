import { useEffect, useState } from "react";


const Typewriter = ({  student = {} }) => {

    const [text, setText] = useState('')
    const [isTyping, setIsTyping] = useState(true)

    
        useEffect(() => {
            setTimeout(() => {
            if (isTyping) {
                const intervalId = setInterval(() => {
                    setText(prevText => {
                        const fullText = `${student.about ? student.about : 'No about text available'}`
                        const nextCharIndex = prevText.length + 1
                        const nextText = fullText.slice(0, nextCharIndex)
    
                        if (nextText === fullText) {
                            clearInterval(intervalId)
                            setIsTyping(false)
                        }    
                        return nextText
                    })
                }, 100)
                return () => clearInterval(intervalId)
            }
            }, 2000)
        }, [isTyping])

    

    

    return ( 
        <div>
            {text}
        </div>
     );
}
 
export default Typewriter;