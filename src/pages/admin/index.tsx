import { useState } from "react"
import { Header } from "../../components/header"
import { Input } from "../../components/inputs"

export function Admin() {
    const [nameInputs, setNameInputs] = useState("");
    const [urlInputs, setUrlInputs] = useState("");
    const [textColorInputs, setTextColorInputs] = useState("#f1f1f1");
    const [backgroundColorInputs, setBackgroundColorInputs] = useState("#121212");




    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header />

            <form className="flex flex-col mt-8 mb-3 w-full max-w-xl">
                <label className="text-white font-medium mt-2 mb-2">Nome do link</label>
                <Input
                    placeholder="Digite o nome do link"
                    value={nameInputs}
                    onChange={(e) => setNameInputs(e.target.value)}
                />

                <label className="text-white font-medium mt-2 mb-2">Url do link</label>
                <Input
                    type="url"
                    placeholder="Digite a url"
                    value={urlInputs}
                    onChange={(e) => setUrlInputs(e.target.value)}
                />

                <section className="flex my-4 gap-5">
                    <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">Cor do link</label>
                        <input type="color"
                         value={textColorInputs}
                         onChange={ (e) => setTextColorInputs(e.target.value)}
                          />
                    </div>

                     <div className="flex gap-2">
                        <label className="text-white font-medium mt-2 mb-2">Fundo do link</label>
                        <input type="color"
                         value={backgroundColorInputs}
                         onChange={ (e) => setBackgroundColorInputs(e.target.value)}
                          />
                    </div>
                </section>

                <div className="flex items-center justify-start flex-col mb-7 p-1 border-gray-100/25 border rounded-md">
                    <label className="text-white font-medium mt-2 mb-3">Veja como esta: </label>
                    <article
                        className="w-11/12 max-w-lg flex flex-col items-center justify-between bg-zinc-900 rounded px-1 py-3"
                        style={{marginBottom:8, marginTop: 8, backgroundColor: backgroundColorInputs}}>
                        <p style={{color: textColorInputs}}>Canal do yt</p>
                    </article>
                </div>
            </form>
        </div>
    )
}