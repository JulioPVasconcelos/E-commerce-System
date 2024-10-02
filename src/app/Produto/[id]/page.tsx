import produtos from "@/core/Constants/produtos"

export default function PaginaProduto (props: any) {
    const id = +props.params.id
    const produto = produtos.find((p)=> p.id === id)
    return produto ? <div>{produto?.nome}</div> : <div>Produto Não Encontrado</div>
}