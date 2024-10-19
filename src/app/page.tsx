import {Raleway} from "next/font/google";
import {TokenForm} from "@/app/components/token_form";

const raleway = Raleway({subsets: ["latin"]});
const raleway_heavy = Raleway({subsets: ["latin"], weight: "700"});

export interface Message {
    message: string;
}

export default async function Home() {
    async function call(_prevState: Message, data: FormData): Promise<Message> {
        "use server"
        console.log(data.get("canvas"));
        return {
            message: "Hello"
        }
    }

  return (
    <main className={raleway.className + " flex flex-col w-full h-[100vh]"}>
        <div className="d-flex w-100 p-5 text-3xl text-center flex-shrink">
            <h1 className={raleway_heavy.className}>
                logo
            </h1>
        </div>
        <div className="flex flex-col mx-auto flex-grow justify-center">
            <TokenForm call={call}/>
    </div>
    </main>
  );
}
