import React from 'react'

const CopyRight = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 p-4 text-xl text-gray-500 font-funnel">
            <aside>
                <p>Copyright © {new Date().getFullYear()} <span className='text-black'>- Case-Themes</span></p>
            </aside>
        </footer>
    )
}

export default CopyRight