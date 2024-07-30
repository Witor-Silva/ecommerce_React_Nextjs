'use client'

import { useContext } from "react";
import { ContextoCarrinho } from '@/app/data/contexts/ContextoCarrinho'

const useCarrinho = () => useContext(ContextoCarrinho)
export default useCarrinho