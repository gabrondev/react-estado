import Sala from "@/components/desafio/Sala";
import { CursoProvider } from "@/context/CursoContext";

export default function Desafio() {
    return (
        <div>
            <CursoProvider>
                <Sala></Sala>
            </CursoProvider>
        </div>
    )
}