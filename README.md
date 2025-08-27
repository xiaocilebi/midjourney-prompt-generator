# Midjourney Prompt Generator

[![GitHub stars](https://img.shields.io/github/stars/Amery2010/midjourney-prompt-generator?style=social)](https://github.com/Amery2010/midjourney-prompt-generator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Amery2010/midjourney-prompt-generator?style=social)](https://github.com/Amery2010/midjourney-prompt-generator/network/members)
[![License](https://img.shields.io/github/license/Amery2010/midjourney-prompt-generator)](LICENSE)

**English** · [简体中文](./README.zh-CN.md)

An open-source Midjourney prompt generator built with Next.js, TypeScript, and Tailwind CSS. This tool aims to help users easily create creative and diverse Midjourney prompts, unlocking endless artistic possibilities.

## ✨ Features

- **Smart Prompt Optimization (Text-to-Prompt)**: Users input initial ideas or keywords, and the system intelligently optimizes and expands them into high-quality Midjourney prompts.
- **Image-to-Prompt (Image Description)**: Supports image uploads. The system analyzes image content and converts it into a detailed text description, which serves as the basis for prompt generation.
- **Preset Parameter Selection**: Provides convenient preset parameter buttons for users to select common aspect ratios and various artistic styles. These parameters are incorporated into the prompt optimization process to ensure the generated results align with user preferences.
- **Intuitive User Interface**: A clean and aesthetically pleasing interface built with Tailwind CSS, offering a smooth user experience.
- **Real-time Preview**: Offers real-time previews during prompt generation to help users iterate quickly.
- **One-Click Copy**: Easily copy generated prompts for direct pasting into Midjourney.
- **Open Source and Extensible**: Community-driven, easy to contribute to, and extend with new functionalities.

## 🚀 Tech Stack

- **Next.js**: A powerful React framework supporting server-side rendering (SSR) and static site generation (SSG).
- **TypeScript**: Adds static typing to JavaScript, improving code quality and maintainability.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.

## ⚙️ Getting Started

### Prerequisites

Before you begin, ensure you have the following software installed in your development environment:

- Node.js (recommended 18.18.x or higher LTS version)
- pnpm or yarn or npm

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Amery2010/midjourney-prompt-generator.git
    cd midjourney-prompt-generator
    ```

2.  **Install dependencies**:

    ```bash
    # Using pnpm
    pnpm install
    # Or using yarn
    yarn install
    # Or using npm
    npm install
    ```

3.  **Run the development server**:

    ```bash
    # Using pnpm
    pnpm dev
    # Or using yarn
    yarn dev
    # Or using npm
    npm run dev
    ```

    The project will start at `http://localhost:3000`. Open this address in your browser to begin using the application.

### Environment Variables

You need to change the file name from `env.example` to `.env` to use environment variables in your project.

- `BASE_URL`: Optional. This is the website URL used to generate the OpenGraph for the website.
- `POLLINATIONS_AI_API_KEY`: Optional. [pollinations.ai](https://pollinations.ai/) provides many free models, but some models require you to obtain a key by [registering a free account](https://auth.pollinations.ai/) before you can use them.

## 💡 How to Use

Upon opening the application, you will find an intuitive interface offering two main methods for generating and optimizing prompts:

### 1. Text Input for Prompt Optimization

1.  **Enter your ideas**: Type your initial ideas, keywords, or a brief description of the image into the text input box.
2.  **Select preset parameters (optional)**: Click the "Preset Parameters" button to choose your preferred aspect ratio (e.g., 16:9, 1:1, 2:3) and artistic style (e.g., Cyberpunk, Watercolor). These will be integrated as base parameters into the final prompt.
3.  **Generate and Optimize**: The system will intelligently optimize and generate a detailed Midjourney prompt by combining your input, preset parameters, and selected elements.

### 2. Image-to-Prompt and Optimization

1.  **Upload Image**: Click the "Upload Image" button and select an image you wish to convert into a prompt.
2.  **Image Analysis**: The system will analyze the uploaded image and generate an initial text description based on its content.
3.  **Select preset parameters (optional)**: Similar to the text input method, select your preferred aspect ratio and artistic style. These will be used as a foundation alongside the image description.
4.  **Generate Final Prompt**: The system will consolidate all information to generate a comprehensive prompt for Midjourney.

### Unified Operations

- **One-Click Copy**: Click the "Copy" button to copy the generated prompt to your clipboard.
- **Paste into Midjourney**: Paste the copied prompt into your Midjourney chat or bot to generate your image.

## Deployment

You can choose to deploy this project to platforms like Vercel or Cloudflare Workders.

### 🚀 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAmery2010%2Fmidjourney-prompt-generator&project-name=midjourney-prompt-generator&repository-name=midjourney-prompt-generator)

Vercel, the creators of Next.js, provides the best experience for deploying Next.js applications with zero configuration.

1.  **Prepare your application**: Ensure your Next.js application is ready for deployment and builds successfully locally (run `npm run build`).
2.  **Push to Git repository**: Push your project code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
3.  **Create a Vercel account**: If you don't have a Vercel account, visit [vercel.com](https://vercel.com/) to sign up.
4.  **Import your project**:
    - Log in to your Vercel Dashboard.
    - Click the "New Project" button.
    - You will be prompted to import a project from a Git repository. Select your "Midjourney Prompt Generator" repository.
    - Vercel will automatically detect that it's a Next.js project and pre-configure build settings. For most cases, you can keep the default settings.
    - If your application requires environment variables, you can add them in Vercel project settings before deployment.
5.  **Deploy**: Click the "Deploy" button. Vercel will begin building and deploying your application.
6.  **Access your application**: Once deployed, Vercel will provide a unique URL to access your live application. Vercel supports continuous deployment by default, automatically redeploying every time you push to the connected branch.

### ☁️ Deploy to Cloudflare Workers

Cloudflare Workers offers a simple and free way to host your application with global CDN and fast loading times.

1.  **Push to Git repository**: Ensure your Next.js application has been pushed to a GitHub repository.
2.  **Create a Cloudflare account**: If you don't have a Cloudflare account, visit [cloudflare.com](https://www.cloudflare.com/) to sign up.
3.  **Create a new project**:
    - Log in to your Cloudflare Dashboard.
    - Navigate to "Workers & Pages" > "Create" > "Workers" > "Connect to Git".
    - Authorize Cloudflare to access your GitHub account.
4.  **Select your Git repository**: Choose your "Midjourney Prompt Generator" repository.
5.  **Configure your project**:
    - Provide a project name.
    - Cloudflare Pages will usually auto-detect Next.js projects and pre-fill build settings. Ensure the following settings are correct:
      - **Deploy command**: Change the deployment command to `pnpm run deploy`。
      - **Environment variables**: If your application needs them, you can add environment variables in the Cloudflare Workers project settings.
6.  **Deploy**: Click the "Save and Deploy" button. Cloudflare Workers will install dependencies, build your project, and deploy it to their global network.
7.  **Access your application**: After deployment, Cloudflare will provision a subdomain. You can also configure a custom domain in your project settings.

### 🚢 Deploy using Docker

> The Docker version needs to be 20 or above, otherwise it will prompt that the image cannot be found.

```bash
docker pull ghcr.io/amery2010/midjourney-prompt-generator:latest
docker run -d --name midjourney-prompt-generator:latest -p 8721:3000 ghcr.io/amery2010/midjourney-prompt-generator:latest
```

You can also specify additional environment variables:

```bash
docker run -d --name midjourney-prompt-generator \
  -p 8721:3000 \
  -e BASE_URL=your-website-url \
  -e POLLINATIONS_AI_API_KEY=pollinations-auth-key \
  ghcr.io/amery2010/midjourney-prompt-generator:latest
```

or build your own docker image:

```bash
docker build -t midjourney-prompt-generator .
docker run -d --name midjourney-prompt-generator -p midjourney-prompt-generator:latest
```

If you need to specify other environment variables, please add `-e key=value` to the above command to specify it.

Deploy using `docker-compose.yml`:

```bash
docker compose -f docker-compose.yml build
```

## 🤝 Contributing

We welcome and appreciate contributions of any kind! If you have suggestions for improvement, have found a bug, or want to add a new feature, please:

1.  Fork this repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

Please ensure your code adheres to the project's coding standards and includes necessary tests.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
