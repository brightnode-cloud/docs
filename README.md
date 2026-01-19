# Brightnode Documentation

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/docs-brightnode.cloud-blue)](https://docs.brightnode.cloud)

Welcome to the official documentation repository for [Brightnode](https://brightnode.cloud) - a cloud computing platform for AI, machine learning, and GPU-accelerated workloads.

This repository contains the source files for our public documentation site, built with [Mintlify](https://mintlify.com/). We welcome contributions from the community to help improve our documentation!

## 📚 Documentation Structure

- **`bnodes/`** - Documentation for Bnodes (GPU/CPU instances)
  - Configuration guides
  - Storage options
  - Template management
  - Built-in utility services
- **`get-started/`** - Getting started guides and quickstarts
- **`tutorials/`** - Step-by-step tutorials for common workflows
- **`references/`** - API references and technical specifications
- **`storage/`** - Network volumes and S3-compatible storage
- **`helpers/`** - Python scripts for updating GPU/CPU types

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn

### Running Locally

1. Clone the repository:

```bash
git clone https://github.com/brightnode-cloud/docs.git
cd docs
```

2. Install Mintlify CLI:

```bash
npm i -g mintlify
```

3. Start the local development server:

```bash
mintlify dev
```

The documentation will be available at `http://localhost:3000`. Most changes are reflected live without restarting the server.

## 🤝 Contributing

We welcome contributions from the community! Whether you're fixing typos, improving explanations, or adding new guides, your help is appreciated.

### How to Contribute

1. **Fork the repository** and create a new branch for your changes
2. **Make your changes** following our [style guide](#style-guide)
3. **Test locally** using `mintlify dev` to ensure everything renders correctly
4. **Submit a pull request** with a clear description of your changes

### What to Contribute

- Fix typos, grammar, or unclear explanations
- Add missing documentation for features
- Create tutorials for common use cases
- Improve code examples
- Update outdated information
- Add diagrams or screenshots

### Style Guide

We follow these documentation standards:

- **Sentence case for headings**: "How to deploy a Bnode" not "How To Deploy A Bnode"
- **Active voice**: "Deploy the Bnode" not "The Bnode should be deployed"
- **Second person**: Use "you" instead of "we" or "the user"
- **Concise and clear**: Get to the point quickly
- **Code examples**: Include complete, runnable examples with context

For more details, see our [Google Developer Style Guide rules](.cursor/rules/google-style-guide.mdc).

## 📝 Pull Request Process

1. **Review**: All PRs require review from [@muhsinking](https://github.com/muhsinking) or other maintainers
2. **Automated checks**: PRs must pass linting and formatting checks
3. **Testing**: Verify your changes render correctly in the Mintlify preview
4. **Deployment**: Once merged to `main`, changes are automatically deployed to production

## 🔍 Linting and Formatting

### Documentation Linting

We use [Vale](https://vale.sh/) to ensure consistent style and terminology.

Install Vale:

```bash
# macOS
brew install vale

# Linux
wget https://github.com/errata-ai/vale/releases/download/v2.29.6/vale_2.29.6_Linux_64-bit.tar.gz
tar -xvzf vale_2.29.6_Linux_64-bit.tar.gz
sudo mv vale /usr/local/bin/
```

Run linting:

```bash
vale path/to/docs/
# or lint all markdown files
vale bnodes/*.mdx
```

### Python Code Formatting

We use `blacken-docs` to format Python code examples in documentation.

Install:

```bash
python -m pip install blacken-docs
```

Format code examples:

```bash
git ls-files -z -- '*.md' '*.mdx' | xargs -0 blacken-docs
```

## 🛠️ Maintenance Scripts

### Update GPU and CPU Types

These scripts fetch the latest GPU and CPU offerings from our API and update the documentation:

```bash
python helpers/gpu_types.py
python helpers/sls_cpu_types.py
```

Run these scripts when new hardware options are added to the platform.

## 📖 Documentation Best Practices

### Writing Tutorials

When creating tutorials, include:

- **Title**: Clear, descriptive title
- **What you'll learn**: Brief overview of tutorial outcomes
- **Requirements**: Prerequisites needed (e.g., account, credits, tools)
- **Step-by-step instructions**: Numbered steps with clear actions
- **Code examples**: Complete, tested examples
- **Troubleshooting**: Common issues and solutions
- **Next steps**: Where to go after completing the tutorial

### Writing Reference Documentation

For API and technical references:

- **Clear parameters**: Document all parameters with types and descriptions
- **Examples**: Provide request/response examples
- **Error codes**: Document possible errors and how to resolve them
- **Authentication**: Clearly explain auth requirements

### Adding Images

1. Add images to the `images/` directory
2. Use descriptive filenames (e.g., `bnode-deployment-wizard.png`)
3. Optimize images for web (compress, resize if needed)
4. Use PNG for screenshots, WebP for photos
5. Include alt text for accessibility

## 🏗️ Project Structure

```
docs/
├── bnodes/                  # Bnode documentation
│   ├── configuration/       # SSH, IDE connections, ports
│   ├── storage/            # Storage types, transfers, cloud sync
│   └── templates/          # Template management
├── get-started/            # Getting started guides
├── tutorials/              # Step-by-step tutorials
│   └── bnodes/            # Bnode-specific tutorials
├── references/             # Technical references
│   └── troubleshooting/   # Common issues and solutions
├── storage/               # Network volumes, S3 API
├── images/                # Images and screenshots
├── helpers/               # Maintenance scripts
├── docs.json             # Navigation configuration
└── README.md             # This file
```

## 🔗 Useful Links

- **Documentation Site**: https://docs.brightnode.cloud
- **Main Website**: https://brightnode.cloud
- **Console**: https://console.brightnode.cloud
- **Status Page**: https://status.brightnode.cloud
- **Discord Community**: https://discord.gg/brightnode

## 📄 License

This documentation is licensed under the [MIT License](LICENSE).

## 💬 Getting Help

- **Documentation Issues**: Open an issue in this repository
- **Platform Support**: Visit [support.brightnode.cloud](https://support.brightnode.cloud)
- **Community**: Join our [Discord server](https://discord.gg/brightnode)

## 🙏 Acknowledgments

This documentation is built with [Mintlify](https://mintlify.com/), an excellent documentation platform for modern developer tools.

---

**Made with ❤️ by the Brightnode team and [contributors](https://github.com/brightnode-cloud/docs/graphs/contributors)**
