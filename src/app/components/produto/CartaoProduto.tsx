
import useCarrinho from "@/app/data/hooks/useCarrinho"
import Produto from "@/app/data/model/Produto"
import Image from 'next/image'

export interface CartaoProdutoProps {
    produto: Produto
}

export default function CartaoProduto(props: CartaoProdutoProps) {
    const { adicionar } = useCarrinho()
    const { nome, descricao, preco, imagem } = props.produto
    return (
        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
                <Image src={imagem} alt={nome} fill />
            </div>
            <div className="flex-1 flex-col gap-4 p-5">
                <p className="text-xl font-bold">{nome}</p>
                <p className="flex-1 text-sm text-zinc-400 ">{descricao}</p>
                <div className="flex justify-between items-center">

                    <span className="text-lg font-semibold mt-2">R${preco.toFixed(2)}</span>
                    <button onClick={() => adicionar(props.produto)} className="border rounded-full px-5 py-1 text-sm">Adicionar</button>
                </div>
            </div>
        </div>
    )
}