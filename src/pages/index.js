import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/baggage.svg',
    description: (
      <>
        MOTU was designed from the ground up to be easily installed and used to get you closer to Tourist Traffic within hours!
      </>
    ),
  },
  {
    title: 'No additional Hardware! Pure SaaS',
    imageUrl: 'img/lighthouse.svg',
    description: (
      <>
        MOTU lets you focus on what you're doing best - building an awesome point of sale - we'll do take care of the Tourist Traffic. Go ahead and check our docs.
      </>
    ),
  },
  {
    title: 'Assets and Status Management',
    imageUrl: 'img/documents.svg',
    description: (
      <>
        Where a Tourist traffic comes from; how Tourist audience engages with your point of sale; what devices visitors prefer to use and much more? Those questions are taken care of by us and presented to you in a neat management dashboard!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="MyOpenTour | MOTU API">
      <header className={clsx('hero', styles.heroBanner)}>
            <div className="container">
                <img className={clsx(styles.heroImg)} src="/img/android-chrome-192x192.png" alt="MOTU"/>
                <h1 className="hero__title">#MOTU</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                    className={clsx(
                        'button button--outline button--secondary button--lg',
                        styles.getStarted,
                    )}
                    to={useBaseUrl('/en/introduction')}>
                    Get Started
                    </Link>
                </div>
            </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
