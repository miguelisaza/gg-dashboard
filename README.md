# GG Dashboard

Welcome to GG Dashboard! This project is a quick setup of a Next.js application integrated with Tailwind CSS for styling and Chart.js for data visualization.

<img width="1131" alt="image" src="https://github.com/miguelisaza/gg-dashboard/assets/18253315/710d7788-668a-4183-b221-7f6bf28576a8">


## Table of Contents

- [Installation](#installation)
- [Technologies](#technologies)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/miguelisaza/gg-dashboard.git
   cd gg-dashboard
   ```

2. Install the dependencies:

   ```bash
   yarn install
   ```

4. Set up the environment variables:

   Copy the env.sample file from repository and configure it as follows:
   
   ```
   REQUEST_URL=<request URL provided in document>
   API_KEY=<token provided in the document>
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```

6. Start the development server:

   ```bash
   yarn run dev
   ```

   Open your browser and navigate to `http://localhost:3000`.

## Technologies

- **Next.js**: A React framework for building server-side rendering and static web applications.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Chart.js**: A JavaScript library for creating beautiful charts and graphs.
