This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Sending Emails from the Contact Form

This project includes functionality to send emails when a user submits the contact form. We use [Nodemailer](https://nodemailer.com/) to handle email sending. Follow the steps below to set it up:

### Step 1: Install Nodemailer

First, install Nodemailer in your project:

### Step 2: Create an API Route

Create a new file in the `pages/api` directory, for example, `sendEmail.js`:

### Step 3: Update the Contact Form Submission

In your `ContactForm.jsx`, update the `handleSubmit` function to send a POST request to the API route:

### Step 4: Secure Your Credentials

Add your email credentials to a `.env.local` file in the root of your project:

Make sure to add `.env.local` to your `.gitignore` file to prevent it from being committed to your version control system.

### Step 5: Test Your Setup

Run your Next.js application and test the contact form to ensure that emails are being sent correctly.

This setup allows you to send emails directly from your Next.js application without needing a database. If you want to store the messages for future reference, you can consider using a database to save the form submissions.
