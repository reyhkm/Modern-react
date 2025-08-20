# Modern Personal Portfolio

A sleek, modern, and clean personal portfolio web application built with React, Vite, and Shadcn UI.

## Features

*   **Modern UI**: Utilizes Shadcn UI components for a clean and contemporary look.
*   **Responsive Design**: Adapts seamlessly to various screen sizes.
*   **Modular Structure**: Organized components for easy maintenance and scalability.
*   **Fast Development**: Powered by Vite for a rapid development experience.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Vite**: A fast frontend build tool.
*   **TypeScript**: A typed superset of JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapid styling.
*   **Shadcn UI**: Reusable components built with Radix UI and Tailwind CSS.
*   **Lucide React**: A beautiful collection of open-source icons.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed:

*   Node.js (v18 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/modern-personal-portfolio.git
    cd modern-personal-portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Adding Shadcn UI Components

This project is set up to use Shadcn UI. To add new components, use the Shadcn UI CLI:

```bash
npx shadcn-ui@latest add <component-name>
```

For example, to add the `button` component:

```bash
npx shadcn-ui@latest add button
```

This will add the component's code to `src/components/ui/`.

## Project Structure

```
modern-personal-portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/             # Shadcn UI components
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navbar.tsx
│   │   └── ProjectCard.tsx
│   │   └── ProjectsSection.tsx
│   ├── lib/
│   │   └── utils.ts        # Utility functions (e.g., cn for tailwind-merge)
│   ├── App.tsx
│   ├── globals.css
│   └── main.tsx
├── .gitignore
├── components.json         # Shadcn UI configuration
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
└── vite.config.ts
```

## Customization

*   **Content**: Modify the text and data in `src/App.tsx` and individual section components.
*   **Styling**: Adjust `tailwind.config.js` for theme colors, fonts, and other global styles. Use Tailwind CSS classes directly in your components.
*   **Components**: Add more Shadcn UI components as needed using `npx shadcn-ui@latest add <component-name>`.

## License

This project is open source and available under the MIT License.
