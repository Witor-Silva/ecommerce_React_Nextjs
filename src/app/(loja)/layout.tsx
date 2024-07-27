'use client'

import { ProvedorCarrinho } from "../data/contexts/ContextoCarrinho"

export default function Loja(props: any) {
    return (
        <ProvedorCarrinho>{props.children}</ProvedorCarrinho>
    )
}