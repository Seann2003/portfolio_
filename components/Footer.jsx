import React from "react";

import { Inter } from "next/font/google";

const inter = Inter({ weight: ['400', '900'], subsets: ['latin'] })

const Footer = () => {
    return(
        <footer className={`w-full border-t border-[#33353F] ${inter.className}`}>
            <div className="mb-14 w-full container mx-auto p-4 flex justify-between items-center text-slate-400">
                <span className="">Sean Hoe</span>
                <p>Copyright &copy; All rights reserved</p>
            </div>
        </footer>
    );
};
export default Footer;