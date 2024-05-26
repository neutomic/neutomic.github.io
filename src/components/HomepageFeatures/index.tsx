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
// @ts-ignore
import SSECode from './sections/sse-code.mdx';
// @ts-ignore
import SSEDescription from './sections/sse-description.mdx';

type FeatureItem = {
    id: string;
    code: React.JSX.Element;
    description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        id: 'hello-world',
        code: <HelloWorldCode />,
        description: <HelloWorldDescription />,
    },
    {
        id: 'database',
        code: <DatabaseCode />,
        description: <DatabaseDescription />,
    },
    {
        id: 'benchmark',
        code: <BenchmarkCode />,
        description: <BenchmarkDescription />,
    },
    {
        id: 'sse',
        code: <SSECode />,
        description: <SSEDescription />,
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
                    <div className={styles.featureContainer} key={idx} id={props.id}>
                        <Feature {...props} reverse={reverse} />
                    </div>
                )
            })}
        </section>
    );
}
