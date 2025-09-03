# Supabase Authentication Setup

This landing page now supports Supabase authentication redirects for email confirmations.

## Setup Instructions

1. **Install Dependencies**

   ```bash
   npm install @supabase/supabase-js
   ```

2. **Environment Variables**
   Create a `.env.local` file in your project root with:

   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
   ```

3. **Supabase Configuration**
   - Go to your Supabase project dashboard
   - Navigate to Authentication > URL Configuration
   - Set the Site URL to: `https://getfloux.com`
   - Set the Redirect URLs to include: `https://getfloux.com/**`

## How It Works

1. **Normal Landing Page**: When users visit `https://getfloux.com`, they see the normal landing page and waiting list.

2. **Authentication Redirect**: When users click email confirmation links from your mobile app, Supabase redirects them to `https://getfloux.com?access_token=XYZ&type=signup`.

3. **Automatic Detection**: The `AuthRedirectHandler` component automatically detects these parameters and:

   - Shows a loading state while processing
   - Uses `supabase.auth.exchangeCodeForSession()` to validate the tokens
   - Displays success/error messages
   - Provides a button to return to the normal landing page

4. **Seamless Experience**: After confirmation, users can continue to the website or return to your mobile app.

## Production Deployment

- Ensure your domain `https://getfloux.com` is properly configured in Supabase
- The solution works with HTTPS in production
- No changes needed to your existing landing page design or functionality

## Testing

To test locally, you can simulate the redirect by adding query parameters:

```
http://localhost:3000?access_token=test&type=signup
```

This will trigger the authentication flow in development.
