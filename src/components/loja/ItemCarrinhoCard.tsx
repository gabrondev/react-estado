import CarrinhoContext from "@/context/CarrinhoContext"
import ItemCarrinho from "@/data/model/ItemCarrinho"
import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useContext } from "react"

interface ItemCarrinhoCardProps {
    item: ItemCarrinho
}

export default function ItemCarrinhoCard(props: ItemCarrinhoCardProps) {
    const { item } = props
    const { adicionarItem } = useContext(CarrinhoContext)

    return (
        <div className="flex bg-black rounded-md p-2 gap-5">
            <span>{item.produto.nome}</span>
            <div className="flex items-center gap-2">
                <button className="
                    flex justify-center h-5 w-5 bg-red-500 rounded-sm
                ">
                    <IconMinus />
                </button>
                <span>{item.quantidade}</span>
                <button className="
                    flex justify-center h-5 w-5 
                    bg-green-500 rounded-sm
                "
                    onClick={() => adicionarItem(item.produto)}
                >
                    <IconPlus />
                </button>
            </div>
        </div>
    )
}