---
id: 0001
title: Add Initial Project Constitution
stage: constitution
date: 2025-12-07
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: 001-physical-ai-book
user: cli_user
command: /sp.constitution
labels: ["constitution", "initial-setup"]
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

The project constitution has been successfully created at .specify/memory/constitution.md (version 1.0.0).

The following templates and files require review to ensure alignment with the new constitution:
- .specify/templates/plan-template.md
- .specify/templates/spec-template.md
- .specify/templates/tasks-template.md
- .claude/commands/sp.constitution.md
- .claude/commands/sp.adr.md
- .claude/commands/sp.analyze.md
- .claude/commands/sp.checklist.md
- .claude/commands/sp.clarify.md
- .claude/commands/sp.git.commit_pr.md
- .claude/commands/sp.implement.md
- .claude/commands/sp.phr.md
- .claude/commands/sp.plan.md
- .claude/commands/sp.specify.md
- .claude/commands/sp.tasks.md
- README.md
- CLAUDE.md

Suggested commit message: `docs: add initial project constitution v1.0.0`

## Outcome

- ✅ Impact: Project constitution created and documented.
- 🧪 Tests: No tests run.
- 📁 Files: One file created: .specify/memory/constitution.md
- 🔁 Next prompts: Review templates for alignment.
- 🧠 Reflection: Initial constitution established, setting project guidelines.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Not applicable
- Prompt variant (if applicable): Not applicable
- Next experiment (smallest change to try): Not applicable
