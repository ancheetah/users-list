import { useState } from 'react';

export default function AccordionItem() {
    const [isActive, setIsActive] = useState(false);

  return (
    <div className='accordionItem'>
        <div className='accordionHeader' onClick={() => setIsActive(!isActive)}>
        <div>Alexander the Great</div>
        <div>{isActive ? '-' : '+'}</div>
        </div>
        {isActive && <div className='accordionContent'> Some content. Lorem ipsum.</div>}
    </div>
  )
}
