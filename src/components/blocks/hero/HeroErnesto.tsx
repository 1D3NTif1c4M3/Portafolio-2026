import { FC } from 'react';
import CountUp from 'react-countup';
import { slideInDownAnimate } from 'utils/animation';
// -------- custom component -------- //
import Check from 'icons/lineal/Check';
import NextLink from 'components/reuseable/links/NextLink';

const Hero16: FC = () => {
  return (
    <section className="wrapper bg-gradient-blend">
      <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
        <div className="row gy-10 gy-md-13 gy-lg-0 align-items-center">

          <div className="col-md-8 col-lg-5 d-flex position-relative mx-auto">
            <div className="img-mask mask-1" style={slideInDownAnimate('0ms')}>
              <img src="/img/photos/Ernesto-Luna1.png" srcSet="/img/photos/Ernesto-Luna1@2x.png 2x" alt="" />
            </div>

            <div
              className="card shadow-lg position-absolute"
              style={{ right: '2%', bottom: '10%', ...slideInDownAnimate('300ms') }}
            >
              <div className="card-body py-4 px-5">
                <div className="d-flex flex-row align-items-center">
                  

                  <div>
                    <h3 className="counter mb-0 text-nowrap">
                      Mtro. Ernesto Luna Martínez
                    </h3>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1 col-xxl-5 text-center text-lg-start">
            <h1 style={{textAlign:'justify'}} className="display-1 mb-5">
               <span style={slideInDownAnimate('600ms')}>Soy Diseñador Gráfico & Desarrollador de Interfaces de usuario.</span>
            </h1>

        

             <p style={{textAlign:'justify'}} className="lead fs-25 lh-sm mb-7 px-md-10 px-lg-0">
              <span style={slideInDownAnimate('900ms')}>¡Hola, Bienvenidos! Soy Desarrollador WEB con interés en crear interfaces intuitivas,
              experiencias responsivas y soluciones digitales orientadas a resultados.
              Aquí podrás explorar mi trabajo y mi pasión por el mundo WEB.</span>
            </p>



          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero16;
