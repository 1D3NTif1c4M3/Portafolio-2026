import { NextPage } from 'next';
import { FC, ReactNode } from 'react';
import BlockLayout from 'components/layouts/BlockLayout';
import CodeHighlight from 'components/reuseable/CodeHighlight';
import * as All from 'components/blocks/about';

const About: NextPage = () => {
  return (
    <BlockLayout title="About">
      <Block id={1} className="pb-13 pb-md-15 mb-lg-n22 mb-xl-n24">
        <All.AboutClientify/>
      </Block>

      

      <Block id={2} className="pb-13 pb-md-15">
        <All.Analitycs />
      </Block>

      


    </BlockLayout>
  );
};

type BlockProps = { id: number; children: ReactNode; className?: string; container?: boolean };

const Block: FC<BlockProps> = ({ id, children, className = '', container = true }) => {
  // markup
  const markup = `import { About${id} } from 'components/blocks/about';

<About${id} />
`;

  return (
    <section id={`snippet-${id}`} className="wrapper bg-light wrapper-border">
      {container && <div className={`container pt-15 pt-md-17 ${className}`}>{children}</div>}
      {!container && <div className={className}>{children}</div>}

      <div className="container pb-15 pb-md-17">
        <div className="card">
          <div className="card-footer border-0 position-relative" style={{ zIndex: 3 }}>
            <a
              className="collapse-link collapsed stretched-link"
              data-bs-toggle="collapse"
              href={`#collapse-snippet-${id}`}
            >
              View example's code
            </a>
          </div>

          <div id={`collapse-snippet-${id}`} className="card-footer bg-dark p-0 accordion-collapse collapse">
            <div className="code-wrapper">
              <div className="code-wrapper-inner">
                <CodeHighlight language="jsx">{markup}</CodeHighlight>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
