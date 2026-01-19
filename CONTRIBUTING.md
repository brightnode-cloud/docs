# Contributing to Brightnode Documentation

Thank you for your interest in contributing to Brightnode's documentation! This guide will help you get started.

## 🎯 Ways to Contribute

### Documentation Improvements
- Fix typos, grammar, or formatting issues
- Improve clarity and readability
- Add missing documentation
- Update outdated information
- Enhance code examples

### New Content
- Write tutorials for common workflows
- Create guides for advanced features
- Add troubleshooting sections
- Provide real-world examples

### Visual Improvements
- Add diagrams and illustrations
- Provide screenshots for UI walkthroughs
- Create video tutorials (link to external hosting)

## 🚀 Getting Started

### 1. Set Up Your Environment

Fork and clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/docs.git
cd docs
```

Install Mintlify CLI:

```bash
npm i -g mintlify
```

### 2. Create a Branch

Create a descriptive branch for your changes:

```bash
git checkout -b docs/improve-bnode-deployment-guide
```

Use prefixes like:
- `docs/` for documentation changes
- `fix/` for bug fixes
- `feat/` for new features

### 3. Make Your Changes

Edit the relevant `.mdx` files in your preferred editor. Run the local preview:

```bash
mintlify dev
```

This starts a local server at `http://localhost:3000` where you can see your changes in real-time.

### 4. Test Your Changes

Before submitting:

- **Preview**: Verify your changes render correctly in Mintlify
- **Lint**: Run Vale to check for style issues
- **Links**: Ensure all internal and external links work
- **Code**: Test any code examples you've added

### 5. Submit a Pull Request

Push your branch and open a pull request:

```bash
git add .
git commit -m "docs: improve Bnode deployment guide with troubleshooting section"
git push origin docs/improve-bnode-deployment-guide
```

In your PR description:
- Explain what you changed and why
- Reference any related issues
- Add screenshots if you changed UI-related docs
- Note any breaking changes

## 📝 Style Guide

### Writing Style

**Use second person ("you")**
```markdown
✅ You can deploy a Bnode by clicking the Deploy button
❌ Users can deploy a Bnode by clicking the Deploy button
```

**Use active voice**
```markdown
✅ Click the Deploy button to start your Bnode
❌ The Bnode can be started by clicking the Deploy button
```

**Use sentence case for headings**
```markdown
✅ ## How to deploy a Bnode
❌ ## How To Deploy A Bnode
```

**Be concise**
```markdown
✅ Deploy a Bnode in under 5 minutes
❌ In order to deploy a Bnode, you must first navigate to the console where you can then proceed to deploy it, which typically takes under 5 minutes
```

### Code Examples

Always provide context before code:

```markdown
Install the Brightnode CLI using pip:

\`\`\`bash
pip install brightnode-cli
\`\`\`
```

Include comments for complex code:

```python
# Initialize the client with your API key
client = BrightnodeClient(api_key="your-api-key")

# Deploy a Bnode with an A100 GPU
bnode = client.deploy_bnode(
    gpu_type="A100",
    name="my-ml-bnode"
)
```

### Formatting

- **Bold**: Use for UI elements: "Click the **Deploy** button"
- **Code**: Use for file names, commands, variables: `config.yaml`
- **Italics**: Use sparingly for emphasis: *important*
- **Links**: Use descriptive text: [Bnode pricing](link) not [click here](link)

### Structure

#### Tutorials

Follow this structure for tutorials:

```markdown
---
title: "Deploy your first Bnode"
description: "Learn how to deploy and configure a GPU Bnode"
---

Brief introduction explaining what you'll accomplish.

## What you'll learn

- How to choose a GPU type
- How to configure storage
- How to access your Bnode

## Requirements

- A Brightnode account
- At least $5 in credits
- Basic familiarity with Linux

## Step 1: Choose your GPU

Instructions for first step...

## Step 2: Configure storage

Instructions for second step...

## Next steps

- [Connect via SSH](/bnodes/configuration/use-ssh)
- [Install ML frameworks](/tutorials/bnodes/setup-pytorch)
```

#### Reference Docs

For API or technical references:

```markdown
---
title: "Deploy Bnode API"
---

## Endpoint

\`POST /api/v1/bnodes\`

## Description

Creates and deploys a new Bnode with the specified configuration.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `gpu_type` | string | Yes | GPU type (e.g., "A100", "H100") |
| `name` | string | No | Custom name for the Bnode |

## Example Request

\`\`\`bash
curl -X POST https://api.brightnode.cloud/v1/bnodes \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "gpu_type": "A100",
    "name": "my-ml-bnode"
  }'
\`\`\`

## Example Response

\`\`\`json
{
  "id": "bnode_abc123",
  "status": "deploying",
  "gpu_type": "A100"
}
\`\`\`
```

## 🔍 Review Process

### What We Look For

- **Accuracy**: Information is correct and up-to-date
- **Clarity**: Explanations are clear and easy to follow
- **Completeness**: All necessary information is included
- **Consistency**: Follows our style guide and matches existing docs
- **Links**: All links work and point to the right places

### Review Timeline

- Small fixes (typos, grammar): ~1-2 days
- Medium changes (new sections): ~3-5 days
- Large additions (new guides): ~1 week

We'll provide feedback if changes are needed. Don't worry if you don't get everything perfect the first time!

## ❓ Questions?

- **Documentation issues**: Open an issue in this repository
- **General questions**: Join our [Discord](https://discord.gg/brightnode)
- **Unclear guidelines**: Ask in your PR or open a discussion

## 🏆 Recognition

Contributors are listed in our README and on our documentation site. Thank you for helping make Brightnode's documentation better!

## 📜 Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone. We pledge to make participation in our project harassment-free for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards

**Examples of behavior that contributes to a positive environment:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Examples of unacceptable behavior:**
- Trolling, insulting/derogatory comments, and personal attacks
- Public or private harassment
- Publishing others' private information without permission
- Other conduct which could reasonably be considered inappropriate

### Enforcement

Project maintainers have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned with this Code of Conduct.

## 📄 License

By contributing to Brightnode documentation, you agree that your contributions will be licensed under the MIT License.
