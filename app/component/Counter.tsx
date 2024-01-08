'use client'

import { decrement, increment } from "@/redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
    
    const counter = useSelector((state: any) => state.counter.count)
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch(increment())
    }
    const decrementHandler = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <div className="text-center">
                <p className="text-4xl">{ counter}</p>
            </div>
            <div className="flex items-center justify-center gap-5 mt-10">
                <button
                    className="bg-blue-600 px-3 py-2 rounded-md active:bg-blue-400"
                    onClick={incrementHandler}
                >
                    Increment
                </button>
                <button
                    className="bg-red-700 px-3 py-2 rounded-md active:bg-red-400"
                    onClick={decrementHandler}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter;