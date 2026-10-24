import Head from 'next/head';

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
};

const SITE_NAME = 'UNIVDEP';
const SITE_URL = 'https://www.univdep.mx';

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  keywords = []
}: SEOProps) => {
  const fullImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`
    : undefined;

  return (
    <Head>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
        key="description"
      />

      {keywords.length > 0 && (
        <meta
          name="keywords"
          content={keywords.join(', ')}
          key="keywords"
        />
      )}

      <meta
        name="robots"
        content="index,follow"
        key="robots"
      />
      <link
        rel="canonical"
        href={canonical}
        key="canonical"
      />

      <meta
        property="og:type"
        content={type}
        key="og:type"
      />

      <meta
        property="og:site_name"
        content={SITE_NAME}
        key="og:site_name"
      />

      <meta
        property="og:title"
        content={title}
        key="og:title"
      />

      <meta
        property="og:description"
        content={description}
        key="og:description"
      />

      <meta
        property="og:url"
        content={canonical}
        key="og:url"
      />

      <meta
       property="og:image:height"
       content="630"
       key="og:image:height"
      />

      <meta
        property="og:image:alt"
        content={title}
        key="og:image:alt"
      />

      {fullImage && (
        <meta
          property="og:image:width"
          content="1200"
          key="og:image:width"
        />
        

      )}

      <meta
        name="twitter:card"
        content={fullImage ? 'summary_large_image' : 'summary'}
        key="twitter:card"
      />

      <meta
        name="twitter:title"
        content={title}
        key="twitter:title"
      />

      <meta
        name="twitter:description"
        content={description}
        key="twitter:description"
      />

      {fullImage && (
        <meta
          name="twitter:image"
          content={fullImage}
          key="twitter:image"
        />
      )}
    </Head>
  );
};

export default SEO;
