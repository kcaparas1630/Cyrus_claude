# Quick Setup Guide

This guide will help you get the Supabase authentication app running in minutes.

## Step 1: Create a Supabase Project

1. Go to <https://supabase.com> and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - Name: `my-auth-app` (or any name you prefer)
   - Database Password: Choose a strong password
   - Region: Select closest to your location
5. Click "Create new project" and wait for provisioning (~2 minutes)

## Step 2: Get Your API Credentials

1. In your Supabase project dashboard, click "Settings" (gear icon in sidebar)
2. Go to "API" section
3. You'll see two important values:
   - **Project URL**: Something like `https://xxxxxxxxxxxxx.supabase.co`
   - **Project API keys** > **anon** **public**: A long string starting with `eyJ...`
4. Keep this page open - you'll need these values in the next step

## Step 3: Configure Environment Variables

1. In the project root, copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Open `.env` in your text editor and replace the placeholder values:

   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

3. Save the file

## Step 4: Configure Email Authentication (Optional but Recommended for Development)

To make testing easier, disable email confirmation:

1. In Supabase dashboard, go to "Authentication" > "Providers"
2. Click on "Email" provider
3. Scroll down to "Confirm email"
4. Toggle it **OFF** for development
5. Click "Save"

**Note**: For production, you should enable email confirmation and configure proper email templates.

## Step 5: Install Dependencies

If you haven't already installed the dependencies:

```bash
npm install
```

## Step 6: Run the Application

Start the development server:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`

## Step 7: Test the Authentication

### Register a New User

1. On the login page, click "Don't have an account? Sign Up"
2. Enter an email and password (minimum 6 characters)
3. Click "Sign Up"
4. If email confirmation is disabled, you'll be logged in immediately
5. If email confirmation is enabled, check your email and click the confirmation link

### Login

1. Enter your registered email and password
2. Click "Sign In"
3. You should see the dashboard with your user information

### Logout

1. Click the "Sign Out" button on the dashboard
2. You'll be redirected back to the login page

## Common Issues and Solutions

### Issue: "Missing Supabase environment variables"

**Solution**: Make sure your `.env` file exists in the project root and contains both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. Restart the dev server after creating/editing the `.env` file.

### Issue: "Invalid login credentials"

**Solution**:

- Make sure you're using the correct email and password
- If email confirmation is enabled, make sure you've confirmed your email
- Try registering a new account

### Issue: Email confirmation link not working

**Solution**:

- For development, disable email confirmation in Supabase settings
- Check your spam folder
- Make sure the link hasn't expired (they expire after 24 hours)

### Issue: "Failed to fetch" error

**Solution**:

- Check that your Supabase project is active and running
- Verify your `VITE_SUPABASE_URL` is correct
- Check your internet connection

## Next Steps

Now that you have authentication working, you can:

1. **Add user profiles**: Create a `profiles` table in Supabase to store additional user data
2. **Implement password reset**: Add forgot password functionality
3. **Add social login**: Configure OAuth providers (Google, GitHub, etc.) in Supabase
4. **Protect routes**: Add more protected pages and routes
5. **Add user roles**: Implement role-based access control
6. **Build your app**: Start building the actual features of your application

## Useful Resources

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security (RLS) Guide](https://supabase.com/docs/guides/auth/row-level-security)

## Need Help?

- Check the main [README.md](./README.md) for more detailed documentation
- Visit [Supabase Discord](https://discord.supabase.com) for community support
- Review [Supabase Examples](https://github.com/supabase/supabase/tree/master/examples) for more inspiration
