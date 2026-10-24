import { NextPage } from 'next';
import { Fragment } from 'react';
import PageProgress from 'components/common/PageProgress';
// -------- custom component -------- //
import { HeroErnesto } from 'components/blocks/hero';
import { ServicesErnesto } from 'components/blocks/services';
import { PortfolioErnesto} from 'components/blocks/portfolio';
import { AboutClientify, Analitycs } from 'components/blocks/about';
import { FooterErnesto } from 'components/blocks/footer';

// SEO ///
import SEO from 'components/seo/SEO';


// SEO ///
const PortfolioSchema = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ernesto 🌛 Luna ',
    jobTitle: 'Diseñador y Desarrollador Web',
    description:
      'Diseñador y desarrollador web especializado en Front End, React, Next.js, diseño de interfaces, SEO, analítica digital, Google Ads y soluciones de comercio electrónico.',
    url: 'https://www.tudominio.com/',
    knowsAbout: [
      'Desarrollo Web',
      'Diseño Web',
      'Front End',
      'React',
      'Next.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'SEO',
      'Google Ads',
      'Google Analytics',
      'Google Tag Manager',
      'Analítica Digital',
      'E-commerce',
      'Shopify',
      'Ciencia de Datos'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
};


// SEO ///




const ErnetoLuna: NextPage = () => {
  return (
    <Fragment>

      <SEO
  title="Ernesto Luna 🌛 Diseñador y Desarrollador Web"
  description="Portafolio profesional de Diseñador y Desarrollador web especializado en Front End, React, Next.js, diseño de interfaces, SEO, analítica digital, Google Ads y desarrollo de soluciones web."
  canonical="https://www.tudominio.com/"
  image="/img/photos/Ernesto-Luna-WEB.png"
  keywords={[
    'diseñador web',
    'desarrollador web',
    'diseñador y desarrollador web',
    'desarrollador Front End',
    'desarrollador frontend',
    'diseño web',
    'desarrollo web',
    'React',
    'Next.js',
    'JavaScript',
    'HTML',
    'CSS',
    'Bootstrap',
    'SEO',
    'Google Ads',
    'Google Analytics',
    'Google Tag Manager',
    'analítica digital',
    'e-commerce',
    'Shopify',
    'ciencia de datos',
    'portafolio de desarrollador web',
    'portafolio de diseñador web'
  ]}
/>
      
<PortfolioSchema/>

      <PageProgress />

      {/* ========== header ========== */}
      <header className="wrapper bg-gray">
        {/*<Navbar social fancy navClassName="navbar navbar-expand-lg fancy navbar-light navbar-bg-light" />*/}
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <HeroErnesto/>

        {/* ========== what i do section ========== */}
        <ServicesErnesto/>

        {/* ========== latest projects section ========== */}
        <PortfolioErnesto/>



        <AboutClientify/>
         <Analitycs/>

        {/* ========== contact and footer section ========== */}
        <FooterErnesto/>
      </main>
    </Fragment>
  );
};

export default ErnetoLuna;
