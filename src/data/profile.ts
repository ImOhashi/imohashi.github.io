// Este arquivo é o "contexto": todo o conteúdo do currículo vive aqui,
// separado da apresentação (src/pages/index.astro). Para atualizar o site,
// edite apenas este arquivo — o layout não precisa mudar.

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string; // ex: "2022 — Presente"
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Article {
  title: string;
  description: string;
  url: string;
  source: "Medium" | "LinkedIn";
  image?: string; // só preenchido quando o artigo tem uma capa própria
}

export interface Profile {
  name: string;
  headline: string; // o "título" abaixo do nome, ex: cargo atual
  location: string;
  summary: string; // equivalente ao "Sobre" do LinkedIn
  photo: string; // caminho em public/, ex: "/profile-photo.jpeg"
  email: string;
  links: { label: string; url: string }[];
  skills: string[];
  languages: string[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  articles: Article[];
}

export const profile: Profile = {
  name: "Leonardo Fonseca Ohashi",
  headline:
    "Senior Software Engineer at Itaú Unibanco | Tech Lead | Software & Cloud Architecture | Java | Kotlin | AWS",
  location: "São Paulo, São Paulo, Brasil",
  summary:
    "Engenheiro de software sênior, com passagens por bancos como Itaú " +
    "Unibanco, Santander e C6 Bank e vasta experiência como Tech Lead nos " +
    "mais diversos contextos. Foco em back-end, arquitetura de software e " +
    "computação em nuvem — principalmente AWS e seu ecossistema, seja em " +
    "arquiteturas serverless ou microservices. Entusiasta de Spring e da " +
    "cultura DevOps, apaixonado por Docker e seu universo, e aprendiz de " +
    "Golang. Gosto de compartilhar o que aprendo por meio de artigos, " +
    "palestras e meetups. Fora do teclado, sou apaixonado por música e " +
    "tenho um cachorro de nome esquisito.",
  photo: "/profile-photo.jpeg",
  email: "leonardoohashi.mkt@gmail.com",
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/leonardofonseca-ohashi",
    },
    { label: "GitHub", url: "https://github.com/ImOhashi" },
    { label: "Medium", url: "https://medium.com/@leonardoohashi.mkt" },
  ],
  skills: [
    "Java",
    "Kotlin",
    "AWS",
    "Hexagonal Architecture",
    "Amazon DynamoDB",
    "Amazon EKS",
    "Spring Boot",
    "Docker",
    "Kubernetes",
  ],
  languages: [
    "Português (Nativo)",
    "Língua Brasileira de Sinais — Libras (Profissional)",
    "Inglês (Intermediário)",
    "Japonês (Básico)",
    "Espanhol (Básico)",
  ],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Itaú Unibanco",
      location: "São Paulo, São Paulo, Brasil",
      period: "julho de 2025 — Presente",
      highlights: [
        "Atuação no contexto de pagamentos, desenvolvendo microservices, lambdas e módulos reutilizáveis pelo time e pela biblioteca Spring interna do banco.",
        "Introdução do time ao uso de arquitetura hexagonal e AOP para annotations reutilizáveis, elevando o padrão de POO, testes e2e/unitários, code review e pair programming.",
      ],
    },
    {
      role: "Senior Software Engineer — Tech Lead, Squad Transforma Fiscal",
      company: "Itaú Unibanco",
      location: "São Paulo, Brasil",
      period: "setembro de 2024 — julho de 2025",
      highlights: [
        "Liderança técnica do time, planejamento, gestão e PDI dos membros, atuando junto ao time de negócios em normas regulatórias (BRGaaP).",
        "Principal entrega: fluxo 100% serverless de processamento ETL de gestão de perdas da Holding, atendendo normativas fiscais em alto volume de dados.",
      ],
    },
    {
      role: "Staff Software Engineer — Tech Lead, Squad DLB (Criptografia)",
      company: "F1RST Digital Services",
      location: "São Paulo, Brasil",
      period: "maio de 2024 — agosto de 2024",
      highlights: [
        "Liderança técnica do time de criptografia do banco, incluindo planejamento, PDI dos membros e atendimento a incidentes.",
        "Principal entrega: portal de gestão de acessos em nível nacional e internacionalização das APIs de gestão de acessos, com migração para ambiente AWS.",
      ],
    },
    {
      role: "Senior Software Engineer, Squad PIX",
      company: "C6 Bank",
      location: "São Paulo, São Paulo, Brasil",
      period: "agosto de 2023 — maio de 2024",
      highlights: [
        "Desenvolvimento e manutenção de serviços do Pix, novos produtos e ferramentas internas para backoffice e áreas administrativas.",
        "Mentoria de novos membros e estagiários, plantões de incidentes e automação de soluções paliativas.",
      ],
    },
    {
      role: "Software Engineer, Squad PIX",
      company: "C6 Bank",
      location: "São Paulo, São Paulo, Brasil",
      period: "abril de 2022 — agosto de 2023",
      highlights: [
        "Desenvolvimento e manutenção de serviços do Pix, análise e apoio a incidentes, implantações e refinamentos técnicos.",
        "Desenvolvimento de fluxos de teste e documentação técnica.",
      ],
    },
    {
      role: "Software Engineer, Squad Orquestração de Carteiras",
      company: "Itaú Unibanco",
      location: "São Paulo, Brasil",
      period: "janeiro de 2022 — abril de 2022",
      highlights: [
        "Modernização e nova arquitetura do orquestrador de serviços de investimento, em conjunto com consultores AWS.",
        "Propostas de linguagens, fluxos, POCs e testes de performance para adaptação do fluxo existente.",
      ],
    },
    {
      role: "Software Engineer — Tech Lead, Squad Estrutural de Canais (cliente Santander)",
      company: "NTT DATA Europe & LATAM",
      location: "São Paulo, São Paulo, Brasil",
      period: "julho de 2021 — janeiro de 2022",
      highlights: [
        "Desenvolvimento de peças estruturais entre canais digitais e mainframe, decomissionamento de peças legadas e projetos regulatórios.",
        "Contratos de APIs REST, entrevistas técnicas e desenvolvimento de novos integrantes do time.",
        "Stack: Java 11, Spring Boot, Spring Security, Apache Camel, Kubernetes, OpenShift, MongoDB, Redis.",
      ],
    },
    {
      role: "Software Engineer",
      company: "UOL — Universo Online",
      location: "São Paulo, São Paulo, Brasil",
      period: "maio de 2021 — julho de 2021",
      highlights: [],
    },
    {
      role: "Junior Software Engineer, Squad Athena (cliente Santander)",
      company: "everis",
      location: "São Paulo e Região, Brasil",
      period: "junho de 2020 — maio de 2021",
      highlights: [
        "Evolução da plataforma Athena de gerenciamento de chatbots dos canais inteligentes do banco, desenvolvendo novos módulos e mantendo peças existentes.",
        "Responsável pelo time de sustentação da plataforma e pela POC de integração entre o motor NLP Clever e a Alexa.",
        "Stack: Node.js, TypeScript, Java, Spring Boot, MongoDB, Redis, AWS (S3, Lambda, CloudWatch).",
      ],
    },
    {
      role: "Node.js Fullstack Developer",
      company: "Comunikime",
      location: "São Paulo, Brasil",
      period: "janeiro de 2020 — maio de 2020",
      highlights: [
        "Principal responsável pela plataforma CM Dashboard, de monitoramento de produtividade e qualidade de uma operação telefônica.",
        "Desenvolvimento de front-end, reescrita do back-end, levantamento de requisitos e definição de arquitetura.",
        "Stack: Node.js, TypeScript, React, Docker, MS SQL, C#.",
      ],
    },
    {
      role: "Back-end Developer (Estágio), Squad IoT e Inovação",
      company: "TIVIT",
      location: "São Paulo e Região, Brasil",
      period: "janeiro de 2019 — janeiro de 2020",
      highlights: [
        "Desenvolvimento do portal Etask, de abertura e gerenciamento de chamados internos, com levantamento de requisitos e definição de arquitetura.",
        "Stack: Node.js, Golang, PostgreSQL, Redis, Docker, AngularJS.",
      ],
    },
  ],
  education: [
    {
      degree: "Pós-graduação Lato Sensu, Java Applied Engineering",
      institution: "UNIPDS",
      period: "agosto de 2025 — agosto de 2026",
    },
    {
      degree: "Tecnólogo, Análise de Sistemas de Computação",
      institution: "São Paulo Tech School — SPTech",
      period: "2018 — 2020",
    },
    {
      degree: "Técnico, Informática",
      institution: "ETEC — Escola Técnica Estadual de São Paulo",
      period: "2017 — 2018",
    },
  ],
  certifications: [
    "Modelagem Arquitetural - C4 Model (Udemy)",
    "Autenticação Stateful e Stateless em Microsserviços (Udemy)",
    "Architecting on AWS (Amazon Web Services)",
    "Arquitetura Hexagonal/Ports and Adapters NA PRÁTICA (Udemy)",
    "Apache Kafka (Udemy)",
  ],
  articles: [
    {
      title: "Implementando Serviços Assíncronos em Spring Boot com Java",
      description:
        "Guia prático para implementar serviços assíncronos em aplicações Spring Boot usando @Async e ThreadPoolTaskExecutor.",
      url: "https://www.linkedin.com/pulse/implementando-servi%C3%A7os-ass%C3%ADncronos-em-spring-boot-com-fonseca-ohashi-dct8f/",
      source: "LinkedIn",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQE1sWT2oOCI9w/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734574198990?e=2147483647&v=beta&t=ZNyzkeu1uiHPIteVg3XDGn1H-bngLrAzNWNnjuyjkls",
    },
    {
      title: "Implementando Serviços Assíncronos em Spring Boot com Java",
      description:
        "A mesma discussão sobre @Async e ThreadPoolTaskExecutor, publicada no Medium.",
      url: "https://medium.com/@leonardoohashi.mkt/implementando-servi%C3%A7os-ass%C3%ADncronos-em-spring-boot-com-java-720326bef0e2",
      source: "Medium",
    },
    {
      title: "Como não usar try-catch: uma breve provocação",
      description:
        "Uma reflexão sobre tratamento de exceções em Java: por que usar exceções específicas e centralizar o gerenciamento de erros em vez de espalhar try-catch genéricos pelo código.",
      url: "https://medium.com/@leonardoohashi.mkt/como-n%C3%A3o-usar-try-catch-uma-breve-provoca%C3%A7%C3%A3o-24ca00d54e61",
      source: "Medium",
    },
    {
      title:
        "Criando ferramentas internas: como AOP e annotations customizadas podem acelerar seu time",
      description:
        "Como Programação Orientada a Aspectos e annotations customizadas ajudam times a reduzir redundância de código e acelerar a produtividade.",
      url: "https://www.linkedin.com/pulse/criando-ferramentas-internas-como-aop-e-annotations-fonseca-ohashi-pvl9f/",
      source: "LinkedIn",
    },
  ],
};
