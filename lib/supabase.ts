import { createClient } from '@supabase/supabase-js'

let supabase: any = null

if (typeof window !== 'undefined') {
  // Only create client on the client side
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey)
  } else {
    console.warn('Supabase environment variables not configured. Authentication redirects will not work.')
  }
}

export { supabase }
