import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    // Retorne um objeto com os parâmetros necessários
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } }
        ],
        fallback: false // Pode ser true ou 'blocking' se necessário
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    // Busque os dados necessários com base no `context.params.id`
    return {
        props: {
            // Seus dados aqui
        }
    };
};

const Post = ({ data }: any) => {
    // Renderize os dados da postagem
    return <div>{/* Dados aqui */}</div>;
};

export default Post;
