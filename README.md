
# ManoMitra: Your AI-Powered Mental Wellness Companion

![ManoMitra Logo](public/logo-manomitra.png)

**ManoMitra is a comprehensive mental wellness platform designed to provide accessible, confidential, and culturally-aware support, primarily for the Indian context.** It caters to students, employees, and individuals through a hybrid model that combines AI-driven self-help tools, an anonymous peer support community, and connections to professional counselors.

This project was built to address the silent mental health crisis in India, where stigma, lack of access, and culturally irrelevant tools prevent millions from seeking the help they need.

## The Problem

-   **High Rates of Distress:** A significant portion of students and employees in India face mental health challenges due to academic pressure, career uncertainty, and workplace stress.
-   **Wall of Silence:** The fear of judgment and social stigma prevents many individuals, especially men, from opening up about their struggles.
-   **Massive Treatment Gap:** India has a severe shortage of mental health professionals, making timely care inaccessible for a vast majority of the population.
-   **Cultural Disconnect:** Most existing digital mental health solutions are designed for Western audiences and fail to address the unique cultural and linguistic needs of Indian users.

## Our Solution: A New System

ManoMitra is not just another app; it's a complete, integrated ecosystem built on three foundational pillars:

1.  **Hyper-Localization:** We deliver support in local languages and cultural contexts, making it feel natural and relatable.
2.  **Deep Institutional Integration:** We partner with colleges and companies to embed our platform into their wellness frameworks, providing a seamless front door to care.
3.  **Human-in-the-Loop AI:** We use AI to provide scalable, 24/7 first-level support, with human oversight to ensure safety, empathy, and effectiveness.

---

## Core Features

### For General Users (Students, Employees, Individuals)

-   **AI Wellness Chat:** A 24/7 chatbot that provides empathetic and culturally relevant support.
-   **Role-play Chat:** An immersive chat experience with a team of three distinct AI personas.
-   **Wellness Assessments:** Self-screening tools for common mental health conditions.
-   **Journal & Insights:** A private space to log moods and thoughts with AI-powered pattern identification.
-   **Resource Hub:** A curated library of articles, videos, and meditations in multiple languages.
-   **Gamification:** Mindful games and wellness challenges to make building healthy habits engaging.

### For Sponsored Users (Students & Employees)

-   **Counselor Booking:** A directory to browse and book appointments with professional counselors.
-   **Peer Support Forum:** An anonymous forum to connect with peers in a safe community.

### For Administrators (Institutions & Organisations)

-   **Analytics Dashboard:** Visualizes aggregated and anonymized user wellness data.
-   **AI-Powered Suggestions:** Generates actionable recommendations based on wellness data to improve campus or workplace well-being.
-   **User Management:** Tools to manage student or employee accounts.

---

## System Architecture

The application is built on a modern, robust tech stack designed for scalability and a seamless user experience.

```
+------------------------+      +--------------------------+
|      User (Browser)    |      |    Backend (Serverless)  |
+------------------------+      +--------------------------+
|                        |      |                          |
|  Next.js / React       |      |  Next.js Server Actions  |
|  (UI Components)       |      |                          |
|                        |      |                          |
+-----------^------------+      +-------------^------------+
            |                                  |
            | (HTTP Requests)                  | (Secure server-side calls)
            v                                  v
+-----------+------------+      +-------------+------------+
|   User-specific Portals|      |      Genkit AI Flows     |
|   - Student            |      |      - Cultural Chat     |
|   - Employee           |      |      - Role-play Chat    |
|   - Individual         |      |      - Admin Insights    |
|   - Admins             |      |                          |
+------------------------+      +--------------------------+
```

### Tech Stack

-   **Frontend:** [Next.js](https://nextjs.org/) (with App Router), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
-   **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **AI & Backend Logic:** [Genkit (Google's Generative AI Toolkit)](https://firebase.google.com/docs/genkit)
-   **Server Actions:** Next.js Server Actions are used for secure communication between the client and the server-side AI flows.

---

## Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn

### Installation & Running Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-repo/manomitra.git
    cd manomitra
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your Google AI (Gemini) API key:
    ```
    GEMINI_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**
    The application requires two processes to run concurrently: the Next.js frontend and the Genkit AI backend.

    -   **Terminal 1: Run the Next.js app:**
        ```bash
        npm run dev
        ```
        This will start the web application on [http://localhost:9002](http://localhost:9002).

    -   **Terminal 2: Run the Genkit AI flows:**
        ```bash
        npm run genkit:watch
        ```
        This starts the Genkit development server, which makes the AI flows available to the Next.js app.

You can now access the application in your browser and explore its features.

---
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
