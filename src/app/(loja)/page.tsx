
'use client'

import { useContext } from "react";
import Pagina from "@/app/components/template/Pagina";
import useCarrinho from "../data/hooks/useCarrinho";
import produtos from "../data/constants/produtos";
import CartaoProduto from "../components/produto/CartaoProduto";

export default function Home() {
  const { numero, incrementar, decrementar } = useCarrinho()
  return (
    <Pagina>
      <div className="flex gap-5 justify-center flex-wrap"></div>
      {produtos.map((produto) => (
        <CartaoProduto key={produto.id} produto={produto} />
      ))}
    </Pagina>
  );
}
