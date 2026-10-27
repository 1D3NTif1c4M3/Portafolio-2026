import { FC } from 'react';
import NextLink from 'components/reuseable/links/NextLink';
import Link from 'next/link';
import Target from 'icons/solid-mono/Target';


const Portfolio9: FC = () => {
  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-10 pt-md-8 pb-md-8">

        <div className="row align-items-center mb-10">
          <div className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2 className="display-4 mb-3 text-center text-aqua">Últimos proyectos</h2>
            <p className="lead fs-20 mb-0 text-center">Echa un vistazo a algunos de mis proyectos más recientes</p>

      
          </div>

         
        </div>

        {/* ========== univdep.edu.mx ========== */}
        <div className="card bg-pale-violet mb-10">
          <div className="card-body p-12 pb-0">
            <div className="row">
              <div className="col-lg-4 pb-12 align-self-center">
                <div className="post-category mb-3 text-violet">Diseño y Desarrollo web (UX) (Ui)</div>
                <h3 className="h1 post-title mb-3 text-violet">univdep.edu.mx</h3>
                <p>
                Desarrollo y Mantenimiento de un sitio Web utilizando las Framework Next.js & React.js, en Backend Node.js. Diseño Responsivo, Bootstrap, Posicionamiento SEO (Open Graph, canonical, title. etc.) integración de CRM (Clientify).
                </p>
                 <p>Estatus: Actualmente actualizando</p>
                 <Link
                      title="Ver Proyecto" target="_blank" href="https://www.univdep.edu.mx/"
                      className="mt-2 text-center more hover link-violet">
                      Ver Proyecto
                </Link>

&nbsp;&nbsp;&nbsp;
                <Link
                      title="Ver Proyecto" target="_blank" href="https://www.univdep.edu.mx/Puntos-de-partida"
                      className="mt-2 text-center more hover link-violet">
                      Landing Page realizada con Next.js & React.js
                </Link>






              </div>
              <div className="col-lg-7 offset-lg-1 align-self-end">
               <a href='https://www.univdep.edu.mx/' target="_blank" >
                  <img className="img-fluid"
                    src="/img/photos/Pagina-Web-univdep-Oficial.png"
                    srcSet="/img/photos/Pagina-Web-univdep-Oficial@2x.png 2x" alt="" />
                  </a>
                
              </div>
            </div>
          </div>
        </div>


        {/* ========== univdep.edu.mx  &&&&& Escuelanormal  ========== */}
        <div className="row gx-md-8 gx-xl-10">
          <div className="col-lg-6">
            <div className="card bg-soft-blue mb-10">
              <div className="card-body p-12 pb-0">
                 <div className="post-category mb-3 text-blue">Diseño y Desarrollo web</div>
                <h3 className="h1 post-title mb-3 text-blue">univdep.online</h3>
                <p>
                 Diseño y Desarrollo Web institucional con Html 5, CSS3, Bootstrap y Javascrip y de Backend PHP. Posicionamiento SEO(keywords, description etc.)
                </p>
                <p>Estatus: Actualmente actualizando</p>
               <Link
                      title="Ver Proyecto" target="_blank" href="https://univdep.online/"
                      className="mt-2 text-center more hover link-blue mb-8">
                      Ver Proyecto
                </Link>
              </div>
              <a href='https://univdep.online/' target="_blank">
                <img className="img-fluid"
                  src="/img/photos/Pagina-Web-univdep-Online.png"
                  srcSet="/img/photos/Pagina-Web-univdep-Online@2x.png 2x" alt="" />
                </a>
              
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card bg-soft-fuchsia">
              <div className="card-body p-12 pb-0">
                <div className="post-category mb-3 text-fuchsia">Diseño y Desarrollo web</div>
                <h3 className="h1 post-title mb-3 text-fuchsia">Escuelanormal15demayo.edu.mx</h3>
                <p>
                 Diseño y Desarrollo Web institucional con Html 5, CSS3, Bootstrap y Javascrip y de Backend PHP. Posicionamiento SEO(keywords, description etc.)
                </p>
                 <p>Estatus: Actualmente actualizando</p>
                 <Link
                      title="Ver Proyecto" target="_blank" href="https://www.escuelanormal15demayo.edu.mx/"
                      className="mt-2 text-center more hover link-fuchsia mb-8">
                      Ver Proyecto
                </Link>
              </div>

             <a href='https://www.escuelanormal15demayo.edu.mx/' target="_blank">
                <img className="img-fluid"
                  src="/img/photos/Pagina-Web-Escuela-Normal.png"
                  srcSet="/img/photos/Pagina-Web-Escuela-Normal@2x.png 2x" alt="" />
                </a>
            </div>
          </div>
        </div>



        
{/* ========== IAPAS   &&&&& Turbosalltunning  ========== */}
         <div className="row gx-md-8 gx-xl-10">
          <div className="col-lg-6">
            <div className="card bg-soft-aqua mb-10">
              <div className="card-body p-12 pb-0">
                 <div className="post-category mb-3 text-aqua">Diseño y Desarrollo web</div>
                <h3 className="h1 post-title mb-3 text-aqua">www.iapas.mx/</h3>
                <p>
                 Diseño y Desarrollo Web institucional con Html 5, CSS3, Bootstrap y Javascrip y de Backend PHP. Posicionamiento SEO(keywords, description etc.)
                </p>
                <p>Estatus: Actualmente actualizando</p>
               <Link
                      title="Ver Proyecto" target="_blank" href="https://www.iapas.mx/"
                      className="mt-2 text-center more hover link-aqua mb-8">
                      Ver Proyecto
                </Link>
              </div>
              <a href='https://www.iapas.mx/' target="_blank">
                <img className="img-fluid"
                  src="/img/photos/Pagina-Web-IAPAS.png"
                  srcSet="/img/photos/Pagina-Web-IAPAS@2x.png 2x" alt="" />
                </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card bg-soft-red">
              <div className="card-body p-12 pb-0">
                <div className="post-category mb-3 text-red">Diseño y Desarrollo web</div>
                <h3 className="h1 post-title mb-3 text-red">turbosalltunning.com.mx/</h3>
                <p>
                 Diseño y Desarrollo Web institucional con Html 5, CSS3, Bootstrap y Javascrip y de Backend PHP. Posicionamiento SEO(keywords, description etc.)
                </p>
                <p> Estatus: Entregada</p>
                 <Link
                      title="Ver Proyecto" target="_blank" href="https://www.turbosalltunning.com.mx/"
                      className="mt-2 text-center more hover link-red mb-8">
                      Ver Proyecto
                </Link>
              </div>

                <a href='https://www.turbosalltunning.com.mx/' target="_blank">
                <img className="img-fluid"
                  src="/img/photos/Turbosalltunning.png"
                  srcSet="/img/photos/Turbosalltunning@2x.png 2x" alt="" />
                  </a>            
            </div>
          </div>
        </div>





      </div>
    </section>
  );
};

export default Portfolio9;
