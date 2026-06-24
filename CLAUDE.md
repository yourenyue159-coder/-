# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) and other AI assistants when working in this repository.

## Repository Overview

This is a **practice / sandbox repository**. Per the `README.md`:

> これはスマホからの練習用である
> ("This is for practice from a smartphone.")

As of the most recent state, the repository contains **no application source code, build system, tests, or dependencies** — only `README.md` and this `CLAUDE.md`. It exists primarily to practice the GitHub + Claude Code on the web workflow (editing, committing, and pushing from a mobile device).

## Current Structure

```
/
├── README.md     # Short project description (Japanese)
└── CLAUDE.md     # This file — guidance for AI assistants
```

There is no `package.json`, `Makefile`, `requirements.txt`, or equivalent yet. There are no build, lint, or test commands to run because no toolchain has been set up.

## Git & Branch Conventions

- **Default branch:** `main`
- **Do NOT commit directly to `main`.** Develop on a feature branch and push that branch.
- When pushing, use `git push -u origin <branch-name>`.
- Write clear, descriptive commit messages.
- **Do not open a pull request unless the user explicitly asks for one.**

## Working in This Repo

Because the repository is effectively empty, expect tasks to be about **creating** things rather than modifying existing code. When the user starts building something real here:

1. **Establish the toolchain first.** Add the appropriate manifest (e.g. `package.json` for Node, `pyproject.toml`/`requirements.txt` for Python) and a `.gitignore` before adding source files.
2. **Match conventions to the chosen stack.** Once a language/framework is picked, follow its standard layout and idioms.
3. **Update this file.** Whenever the structure, tooling, or workflow meaningfully changes, revise `CLAUDE.md` so it stays an accurate map of the codebase. Replace the "practice repository" framing once real code lands.

## Notes for AI Assistants

- The user works primarily from a smartphone, so keep changes small, focused, and easy to review on a small screen.
- Don't invent structure, commands, or conventions that don't exist in the repo. If something isn't set up yet, say so and propose a concrete first step.
- Keep documentation honest about the current state rather than aspirational.
