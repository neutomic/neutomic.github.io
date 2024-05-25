import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import React from 'react';

import styles from './index.module.css';
import CodeBlock from "@theme/CodeBlock";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <Heading as="h2" className='hero__title'>
                            {siteConfig.title}
                        </Heading>
                        <p className={'hero__subtitle'}>{siteConfig.tagline}</p>
                        <p className={'hero__description'}>
                            Neutomic is a blazing fast asynchronous framework designed for building high-performance PHP applications.
                            Its non-blocking architecture and integrated toolset deliver exceptional speed and efficiency, making it ideal for demanding web applications.
                        </p>
                        <CodeBlock language={'bash'}>{`composer create-project neutomic/skeleton:dev-main my-project`}</CodeBlock>
                        <div className={styles.buttons}>
                            <Link
                                className="button button--secondary button--lg"
                                to="/docs/getting-started/introduction">
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroLogo}>
                        <img src="/images/black.svg" alt="Logo"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
