type PostProps = {
  params: {
    id: string;
  };
};

export async function generateMetaData({ params }: PostProps) {
  return {
    title: `Blog | ${params.id}`,
  };
}

export default async function Post({ params }: PostProps) {
  return <h1>Blog page {params.id}</h1>;
}
