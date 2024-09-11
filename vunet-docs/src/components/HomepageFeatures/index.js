import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Deploy Platform',
    Svg: require('@site/static/img/deploy.svg').default,
    description: (
      <>
        Install vuSmartMaps™ on a Virtual Machine-based environment of your choice.
      </>
    ),
  },
  {
    title: 'Ingest Data',
    Svg: require('@site/static/img/ingest_data.svg').default,
    description: (
      <>
        Ingest your data into vuSmartMaps™ from a wide array of data sources.
      </>
    ),
  },
  {
    title: 'Gain Insights',
    Svg: require('@site/static/img/gain_insights.svg').default,
    description: (
      <>
        Analyse and understand all your complex information through Dashboards, Alerts, etc.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
          <div className="col col--12 text--center">
            <h2>Get Started with vuSmartMaps™</h2>
            <p><strong><em>the intelligent Business Observability platform!</em></strong></p>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
