import { FC } from 'react';
// -------- hook -------- //
import useProgressbar from 'hooks/useProgressbar';
// -------- data -------- //
import { skill1 } from 'data/skill';
import { serviceList8 } from 'data/service';

const Services18: FC = () => {
  // used for the animated line
  useProgressbar();

  return (
    <section className="wrapper bg-light wrapper-border">
      <div className="container py-12 py-md-12">
        <div className="row gx-lg-8 gx-xl-12 gy-6 mb-10">
          <div className="col-lg-6 order-lg-2 mt-10">
            <ul className="progress-list">
              {skill1.map(({ id, title, percent, color }) => (
                <li key={id}>
                  <p>{title}</p>
                  <div className={`progressbar line soft-${color}`} data-value={percent} />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <h2  className="display-4 mb-3 text-aqua">¿Qué hago?</h2>
          
            <p style={{textAlign:'justify'}} className="lead fs-20 mb-5">Soy un creador digital y gusto por los Datos. Cuento con una amplia trayectoria en el diseño y creación de páginas web. Ejecución de Pruebas Unitarias para Front-End. Tanto en código abierto y Gestores de contenido (CMS).</p>
            <p style={{textAlign:'justify'}} className="lead fs-20 mb-5">Tengo experiencia en el posicionamiento web en motores de búsqueda tanto en SEO y SEM a través de la herramientas de  Google Adwords y Google Analitycs. Actualmente me desempeño como Web Máster en la Universidad del Desarrollo Empresarial y Pedagógico.</p>
         
            

          </div>
        </div>

        <div className="row gx-lg-8 gx-xl-12 gy-6 text-center">

          
            <div className="col-md-12 col-lg-12">
              
              <p style={{textAlign:'justify'}} className="lead fs-20 mb-5">Diseñador Web, apasionado y creativo fusionando lenguajes de programación para la usabilidad de Interfaces de Usuario. Adaptándome a las necesidades de cada proyecto y a los cambios tecnológicos constantes, así como una curiosidad natural por adoptar y descubrir nuevas herramientas y aprovechar la tecnología a nuestro favor.</p>
            <p style={{ textAlign: 'justify' }} className="lead fs-20 mb-5">Curioso e Inquieto por saber la forma en la que interactúan y funcionan los objetos tecnológicos e investigar su constante evolución y un gusto por el uso cotidiano de la tecnología digital.</p>
           <p style={{ textAlign: 'justify' }} className="lead fs-20 mb-5">Mi perfil me permite realizar consultas, operar fluidamente y mantenimiento en Bases de Datos MySql, Visualizaciónde Datos en Phyton, diseño y arquitectura de sitios web tanto código abierto ó en CMS (WordPress), así como su administración y actualización.</p>
            <p style={{ textAlign: 'justify' }} className="lead fs-20 mb-5">La revolución web y digital me ha llevado a realizar páginas con HTML, CSS3, JavaScrip, PHP y Librerias como Boostrap5, mis ultimos proyectos realizados con Frameworks React.js y Next.js.</p>
   <p style={{ textAlign: 'justify' }} className="lead fs-20 mb-5">Soy una persona orientada a metas que trata de hacer el mejor uso de los recursos mientras trabajo, me considero una persona optimista y siempre trato de ser proactivo y motivado con ganas de aprender nuevas formas de trabajo y habilidades.</p>
            
            
          
          </div>
         

        </div>
      </div>
    </section>
  );
};

export default Services18;
