import {Raleway} from "next/font/google";

const raleway = Raleway({subsets: ["latin"]});
const raleway_heavy = Raleway({subsets: ["latin"], weight: "700"});
const raleway_button = Raleway({subsets: ["latin"], weight: "600"});

export default function Home() {
  return (
    <main className={raleway.className + " flex flex-col w-full h-[100vh]"}>
        <div className="d-flex w-100 p-5 text-3xl text-center flex-shrink">
            <h1 className={raleway_heavy.className}>
                logo
            </h1>
        </div>
        <div className="flex flex-col mx-auto flex-grow justify-center">
            <form className="flex flex-col mx-auto justify-center gap-2">
                <label>Enter your Canvas token below:</label>
                <input className="border-2 border-white bg-black rounded"/>
                <button className="bg-white mx-auto text-black py-1 px-4 rounded">
                    <div className={raleway_button.className}>
                        Submit
                    </div>
                </button>
            </form>
    </div>
    </main>
  );
}
