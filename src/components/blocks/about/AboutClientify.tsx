import { FC } from 'react';
import Megaphone from 'icons/lineal/Megaphone';
import Link from 'next/link';

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
        <h2 className="display-4 mb-3 text-leaf">CRM Clientify | Marketing y Automatización</h2>

            <p style={{ textAlign: 'justify' }} className="lead fs-lg">
              Recibí capacitación especializada en la administración e integración del CRM Clientify, participando en la implementación de soluciones orientadas a la automatización de procesos de marketing y ventas. He desarrollado formularios de captación y Landing Pages, configurado campañas de Mailing y administrado embudos comerciales para optimizar el seguimiento de prospectos. Asimismo, he trabajado en la segmentación de audiencias y en la integración con herramientas de analítica para medir resultados, generar tráfico web y apoyar la toma de decisiones basada en datos.
            </p>
            
            <Link
                      title="Ver Proyecto" target="_blank" href="https://crm.univdep.edu.mx/Lic-en-Diseno-Grafico-y-Creatividad-Visual"
                      className="mt-2 text-center more hover link-leaf">
                      Landing Page en realizada en CRM Clientify
                </Link>

      </div>
        </div>
      </div>
      </section>
  );
};

export default About6;
