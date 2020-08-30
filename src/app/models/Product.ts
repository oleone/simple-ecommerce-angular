import { Imagem } from './Imagem';
import { Nota } from '.';

export interface Product {
    categoria: string;
    disponivel: boolean;
    id: string;
    imagens: Imagem[];
    nome: string;
    notas: Nota[];
    precoMedio: string;
}
