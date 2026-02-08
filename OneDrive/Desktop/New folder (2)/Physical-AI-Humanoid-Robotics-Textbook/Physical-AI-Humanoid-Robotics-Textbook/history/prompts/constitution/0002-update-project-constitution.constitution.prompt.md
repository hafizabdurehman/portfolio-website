---
id: 0002
title: Update Project Constitution
stage: constitution
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 001-physical-ai-book
user: cli_user
command: /sp.constitution
labels: ["constitution", "update"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests: []
---

## Prompt

Project Name:
AI/Spec-Driven Book Creation — Physical AI & Humanoid Robotics

Workflow Tools:

Docusaurus • GitHub Pages • Spec-Kit Plus • Claude Code • MCP

Core Principles:

Embodied Intelligence (Conceptual): Focus on Physical AI principles and digital-to-physical workflows, explained in theory and simulation

High-Fidelity Simulation (Educational): Explain Gazebo, Unity, NVIDIA Isaac pipelines for learning purposes

Humanoid Control Systems (Software Only): ROS 2 control pipelines explained conceptually; no hardware manipulation

Safety & Reliability (Educational Focus): Teach safety concepts, sensor feedback loops, and correct ROS 2 practices

Accuracy & Evidence-Based Design: Claims backed by peer-reviewed research, robotics standards, or manufacturer documentation

Clarity for Technical Audience: Designed for CS, Mechatronics, and Robotics learners

Reproducibility & Rigor: Follow Spec-Kit Plus style; examples reproducible in simulation

Automation-First Workflow: Claude Code for MDX generation, code cleanup, and refactoring

Documentation Correctness: MCP ensures references to Docusaurus, GitHub Pages, and academic sources are precise

Writing & Research Standards:

Minimum 50% peer-reviewed sources

APA 7th edition citations

Flesch-Kincaid grade 10–12 readability

Zero plagiarism tolerance

MDX content must follow Spec-Kit Plus

Technical & Workflow Constraints:

Markdown/MDX format; full Docusaurus structure

Docusaurus build must succeed without warnings

Continuous deployment to GitHub Pages

MCP validation for Docusaurus config files and deployment references

Conventional commits required for all changes

Content Constraints:

5,000–7,000 words (excluding diagrams/code)

Minimum 15 credible sources

Diagrams & code must be educational and reproducible: Mermaid, MDX, or SVG

Deliverables:

Docusaurus website (textbook)

PDF export with citations

Structured /docs directory

Process Rules:

Use /sp.chapter for chapters

Use /sp.section for subsections

Iterative validation via MCP and Spec-Kit Plus

All examples and workflows documented for learning purposes

Success Criteria:

Technical claims verified & traceable in educational examples

Docusaurus configs correct

Zero plagiarism

Reproducible simulations and ROS 2 workflows explained conceptually

High-fidelity simulations align with book examples

## Response snapshot

The project constitution at .specify/memory/constitution.md is already up-to-date with all the specified principles, constraints, and guidelines. The file contains:

- All 9 core principles with their detailed descriptions
- Writing & Research Standards as specified
- Technical & Workflow Constraints
- Content Constraints (5,000-7,000 words, 15+ sources)
- Deliverables (Docusaurus website, PDF export)
- Process Rules for chapter/section creation
- Success Criteria for technical verification

The constitution is properly structured and aligned with the project requirements for creating an AI/Spec-Driven Book on Physical AI & Humanoid Robotics.

## Outcome

- ✅ Impact: Project constitution verified and confirmed up-to-date.
- 🧪 Tests: No tests run.
- 📁 Files: Constitution file already properly configured.
- 🔁 Next prompts: Proceed with feature specification using /sp.specify.
- 🧠 Reflection: Constitution is complete and ready for project development.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Not applicable
- Prompt variant (if applicable): Not applicable
- Next experiment (smallest change to try): Not applicable