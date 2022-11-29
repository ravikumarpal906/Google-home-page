import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='gmai'>
            <div >
                <a className='Gmail' href="https://mail.google.com/mail/?tab=rm&amp;ogbl">Gmail</a>
            </div>
            <div >
                <a className='Images' href="https://www.google.co.in/imghp?hl=en&amp;tab=ri&amp;ogbl" target="_top">Images</a>
            </div>
        </div>
        <div className='prof'>
            <svg className='dot' focusable="false" viewBox="0 0 24 24">
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
            </svg>
            <div >
                <a className='SignIn' href="https://accounts.google.com/ServiceLogin?hl=en&amp;passive=true&amp;continue=https://www.google.co.in/&amp;ec=GAZAmgQ" target="_top">Sign in</a>
            </div>
        </div>
    </div>
  )
}
