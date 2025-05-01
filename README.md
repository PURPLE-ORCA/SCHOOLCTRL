# Mini Project: micro School Manager

## Introduction

This project is a web application designed for basic management of school entities, including students (`Eleves`), academic levels (`Niveaux Scolaires`), and study types (`Types Etude`). It provides standard CRUD (Create, Read, Update, Delete) functionalities for these entities.

The application utilizes a modern tech stack featuring a Laravel backend serving a React frontend via Inertia.js.

## Features

*   CRUD operations for Students (Élèves).
*   CRUD operations for Academic Levels (Niveaux Scolaires).
*   CRUD operations for Study Types (Types d'Étude).
*   Relationships linking Students to Levels, and Levels to Study Types.
*   Frontend built as a Single Page Application (SPA) using React and Inertia.js.
*   Data tables with pagination provided by Material React Table.
*   Styling implemented with Tailwind CSS.

## Tech Stack

*   **Backend:** Laravel 10+
*   **Frontend:**
    *   React 18+
    *   Inertia.js
    *   Vite
*   **UI Components & Styling:**
    *   Material React Table
    *   Tailwind CSS
    *   Headless UI / Radix UI (likely via shadcn/ui components, based on layout)
    *   Iconify / Lucide React (Icons)
*   **Database:** PostgreSQL (Recommended), MySQL, or other Laravel-supported DB.
*   **Development Tools:** Composer, Node.js, npm or yarn.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

*   PHP (Version required by your Laravel version, typically 8.1+)
*   Composer
*   Node.js (LTS version recommended)
*   npm or yarn
*   A database server (e.g., PostgreSQL, MySQL)

## Installation Guide

Follow these steps to set up the project locally:

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/PURPLE-ORCA/SCHOOLCTRL.git
    cd SCHOOLCTRL
    ```

2.  **Install Backend Dependencies:**
    ```bash
    composer install
    ```

3.  **Install Frontend Dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```

4.  **Setup Environment File:**
    Create a `.env` file by copying the example:
    ```bash
    cp .env.example .env
    ```
    **Important:** Open the `.env` file and configure your database connection variables (`DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD`).

5.  **Generate Application Key:**
    ```bash
    php artisan key:generate
    ```

6.  **Run Database Migrations and Seeders:**
    This command will create the necessary database tables and populate them with initial sample data.
    ```bash
    php artisan migrate --seed
    ```
    *(Note: If you encounter issues or need to reset the database, use `php artisan migrate:fresh --seed`)*

7.  **Compile Frontend Assets:**
    For development with hot-reloading:
    ```bash
    npm run dev
    ```
    For production build:
    ```bash
    npm run build
    ```

8.  **Start the Development Server:**
    ```bash
    php artisan serve
    ```

9.  **Access the Application:**
    Open your web browser and navigate to the URL provided by `php artisan serve` (usually `http://127.0.0.1:8000`).

## Usage

Once the application is running:

*   Navigate to `/etudes` to manage Study Types.
*   Navigate to `/niveaux` to manage Academic Levels.
*   Navigate to `/eleves` to manage Students.
*   Use the "Ajouter..." buttons to create new entries.
*   Use the pencil and trash can icons in the table rows to edit or delete entries.

