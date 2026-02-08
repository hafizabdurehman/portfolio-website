# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

**Feature**: Physical AI & Humanoid Robotics Textbook
**Date**: 2025-12-07
**Status**: Complete

## Overview

This quickstart guide provides the essential information needed to begin developing the Physical AI & Humanoid Robotics textbook. It covers the development environment setup, content creation workflow, and basic contribution guidelines.

## Prerequisites

Before starting development on the textbook, ensure you have:

- **Node.js**: Version 18.x or higher
- **npm or yarn**: Package manager for dependencies
- **Git**: Version control system
- **Text Editor**: VS Code recommended with MDX support
- **Basic knowledge**: Markdown, MDX, and React components (for interactive content)

## Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Start Development Server

```bash
npm run start
# or
yarn start
```

This will start the Docusaurus development server at `http://localhost:3000`.

### 4. Build for Production

```bash
npm run build
# or
yarn build
```

## Content Creation Workflow

### Creating a New Module

1. **Create the module directory** in `docs/modules/`:
   ```bash
   mkdir docs/modules/new-module-name
   ```

2. **Create the index file**:
   ```bash
   touch docs/modules/new-module-name/index.md
   ```

3. **Add content using MDX format**:
   ```md
   ---
   title: Module Title
   sidebar_label: Module Title
   sidebar_position: 1
   description: Brief description of the module
   ---

   # Module Title

   ## Learning Objectives

   - Objective 1
   - Objective 2
   - Objective 3

   ## Content

   Your content here using Markdown and React components.
   ```

4. **Update sidebars.ts** to include your new module in the navigation.

### Adding Interactive Elements

Use MDX to include interactive elements in your content:

```mdx
import ComponentName from '@site/src/components/ComponentName';

# Content with Interactive Elements

<ComponentName />

## Code Examples

You can include code examples with syntax highlighting:

```python
def example_function():
    # Your code here
    pass
```

## Diagrams

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
```

### Creating Laboratory Exercises

Laboratory exercises should follow this structure:

```md
---
title: Lab Exercise - Exercise Title
sidebar_label: Exercise Title
sidebar_position: 2
description: Brief description of the lab exercise
---

# Lab Exercise: Exercise Title

## Objectives

- Learn specific concept 1
- Practice specific skill 2
- Understand specific principle 3

## Prerequisites

- Knowledge of concept A
- Completion of Module X
- Software environment Y installed

## Instructions

1. Step 1
2. Step 2
3. Step 3

## Expected Outcome

Description of what the learner should achieve.

## Troubleshooting

- Issue 1: Solution 1
- Issue 2: Solution 2
```

## Content Guidelines

### Writing Style

- **Academic Tone**: Maintain a formal, educational tone appropriate for technical learners
- **Clear Explanations**: Explain concepts thoroughly without assuming prior knowledge
- **Progressive Complexity**: Build from basic to advanced concepts within each module
- **Practical Examples**: Include real-world applications and simulation-based examples

### Technical Standards

- **Word Count**: Each module should contribute to the overall 5,000-7,000 word target
- **Citations**: Use APA 7th edition format for all references
- **Accessibility**: Include alt text for all images and diagrams
- **Reproducibility**: Ensure all examples can be reproduced in simulation environments

### File Structure

```
docs/
├── modules/
│   └── module-name/
│       ├── index.md
│       ├── topic1.md
│       └── topic2.md
├── labs/
│   └── lab-exercise.md
├── capstone/
│   └── project.md
└── references/
    └── bibliography.md
```

## Academic Standards

### Reference Management

- **Minimum Sources**: Each module must include at least 4 credible sources
- **Peer-Reviewed**: At least 50% of sources must be peer-reviewed
- **APA Format**: All citations must follow APA 7th edition guidelines
- **In-Text Citations**: Use proper in-text citation format: (Author, Year)

### Quality Assurance

- **Technical Accuracy**: All content must be technically accurate and verified
- **Zero Plagiarism**: All content must be original with proper attribution
- **Reproducible Examples**: All simulation examples must be verified in practice
- **Learning Outcomes**: Each module must have measurable learning outcomes

## Development Commands

```bash
# Start development server
npm run start

# Build static files
npm run build

# Serve built files locally
npm run serve

# Check for broken links
npm run build && npm run serve

# Format code
npm run format

# Lint code
npm run lint
```

## Testing Your Content

### Local Testing

1. **Visual Check**: Verify content renders correctly in the development server
2. **Link Validation**: Ensure all internal links work properly
3. **Code Examples**: Test all code examples in appropriate simulation environments
4. **Cross-Reference**: Verify all references are properly cited and formatted

### Production Build Validation

```bash
npm run build
npm run serve
```

Navigate to the built site to ensure everything works as expected.

## Deployment

The textbook is automatically deployed to GitHub Pages when changes are merged to the main branch. To deploy manually:

1. Build the site: `npm run build`
2. The built files will be in the `build/` directory
3. Deploy these files to your web server or hosting platform

## Common Tasks

### Adding a New Page

1. Create a new `.md` or `.mdx` file in the appropriate directory
2. Add frontmatter with title and other metadata
3. Update `sidebars.ts` to include the new page in navigation

### Adding Images and Diagrams

1. Place images in `static/img/`
2. Reference them using: `![alt text](/img/image-name.png)`
3. For diagrams, use Mermaid syntax directly in MDX files

### Creating Custom Components

1. Create React components in `src/components/`
2. Import and use them in MDX files
3. Ensure components are accessible and responsive

## Getting Help

- **Documentation**: Refer to the [Docusaurus documentation](https://docusaurus.io/docs)
- **Code Style**: Follow the project's established patterns
- **Questions**: Check existing issues or create a new one for technical questions

## Next Steps

1. Review the [feature specification](spec.md) for detailed requirements
2. Check the [implementation plan](plan.md) for project timeline
3. Follow the [task list](tasks.md) for specific development items
4. Begin with the foundational module or content area assigned to you

This quickstart guide provides the foundation for contributing to the Physical AI & Humanoid Robotics textbook. For more detailed information, refer to the specific documentation files in the `specs/001-physical-ai-textbook/` directory.