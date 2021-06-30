import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Facil de usar',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        La API de Prescrypto ha sido diseñada teniendo como base la simplicidad para integraciones. 
      </>
    ),
  },
  {
    title: 'Enfocate en lo que importa',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        La API de Prescrypto te permite enfocarte en la lógica de negocios de tu integración, la parte pesada puede correr de nuestro lado.
      </>
    ),
  },
  {
    title: 'Expande tus posibilidades',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Las funcionalidades de integración pueden extenderse con el uso de DeepLinks para mayor interoperabilidad con otras plataformas.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
