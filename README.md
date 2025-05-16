# Spotify Clone - Full Stack Music Streaming App

<p style="text-align: center;">
    <a href="https://www.pedroestevao.com">
        <img src="https://res.cloudinary.com/dge3g9rcw/image/upload/v1747350579/github/my4jy83jt7grpjk7ojuo.webp" alt="Illustrative image" />
    </a>
</p>

A full-featured **Spotify Clone** built with the latest **Next.js App Router**, fully responsive and integrated with **Supabase**, **Stripe**, and **PostgreSQL**. This project reproduces key features of the real [**Spotify**](https://open.spotify.com/) app, including audio streaming, authentication, playlists, payments, and more — all with a modern UI powered by **Tailwind CSS**.

## About the Project

This application is the result of a comprehensive full stack tutorial that guides developers through the process of creating a **production-ready music streaming service**.

You’ll find implementations for:

- User authentication (via email/password and GitHub)
- Audio playback with a custom player
- File uploads (images and songs)
- Playlists and liked songs
- Premium subscription via Stripe
- Protected routes and access control
- Data fetching via server components

> **Disclaimer**: This is a **learning project** and not intended for commercial use. Spotify™ is a trademark of Spotify AB.

## Tech Stack

The project was built using the following technologies and tools:

- [Next.js (App Router)](https://nextjs.org/) - React framework for web applications.
- [React](https://react.dev/) - JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/) - JavaScript superset for static typing.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for fast and customizable design.
- [Supabase](https://supabase.com/) (auth, storage, PostgreSQL)
- [Stripe](https://stripe.com/) (subscriptions and payments)
- [PostgreSQL](https://www.postgresql.org/)
- [Zustand](https://github.com/pmndrs/zustand) (state management)
- [React Hook Form](https://react-hook-form.com/) (form handling)
- [React Toast](https://react-hot-toast.com/) (notifications)

## Features

- **Play Songs**: Stream music directly in-app
- **Advanced Audio Player**: Responsive and persistent across pages
- **Upload Songs & Images**: Via Supabase Storage
- **Authentication**: Email/password and GitHub login
- **Database**: Full CRUD with Supabase (PostgreSQL)
- **Liked Songs System**
- **Playlists Creation**
- **Stripe Integration**: Premium subscription with recurring payments
- **Protected Routes**
- **Client-side and server-side validations**
- **Responsive UI with transitions and animations**
- **Server Components with direct DB queries (no API routes needed)**

## Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/pedroestevaodev/spotify-imersao-alura.git
cd spotify-clone
```

### 2. Install dependencies

```bash
$ npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root and configure the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL="tobemodified"
NEXT_PUBLIC_SUPABASE_ANON_KEY="tobemodified"
SUPABASE_SERVICE_ROLE_KEY="tobemodified"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="tobemodified"
STRIPE_SECRET_KEY="tobemodified"
STRIPE_WEBHOOK_SECRET="tobemodified"
```

> You need to set up storage buckets in Supabase (for music and images) and activate Stripe with your plans/subscriptions.

### 4. Start the development server

```bash
$ npm run dev
```

Open your browser and visit `http://localhost:3000` to see the project in action.

You can start editing the homepage by modifying the `app/layout.tsx` file. The browser will automatically update as you make changes to the code.

## Available Commands

Here are the main commands available for the project:

| Command          | Description                   |
| ---------------- | ----------------------------- |
| `dev`       | Starts the development server |
| `build`     | Builds the app for production |
| `start`     | Runs the built app            |
| `lint`      | Lints the code using ESLint   |

## Resources

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Docs](https://nextjs.org/docs) - Learn more about Next.js features and APIs.
- [Next.js Learn](https://nextjs.org/learn) - Interactive tutorial to learn Next.js.
- [React Docs](https://pt-br.react.dev/learn) - Access the official React guide.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Learn how to use Tailwind CSS to style your application.
- [Supabase Docs](https://supabase.com/docs) - Learn how to get up and running with Supabase through tutorials, APIs and platform resources.

## Deploy

The easiest way to deploy your Next.js application is by using the [Vercel Platform](https://vercel.com/new), created by the developers of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

> Make sure to set the environment variables in Vercel > Settings > Environment Variables.

## Learning Credits

This project was built based on the **YouTube** tutorial:

🎬 [**_Full Stack Spotify Clone: Next 13.4, React, Stripe, Supabase, PostgreSQL, Tailwind (2023)_**](https://youtu.be/2aeMRB8LL4o?si=Gxfr_Q2hYnlj4Kq0)  
👨🏻‍💻 [_Code With Antonio_](https://www.youtube.com/@codewithantonio)

## License

This project is open source and available under the [MIT License](https://mit-license.org/).  
<br />

---

<br />

**Built with ☕ by [Pedro Estevão](https://www.pedroestevao.com)**





