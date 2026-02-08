# Data Model: Physical AI & Humanoid Robotics Textbook

**Feature**: Physical AI & Humanoid Robotics Textbook
**Date**: 2025-12-07
**Status**: Complete

## Overview

This document defines the key data entities and their relationships for the Physical AI & Humanoid Robotics textbook. These entities represent the core concepts that will be documented in the textbook and form the foundation for the content structure.

## Core Entities

### Textbook Module
**Description**: A self-contained section of the textbook covering specific technical concepts with learning objectives, content, examples, and exercises

**Fields**:
- `id`: Unique identifier for the module
- `title`: Title of the module
- `description`: Brief description of the module content
- `learningObjectives`: Array of learning objectives for the module
- `prerequisites`: Array of prerequisite knowledge required
- `contentSections`: Array of content sections within the module
- `laboratoryExercises`: Array of lab exercises for the module
- `assessmentItems`: Array of assessment questions/exercises
- `references`: Array of references used in the module
- `estimatedCompletionTime`: Estimated time to complete the module (in hours)

**Relationships**:
- One-to-many with ContentSection (contains multiple sections)
- One-to-many with LaboratoryExercise (contains multiple labs)
- One-to-many with AssessmentItem (contains multiple assessments)
- Many-to-many with Reference (uses multiple references)

### Content Section
**Description**: A subsection within a module that covers a specific topic or concept

**Fields**:
- `id`: Unique identifier for the section
- `moduleId`: Reference to the parent module
- `title`: Title of the section
- `content`: The main content in MDX format
- `diagrams`: Array of diagram references
- `codeExamples`: Array of code examples
- `learningOutcomes`: Array of specific learning outcomes for this section
- `duration`: Estimated time to read/understand this section (in minutes)

**Relationships**:
- Many-to-one with TextbookModule (belongs to one module)
- One-to-many with Diagram (contains multiple diagrams)
- One-to-many with CodeExample (contains multiple code examples)

### Laboratory Exercise
**Description**: A practical example that can be reproduced in simulated environments to demonstrate concepts

**Fields**:
- `id`: Unique identifier for the exercise
- `moduleId`: Reference to the parent module
- `title`: Title of the exercise
- `description`: Brief description of the exercise
- `objectives`: Array of learning objectives for the exercise
- `prerequisites`: Array of prerequisites needed to complete the exercise
- `instructions`: Step-by-step instructions in MDX format
- `simulationEnvironment`: Required simulation environment (Gazebo, Unity, Isaac)
- `expectedOutcome`: Description of expected results
- `troubleshootingTips`: Array of troubleshooting tips
- `estimatedDuration`: Estimated time to complete the exercise (in minutes)

**Relationships**:
- Many-to-one with TextbookModule (belongs to one module)
- One-to-many with SimulationEnvironment (requires specific environment)

### Simulation Environment
**Description**: A specific simulation platform used in the textbook (Gazebo, Unity, NVIDIA Isaac)

**Fields**:
- `id`: Unique identifier for the environment
- `name`: Name of the simulation environment (e.g., "Gazebo", "Unity", "NVIDIA Isaac")
- `version`: Version of the simulation environment
- `description`: Description of the environment and its use cases
- `installationGuide`: Link or reference to installation guide
- `compatibility`: System compatibility requirements
- `features`: Array of key features available in this environment

**Relationships**:
- One-to-many with LaboratoryExercise (used by multiple exercises)
- One-to-many with CodeExample (used by multiple examples)

### Code Example
**Description**: A code snippet or example used in the textbook content

**Fields**:
- `id`: Unique identifier for the example
- `sectionId`: Reference to the content section containing this example
- `simulationEnvironmentId`: Reference to the simulation environment (if applicable)
- `title`: Title or brief description of the example
- `code`: The actual code content
- `language`: Programming language or format
- `explanation`: Explanation of the code functionality
- `expectedOutput`: Description of expected output or behavior
- `reproductionSteps`: Steps to reproduce the example in simulation

**Relationships**:
- Many-to-one with ContentSection (belongs to one section)
- Many-to-one with SimulationEnvironment (uses specific environment)

### Reference Material
**Description**: Academic or technical sources cited in the textbook in APA format

**Fields**:
- `id`: Unique identifier for the reference
- `apaCitation`: Full APA 7th edition citation
- `title`: Title of the source
- `authors`: Array of author names
- `publicationYear`: Year of publication
- `sourceType`: Type of source (journal article, book, conference paper, etc.)
- `url`: URL if available online
- `peerReviewed`: Boolean indicating if peer-reviewed
- `abstract`: Brief abstract or summary
- `relevance`: Description of how this reference relates to textbook content

**Relationships**:
- Many-to-many with TextbookModule (referenced by multiple modules)
- Many-to-many with ContentSection (referenced by multiple sections)

### Assessment Item
**Description**: A question or exercise used to validate learning outcomes

**Fields**:
- `id`: Unique identifier for the assessment item
- `moduleId`: Reference to the module this assesses
- `type`: Type of assessment (multiple choice, short answer, practical, etc.)
- `question`: The assessment question or task
- `options`: Array of options for multiple choice questions
- `correctAnswer`: The correct answer or expected outcome
- `explanation`: Explanation of the correct answer
- `difficultyLevel`: Difficulty rating (beginner, intermediate, advanced)
- `learningOutcomeId`: Reference to the specific learning outcome being assessed

**Relationships**:
- Many-to-one with TextbookModule (assesses one module)
- Many-to-one with LearningOutcome (assesses specific outcome)

### Learning Outcome
**Description**: A measurable educational goal that students should achieve

**Fields**:
- `id`: Unique identifier for the learning outcome
- `moduleId`: Reference to the parent module
- `description`: Clear description of the learning outcome
- `measurableCriteria`: Criteria to measure if the outcome is achieved
- `assessmentMethods`: Array of methods to assess this outcome
- `complexityLevel`: Level of complexity (basic, intermediate, advanced)
- `relatedTopics`: Array of related topics or concepts

**Relationships**:
- Many-to-one with TextbookModule (belongs to one module)
- One-to-many with AssessmentItem (assessed by multiple items)

### Diagram
**Description**: Visual representation used in the textbook content

**Fields**:
- `id`: Unique identifier for the diagram
- `sectionId`: Reference to the content section containing this diagram
- `title`: Title or brief description
- `type`: Type of diagram (flowchart, architecture, process, etc.)
- `description`: Description of what the diagram represents
- `sourceFile`: Path to the source file (Mermaid, SVG, etc.)
- `altText`: Alternative text for accessibility
- `caption`: Caption to appear with the diagram

**Relationships**:
- Many-to-one with ContentSection (belongs to one section)

### Capstone Project
**Description**: An integrated project that combines concepts from multiple modules

**Fields**:
- `id`: Unique identifier for the capstone project
- `title`: Title of the capstone project
- `description`: Description of the project
- `objectives`: Array of learning objectives for the project
- `requiredModules`: Array of modules required to complete the project
- `instructions`: Detailed instructions in MDX format
- `simulationEnvironment`: Required simulation environment
- `expectedOutcome`: Description of expected project outcome
- `evaluationCriteria`: Criteria for evaluating project success
- `estimatedDuration`: Estimated time to complete the project (in hours)

**Relationships**:
- Many-to-many with TextbookModule (integrates multiple modules)
- One-to-many with SimulationEnvironment (uses specific environment)

## Entity Relationships

```
TextbookModule 1 -- * ContentSection
TextbookModule 1 -- * LaboratoryExercise
TextbookModule 1 -- * AssessmentItem
TextbookModule 1 -- * LearningOutcome

ContentSection 1 -- * Diagram
ContentSection 1 -- * CodeExample

LaboratoryExercise 1 -- 1 SimulationEnvironment

CodeExample 1 -- 1 SimulationEnvironment

TextbookModule * -- * ReferenceMaterial
ContentSection * -- * ReferenceMaterial

AssessmentItem 1 -- 1 LearningOutcome

CapstoneProject * -- * TextbookModule
CapstoneProject 1 -- 1 SimulationEnvironment
```

## Validation Rules

1. **Module Completeness**: Each TextbookModule must have at least one ContentSection
2. **Citation Standards**: All ReferenceMaterial entries must follow APA 7th edition format
3. **Learning Outcome Alignment**: Each module must have learning outcomes that align with the stated objectives
4. **Content Length**: Module content must contribute to the overall 5,000-7,000 word requirement
5. **Simulation Focus**: All examples and exercises must be reproducible in simulation environments only
6. **Academic Quality**: At least 50% of ReferenceMaterial entries must be peer-reviewed sources
7. **Accessibility**: All diagrams must have appropriate alt text for accessibility
8. **Reproducibility**: All LaboratoryExercise entries must include clear reproduction steps

## State Transitions

- **Content Development**: Draft → Review → Approved → Published
- **Module Status**: Planning → Development → Testing → Complete
- **Assessment Status**: Created → Validated → Active → Archived

This data model provides the foundation for organizing and structuring the Physical AI & Humanoid Robotics textbook content while ensuring all requirements from the feature specification are met.