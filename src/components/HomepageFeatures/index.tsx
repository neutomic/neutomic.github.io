import styles from './styles.module.css';
import React from "react";

// @ts-ignore
import HelloWorldDescription from './sections/hello-world-description.mdx';
// @ts-ignore
import HelloWorldCode from './sections/hello-world-code.mdx';
// @ts-ignore
import DatabaseDescription from './sections/database-description.mdx';
// @ts-ignore
import DatabaseCode from './sections/database-code.mdx';
// @ts-ignore
import BenchmarkDescription from "./sections/benchmark-description.mdx";
// @ts-ignore
import BenchmarkCode from './sections/benchmark-code.mdx';

type FeatureItem = {
    code: React.JSX.Element;
    description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        code: <HelloWorldCode />,
        description: <HelloWorldDescription />,
    },
    {
        code: <DatabaseCode />,
        description: <DatabaseDescription />,
    },
    {
        code: <BenchmarkCode />,
        description: <BenchmarkDescription />,
    },
];

function Feature({code, description, reverse}: FeatureItem & {reverse: boolean}) {

    if (reverse) {
        return (
            <div className={styles.featureSection}>
                <div className={styles.featureDescription}>{description}</div>
                <div className={styles.featureCode}>{code}</div>
            </div>
        );
    }

    return (
        <div className={styles.featureSection}>
            <div className={styles.featureCode}>{code}</div>
            <div className={styles.featureDescription}>{description}</div>
        </div>
    );
}

export default function HomepageFeatures(): React.JSX.Element {
    return (
        <section className={styles.features}>
            {FeatureList.map((props, idx) => {
                const reverse = idx % 2 !== 0; // alternate position

                return (
                    <div className={styles.featureContainer} key={idx}>
                        <Feature {...props} reverse={reverse} />
                    </div>
                )
            })}
        </section>
    );
}
