import React from "react";
import { AiOutlineLoading } from "react-icons/ai"

const Loading = () => {
    return (
        <div className="h-screen w-11/12 mx-auto border flex justify-center items-center">
            <div className="flex flex-col gap-2">
                <span className="text-4xl"><AiOutlineLoading className="animate-spin"></AiOutlineLoading></span>
                <span className="font-semibold text-xs">Loading...</span>
            </div>
        </div>
    )
}
export default Loading