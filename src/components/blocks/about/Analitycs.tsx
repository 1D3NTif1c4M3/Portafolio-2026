import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { aboutList2 } from 'data/about';

const About6: FC = () => {
  return (
     <section className="wrapper bg-pale-purple">
      <div className="container pt-12 pt-md-10 pb-10 pb-md-10">
    <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto"></div>       
        <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
          
      <div className="col-lg-6 position-relative">
          
             <div className="swiper-container dots-over shadow-lg">


  <Carousel slidesPerView={1}>
                <img alt="" className="rounded"
                  src="/img/photos/Seo.png"
                  srcSet="/img/photos/Seo@2x.png" />

                <img alt="" className="rounded"
                  src="/img/photos/Ads.png"
                  srcSet="/img/photos/Ads@2x.png" />
                
                 <img alt="" className="rounded"
                  src="/img/photos/AdsMovil.png"
                  srcSet="/img/photos/AdsMovil@2x.png" />
                


<img alt="" className="rounded"
                  src="/img/photos/AdsEscritorio.png"
                  srcSet="/img/photos/AdsEscritorio@2x.png" />
                

                <img alt="" className="rounded"
                  src="/img/photos/Analitycs.png"
                  srcSet="/img/photos/Analitycs@2x.png" />
                

                 <img alt="" className="rounded"
                  src="/img/photos/Tag.png"
                  srcSet="/img/photos/Tag@2x.png" />
                

              </Carousel>
              </div>
      </div>

      <div className="col-lg-6">
        <h2 className="display-4 mb-3">SEO | Google Tag, Ads & Analitycs </h2>

        <p style={{ textAlign: 'justify' }} className="lead fs-lg">
            Me encargo de la implementación y optimización de estrategias de SEO, Google Tag Manager, Google Ads y Google Analytics, orientadas a mejorar el posicionamiento web, medir el comportamiento de los usuarios y optimizar campañas digitales. Configuro etiquetas, eventos y conversiones mediante Google Tag Manager, analizo métricas y resultados en Google Analytics y gestiono campañas de Google Ads, trabajando con palabras clave, segmentación, conversiones y rendimiento para apoyar la captación de usuarios y el crecimiento digital.
            </p>
          </div>
          

        </div>
      </div>
      </section>
  );
};

export default About6;
