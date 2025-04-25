import Area from "../template/Area";

export default function Menos() {
    return (
        <Area titulo="Botão Menos" cor="red">
            <button className="btn" onClick={() => console.log('menos')}>
                -1
            </button>
        </Area>
    )
}