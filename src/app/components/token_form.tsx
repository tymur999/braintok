"use client"
import {Raleway} from "next/font/google";
import React from "react";
import { useFormState } from "react-dom";
import {Message} from "@/app/page";

const raleway_button = Raleway({subsets: ["latin"], weight: "600"});

export function TokenForm(props: {call: (_prevState: Message, data: FormData) => Promise<Message>}) {

    const [state, formAction] = useFormState(props.call, {message: ""} as Message);

    return <form action={formAction} className="flex flex-col mx-auto justify-center gap-2">
        <label>Enter your Canvas token below:</label>
        <input required name="canvas" className="border-2 border-white bg-black rounded"/>
        <button className="bg-white mx-auto text-black py-1 px-4 rounded">
            <div className={raleway_button.className}>
                Submit
            </div>
        </button>
        {
            state.message &&
            <div className="text-red-600 text-center">{state.message}</div>
        }
    </form>
}
