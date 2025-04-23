import Area from "../template/Area";

interface GerarNumeroProps {
    numero1: number
    numero2: number
}

export default function GerarNumero(props: GerarNumeroProps) {
    const min = Math.min(props.numero1, props.numero2)
    const max = Math.max(props.numero1, props.numero2)

    return (
        <Area titulo="Gerar Número" cor="blue">
            <div className="flex justify-center gap-5 text-2xl">
                <span>Mínimo: {min}</span>
                <span>Máximo: {max}</span>
            </div>
        </Area>
    )
}