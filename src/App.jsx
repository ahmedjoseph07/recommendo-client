import ThemeToggleBtn from "./components/ThemeToggleBtn";

function App() {
    return (
        <>
            <h1 class="text-xl text-primary font-bold underline">
                Hello world!
            </h1>
            <h1 class="text-xl text-secondary font-bold underline">
                Hello world!
            </h1>
            <h1 class="text-xl text-accent font-bold underline">
                Hello world!
            </h1>
            <h1 class="text-xl text-neutral font-bold underline">
                Hello world!
            </h1>
            <ThemeToggleBtn/>
            <button className="btn btn-primary font-bold text-neutral btn-outline">
                btn p
            </button>
            <button className="btn btn-secondary font-bold text-neutral btn-outline">
                btn p
            </button>
            <button className="btn btn-accent font-bold text-neutral">
                btn p
            </button>
            <input
                type="text"
                placeholder="Type here"
                className="border rounded-xl p-2 text-neutral"
            />
        </>
    );
}

export default App;
