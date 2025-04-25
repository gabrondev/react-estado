import Area from "../template/Area";

export default function Mais() {
    return (
        <Area titulo="Botão Mais" cor="green">
            <button className="btn" onClick={() => console.log('mais')}>
                +1
            </button>
        </Area>
    )
}