import { Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';

export default function PageLayout(props: any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Hoa Ngo',
    description: 'Software Engineering',
    image: 'https://nqson.com/static/meo.jpg',
    type: 'website',
    ...customMeta,
  };

  return (
    <Flex minH="100vh" direction="column" align="stretch" justify="flex-start">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://nqson.com${router.asPath}`} />
        <link rel="canonical" href={`https://nqson.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Hoa Ngo" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Shinsh_0802" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <Header />
      <Container flex={1} maxW="container.md">
        {children}
      </Container>
      <Footer />
    </Flex>
  );
}
