import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import { Tiles5 } from 'components/elements/tiles';
import ListColumn from 'components/reuseable/ListColumn';
import Carousel from 'components/reuseable/Carousel';
// -------- data -------- //
import { aboutList2 } from 'data/about';

const About6: FC = () => {
  return (
     <section className="wrapper bg-pale-leaf">
      <div className="container pt-12 pt-md-10 pb-10 pb-md-10">
        

          <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto"></div>
    <div className="row gx-lg-8 gx-xl-12 gy-10 mb-14 mb-md-17 align-items-center">
      <div className="col-lg-6 position-relative order-lg-2">
            {/*<Tiles5 />*/}
             <div className="swiper-container dots-over shadow-lg">


  <Carousel slidesPerView={1}>
                <img alt="" className="rounded"
                  src="/img/photos/Clientify1.png"
                  srcSet="/img/photos/Clientify1@2x.png" />

                <img alt="" className="rounded"
                  src="/img/photos/Clientify-Landing.png"
                  srcSet="/img/photos/Clientify-Landing@2x.png" />
                
                 <img alt="" className="rounded"
                  src="/img/photos/Clientify-Formularios.png"
                  srcSet="/img/photos/Clientify-Formularios@2x.png" />
              </Carousel>
              </div>
      </div>

      <div className="col-lg-6">
        <h2 className="display-4 mb-3">CRM Clientify | Marketing y Automatización</h2>

        <p style={{ textAlign: 'justify' }} className="lead fs-lg">
             En el cuál recibi capacitación para su administración e integración del CRM Clientify. Que me permite automatizar procesos de marketing y ventas, en el cuál he
              creado formularios de captación, Landing Pages, Campañas de Mailing y administrar embudos comerciales, segmentar audiencias y medir resultados mediante herramientas de analítica e integración cpara generar Tráfico Web.
            </p>
            
           

      </div>
        </div>
      </div>
      </section>
  );
};

export default About6;
