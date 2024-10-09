# LinkedIn Connection Chrome Extension

This Chrome extension automates the process of sending connection requests to profiles on LinkedIn. It interacts with the LinkedIn platform to identify connectable profiles and send them a connection request.

## Features
- Automatically send connection requests to visible profiles on LinkedIn.
- Button in the extension popup to initiate the connection process.
- Notifications for successful connections or errors.

## Prerequisites
Before starting with the setup of this extension, ensure that you have the following installed:
- **Node.js** (Recommended version: 14 or higher)
- **npm** (Node Package Manager, comes with Node.js)
- **Chrome Browser** (For testing the extension)
- **Git** (For version control)

## Installation Guide

### Step 1: Clone the repository
Clone this repository to your local machine using the following command:

```bash
git clone <your-repo-url>
cd linkedin-extension

### Step 2: Install Dependencies
Install the required dependencies for the extension by running:

```bash
pnpm install

### Step 3: Build the Project
Build the project by running the following command:

```bash
pnpm run build

This will create the necessary dist folder in your project directory.

### Step 4: Load the Extension in Chrome
To test the extension, load it into your Chrome browser in developer mode:

- Open Chrome and go to chrome://extensions/
- Enable Developer mode by toggling the switch at the top right corner.
- Click Load unpacked and select the dist folder inside your project.

### Step 5: Use the Extension
Once installed, you should see the extension’s icon in the Chrome toolbar.

- Click on the extension icon to open the popup.
- Press the Connect with All button to send connection requests to all visible profiles.

### File Structure
linkedin-extension/
│
├── dist/                 # Compiled extension files (after build)
├── node_modules/         # Node.js dependencies
├── public/               # Static assets (e.g., icons, manifest)
│   ├── contentScript.js   # Script injected into LinkedIn pages
│   ├── icon.png          # Extension icon
│   └── manifest.json     # Chrome extension manifest file
├── src/                  # Source code for the extension
│   ├── assets/           # Asset files
│   ├── components/       # React components (e.g., App, ConnectButton)
│   ├── App.jsx           # Main React component
│   ├── App.css           # Styles for App component
│   ├── main.jsx          # Entry point for the React app
│   └── index.css         # Global CSS
├── .gitignore            # Git ignore file
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML template
├── package-lock.json     # npm lock file
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
├── vite.config.js        # Vite config for building the extension
└── tsconfig.json         # TypeScript configuration (if using TypeScript)

### How to Contribute

Feel free to contribute to this project! Here's how:

- Fork the repository on GitHub.
- Clone your forked repository:

```bash
git clone <your-fork-url>

- Make the changes you want to contribute.
- Push your changes to your forked repository.
- Create a pull request to the original repository.
