"use client"

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { Card, CardContent } from '@/components/ui/card'
import { Loader2, CheckCircle, XCircle } from 'lucide-react'

interface AuthRedirectHandlerProps {
  children: React.ReactNode
}

export function AuthRedirectHandler({ children }: AuthRedirectHandlerProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [authResult, setAuthResult] = useState<'success' | 'error' | null>(null)
  const [hasAuthParams, setHasAuthParams] = useState(false)

  useEffect(() => {
    const checkForAuthParams = async () => {
      // Check if URL contains Supabase auth parameters
      const urlParams = new URLSearchParams(window.location.search)
      const hasAccessToken = urlParams.has('access_token')
      const hasType = urlParams.has('type')
      const hasCode = urlParams.has('code')
      
      if (hasAccessToken || hasType || hasCode) {
        setHasAuthParams(true)
        setIsProcessing(true)
        
        try {
          // Check if Supabase is available
          if (!supabase) {
            console.error('Supabase client not available')
            setAuthResult('error')
            return
          }
          
          // Process the auth redirect
          const { data, error } = await supabase.auth.exchangeCodeForSession(window.location.href)
          
          if (error) {
            console.error('Auth error:', error)
            setAuthResult('error')
          } else {
            console.log('Auth success:', data)
            setAuthResult('success')
          }
        } catch (err) {
          console.error('Unexpected error:', err)
          setAuthResult('error')
        } finally {
          setIsProcessing(false)
        }
      }
    }

    checkForAuthParams()
  }, [])

  // If there are auth parameters, show the confirmation view
  if (hasAuthParams) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
                         {isProcessing ? (
               <div className="space-y-4">
                 <Loader2 className="w-12 h-12 text-[#5a89bd] animate-spin mx-auto" />
                 <h2 className="text-xl font-semibold text-[#2e2d51]">
                   Verifying Your Account...
                 </h2>
                 <p className="text-[#5a89bd] text-center">
                   Please wait while we confirm your email address. This should only take a moment.
                 </p>
                 <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                   <p className="text-sm text-blue-800 font-medium">
                       🔄 Processing confirmation
                     </p>
                     <p className="text-xs text-blue-600 mt-1">
                       Please don't close this page
                     </p>
                   </div>
               </div>
                         ) : authResult === 'success' ? (
               <div className="space-y-4">
                 <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                 <h2 className="text-xl font-semibold text-[#2e2d51]">
                   Account Confirmed! 🎉
                 </h2>
                 <p className="text-[#5a89bd] text-center">
                   Your email has been successfully verified! 🎉
                 </p>
                 <p className="text-[#5a89bd] text-center text-sm">
                   You can now return to the Floux app and log in with your credentials.
                 </p>
                 <div className="pt-4 space-y-3">
                   <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                     <p className="text-sm text-green-800 font-medium">
                       ✅ Email verified successfully
                     </p>
                     <p className="text-xs text-green-600 mt-1">
                       Your account is now active and ready to use
                     </p>
                   </div>
                   <button
                     onClick={() => {
                       // Clear the URL parameters and show the landing page
                       window.history.replaceState({}, document.title, window.location.pathname)
                       setHasAuthParams(false)
                       setAuthResult(null)
                     }}
                     className="bg-[#2e2d51] hover:bg-[#2e2d51]/90 text-white px-6 py-2 rounded-full transition-colors w-full"
                   >
                     Continue to Website
                   </button>
                 </div>
               </div>
                         ) : (
               <div className="space-y-4">
                 <XCircle className="w-12 h-12 text-red-500 mx-auto" />
                 <h2 className="text-xl font-semibold text-[#2e2d51]">
                   Confirmation Failed
                 </h2>
                 <p className="text-[#5a89bd] text-center">
                   Something went wrong confirming your email. Please try again from the Floux app.
                 </p>
                 <div className="pt-4 space-y-3">
                   <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                     <p className="text-sm text-red-800 font-medium">
                       ❌ Email verification failed
                     </p>
                     <p className="text-xs text-red-600 mt-1">
                       The confirmation link may have expired or is invalid
                     </p>
                   </div>
                   <button
                     onClick={() => {
                       // Clear the URL parameters and show the landing page
                       window.history.replaceState({}, document.title, window.location.pathname)
                       setHasAuthParams(false)
                       setAuthResult(null)
                     }}
                     className="bg-[#2e2d51] hover:bg-[#2e2d51]/90 text-white px-6 py-2 rounded-full transition-colors w-full"
                   >
                     Continue to Website
                   </button>
                 </div>
               </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  // If no auth parameters, show the normal landing page
  return <>{children}</>
}
