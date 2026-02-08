import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">A complete and practical learning system where you master the future: humanoid robotics, ROS 2, large action models, simulation, VLA systems, hardware, and advanced AI for next-generation intelligent machines.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start Learning →
          </Link>
        </div>
      </div>
    </header>
  );
}

function WhatThisTextbookCovers() {
  const features = [

    {
      title: 'Physical AI Fundamentals',
      description: 'Learn the core principles of physical AI, including perception, planning, and control systems for robots operating in the real world.',
      link: '/docs/modules/physical-ai-foundations',
    },
    {
      title: 'Humanoid Robot Programming',
      description: 'Master ROS 2 programming, locomotion algorithms, balance control, and humanoid-specific robotics challenges.',
      link: '/docs/modules/ros2-nervous-system',
    },
    {
      title: 'Embodied Intelligence',
      description: 'Explore how AI agents learn through physical interaction, sensorimotor learning, and environment-based training.',
      link: '/docs/modules/ai-robot-brain',
    },
    {
      title: 'Vision-Language-Action Systems',
      description: 'Build integrated systems that perceive visual information, understand language, and execute physical actions.',
      link: '/docs/modules/vision-language-action',
    },
    {
      title: 'Digital Twin Simulations',
      description: 'Create and utilize digital replicas of physical systems for testing, training, and validation of robotic systems.',
      link: '/docs/modules/digital-twin',
    },
    {
      title: 'Laboratory Exercises',
      description: 'Hands-on practical sessions with real hardware and simulation environments to reinforce theoretical concepts.',
      link: '/docs/labs/ros2-labs',
    },
    {
      title: 'Capstone Project',
      description: 'A comprehensive project integrating all learned concepts to build a complete physical AI or humanoid robot system.',
      link: '/docs/capstone/voice-to-action-capstone',
    },
  ];

  return (
    <section className={styles.whatThisTextbookCovers}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={clsx('text--center', styles.sectionTitle)}>
              Explore All the Modules
            </Heading>
            <p className={clsx('text--center', styles.sectionSubtitle)}>
              This is a complete AI-native engineering curriculum designed for physical AI, humanoid robots, embodied intelligence, ROS 2 programming, digital twin simulations, and Vision-Language-Action (VLA) systems. Each module builds your robotics superpowers step by step.
            </p>
          </div>
        </div>
        <div className="row">
          {features.map((feature, index) => (
            <div key={index} className="col col--4 padding--lg">
              <div className={styles.card}>
                <div className={styles.cardContent}>
                  <Heading as="h3" className={styles.cardTitle}>
                    {feature.title}
                  </Heading>
                  <p className={styles.cardDescription}>
                    {feature.description}
                  </p>
                  <div className={styles.cardButton}>
                    <Link
                      className="button button--primary"
                      to={feature.link}>
                      Open →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section className={styles.journeySection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={clsx('text--center', styles.journeyTitle)}>
              Begin Your Robotics Journey
            </Heading>
            <p className={clsx('text--center', styles.journeySubtitle)}>
              The future belongs to physical AI, embodied intelligence, and humanoid robotics. Start mastering it today.
            </p>
            <div className={clsx('text--center', styles.journeyButton)}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Start Learning →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <WhatThisTextbookCovers />
        <JourneySection />
      </main>
    </Layout>
  );
}
