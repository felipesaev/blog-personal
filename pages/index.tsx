import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import BlogPost from '../components/BlogPost';

export default function Home({ videos }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Felipe Costa
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Desenvolvedor Frontend no {' '}
              <span className="font-semibold">Getninjas</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Construindo páginas perfomáticas e entregando produtos
              de qualidade para os usuários.
            </p>
          </div>
          <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Felipe Costa"
              height={176}
              width={176}
              src="/avatar.png"
              className="rounded-full"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Conteúdo em destaque
        </h3>
        <div className="flex gap-6 flex-col md:flex-row">
          <BlogPostCard
            title="Apenas meu primeiro post no Blog"
            slug="meu-primeiro-post-no-blog"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="Como identificar a resolução com ReactJS"
            slug="Como-identificar-a-resolução-com-react"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />          
        </div>
       
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Veja todos os posts
        </h3>
        Como-identificar-a-resolução-com-react
        <BlogPost
        title="Meu primeiro post no blog"
        summary="Aqui começa uma lnga caminhada de compartilhamento de conhecimentos e aprimoramento de códigos."
        slug="meu-primeiro-post-no-blog"
      />
      <BlogPost
        title="Como identificar a resolução com ReactJS"
        summary="Obtendo a dimensão da janela do seu navegador com ReactJS."
        slug="Como-identificar-a-resolução-com-react"
      />
      
        <Link href="/blog">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            Leia mais
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <span className="h-16" />
      </div>
    </Container>
  );
}
