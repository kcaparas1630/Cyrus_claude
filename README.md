# Supabase Authentication with Vite + React

A complete authentication system built with Vite, React, TypeScript, and Supabase. This project provides a secure email/password authentication workflow with login and registration functionality.

## Features

- Email/password authentication
- User registration with email confirmation
- Secure login/logout workflow
- Protected dashboard for authenticated users
- Session management with automatic token refresh
- TypeScript for type safety
- Modern UI with dark/light mode support
- Responsive design

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Authentication**: Supabase Auth
- **Styling**: Custom CSS with light/dark mode support

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- A Supabase account and project

## Supabase Setup

1. **Create a Supabase Project**:
   - Go to [https://supabase.com](https://supabase.com)
   - Click "New Project"
   - Fill in your project details
   - Wait for the project to be provisioned

2. **Get Your API Keys**:
   - Navigate to Project Settings > API
   - Copy your project URL and anon/public key
   - These will be used in your `.env` file

3. **Configure Email Authentication**:
   - In your Supabase dashboard, go to Authentication > Providers
   - Ensure "Email" is enabled
   - Configure email templates if desired (optional)
   - For development, you may want to disable email confirmation in Authentication > Settings

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Copy the `.env.example` file to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Edit `.env` and add your Supabase credentials:
     ```env
     VITE_SUPABASE_URL=your_supabase_project_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

## Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Auth.tsx           # Login/Register component
│   ├── Auth.css          # Auth component styles
│   ├── Dashboard.tsx     # Protected dashboard
│   └── Dashboard.css     # Dashboard styles
├── context/
│   └── AuthContext.tsx   # Authentication context and hooks
├── lib/
│   └── supabase.ts       # Supabase client configuration
├── App.tsx               # Main application component
├── App.css              # App styles
├── main.tsx             # Application entry point
├── index.css            # Global styles
└── vite-env.d.ts        # TypeScript environment definitions
```

## How It Works

### Authentication Flow

1. **User Registration**:
   - User enters email and password
   - Supabase creates a new user account
   - Confirmation email is sent (if enabled)
   - User is redirected to dashboard after confirmation

2. **User Login**:
   - User enters email and password
   - Supabase validates credentials
   - Session token is created and stored
   - User is redirected to dashboard

3. **Session Management**:
   - Sessions are automatically managed by Supabase
   - Tokens are refreshed automatically
   - Auth state persists across page refreshes

4. **User Logout**:
   - User clicks sign out
   - Session is destroyed
   - User is redirected to login page

### Security Features

- **Public Anon Key**: Used for client-side authentication (safe to expose)
- **Row Level Security**: Implement RLS policies in Supabase for data protection
- **Password Requirements**: Minimum 6 characters (enforced client-side)
- **HTTPS Only**: All communication with Supabase is encrypted
- **Token Refresh**: Automatic session token refresh

## Components

### AuthContext

Provides authentication state and methods throughout the application:
- `user`: Current user object or null
- `session`: Current session or null
- `loading`: Loading state boolean
- `signUp(email, password)`: Register new user
- `signIn(email, password)`: Login existing user
- `signOut()`: Logout current user

### Auth Component

Handles both login and registration:
- Toggle between login/register modes
- Form validation
- Error and success messages
- Loading states

### Dashboard Component

Protected route showing user information:
- Displays user email and metadata
- Shows user ID, creation date, last sign-in
- Provides sign-out functionality

## Customization

### Styling

The application uses custom CSS with support for both light and dark modes. Modify the following files:
- `src/index.css`: Global styles and CSS variables
- `src/App.css`: Application-level styles
- `src/components/Auth.css`: Authentication UI styles
- `src/components/Dashboard.css`: Dashboard styles

### Email Templates

Customize email templates in your Supabase dashboard:
- Go to Authentication > Email Templates
- Modify confirmation, recovery, and magic link emails

### Authentication Settings

Configure authentication in Supabase dashboard:
- Authentication > Settings
- Adjust session timeout, password requirements, etc.

## Troubleshooting

### Environment Variables Not Loading

- Ensure your `.env` file is in the root directory
- Restart the development server after changing `.env`
- Variables must be prefixed with `VITE_`

### Email Confirmation Issues

- For development, disable email confirmation in Supabase settings
- Check your email spam folder
- Verify email templates are configured correctly

### Build Errors

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Ensure TypeScript version compatibility

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.