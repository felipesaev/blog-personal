import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.png';
import avatarBW from 'public/avatar.png';

export default function About() {
  return (
    <Container title="Sobre – Felipe Costa">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Sobre mim
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter:{' '}
              <a href="https://twitter.com/@felipe_scost">@felipe_scost</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/felipesaev">@felipesaev</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https:///thatsallfolks.dev">
                <a>https://thatsallfolks.dev</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/felipeds-cost/">
                https://www.linkedin.com/in/felipeds-cost/
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Titulo do trabaho</h3>
          <p>Felipe Costa, FrontEnd Developer</p>
          <p>
            Olá, me chamo Felipe. Atualmente trabalho como desenvolvedor
            FrontEnd no <a href="https://getninjas.com.br/">Getninjas SA</a>,
            onde minha equipe é responsável na construção de páginas web com
            foco em performace. contínuo aprimorando meus conhecimentos e sou
            apaixonado por desenvolvimento frontend.
          </p>

          <h3>Educação</h3>
          <p>
            Felipe Costa finalizando meu curso de Analise e desenvolvimento de
            sistemas pela faculdade Cruzeiro do Sul.
          </p>
        </div>
      </div>
    </Container>
  );
}
