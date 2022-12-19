import React, { useEffect, useRef } from 'react';
import ReactDom  from 'react-dom';


const modalRoot = document.getElementById('modal_root');

const generate = (onclose) =>{
    const divBlur = document.createElement('div');
    divBlur.classList.add('modalBlur');
    divBlur.onclick = onclose
    const divPop = document.createElement('div')
    divPop.classList.add('modalPop')

    divBlur.appendChild(divPop)

    return divBlur
}

const Modal = ({children , open, onClose}) => {

    const modalWrapper = useRef(generate(onClose))

    useEffect( () =>{
        if(open){
            modalRoot.appendChild(modalWrapper.current)
            modalRoot.style.zIndex = '10'
        }
        else{
            if(modalRoot.children.length > 0){
                modalRoot.removeChild(modalWrapper.current)
                modalRoot.style.zIndex = '-10'

            }
        }
        return ()=>{
            if(modalRoot.children.length > 0){
                modalRoot.removeChild(modalWrapper.current)
                modalRoot.style.zIndex = '-10'

            }
        }
    }, [open])

    return ReactDom.createPortal(children, modalWrapper.current.getElementsByTagName('div')[0])
};

export default Modal;