import React from "react";
import { memo } from "react";

function Footer({year,name}){
    console.log('footer running....')
    return (
        <div className="border bg-secondary-500 p-5 lg:py-4">
            <div className="max-w-6xl mx-auto border flex items-center justify-between h-10 text-white font-semibold text-xs tracking-wide lg:h-16">
            <p>Copyright @ {year} | {name}</p>
            <p>Powered by {name}</p>
            </div>
        </div>
    )
}
export default memo(Footer)