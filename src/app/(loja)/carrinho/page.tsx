'use client'

import AreaItemCarrinho from '@/app/components/carrinho/AreaItemCarrinho'
import CarrinhoVazio from '@/app/components/carrinho/CarrinhoVazio'
import TotalCarrinho from '@/app/components/carrinho/TotalCarrinho'
import Pagina from '@/app/components/template/Pagina'
import useCarrinho from '@/app/data/hooks/useCarrinho'
import ItemCarrinho from '@/app/data/model/ItemCarrinho'

export default function PaginaCarrinho() {
    const { itens, adicionar, remover } = useCarrinho()
    return (
        <Pagina className='flex flex-col gap-10'>
            {itens.length === 0 ? (
                <CarrinhoVazio />
            ) : (
                <>
                    <div className='flex flex-col gap-5 '>
                        {itens.map((item: ItemCarrinho) => (
                            <AreaItemCarrinho
                                key={item.produto.id}
                                item={item}
                                adicionar={(item) => adicionar(item.produto)}
                                remover={(item) => remover(item.produto)}
                            />
                        ))}
                    </div>
                    <TotalCarrinho itens={itens} />
                </>
            )}
        </Pagina>
    )

}