import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Physical AI Foundations',
      items: [
        'modules/physical-ai-foundations/index',
        // Additional files will be added as they are created
      ],
    },
    {
      type: 'category',
      label: 'Module 1: ROS 2 Nervous System',
      items: [
        'modules/ros2-nervous-system/index',
        'labs/ros2-labs',
        // Additional files will be added as they are created
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin Simulation',
      items: [
        'modules/digital-twin/index',
        'labs/digital-twin-labs',
        // Additional files will be added as they are created
      ],
    },
    {
      type: 'category',
      label: 'Module 3: AI-Robot Brain',
      items: [
        'modules/ai-robot-brain/index',
        'labs/isaac-labs',
        // Additional files will be added as they are created
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action Systems',
      items: [
        'modules/vision-language-action/index',
        'labs/vla-labs',
        'capstone/voice-to-action-capstone',
        // Additional files will be added as they are created
      ],
    },
    {
      type: 'category',
      label: 'Reference Materials',
      items: [
        'references/bibliography',
        'references/citation-guidelines'
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/simulation-setup',
        'tutorials/environment-setup',
        'tutorials/troubleshooting'
      ],
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
