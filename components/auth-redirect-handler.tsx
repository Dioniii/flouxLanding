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
                  Confirming your email...
                </h2>
                <p className="text-[#5a89bd]">
                  Please wait while we verify your account.
                </p>
              </div>
            ) : authResult === 'success' ? (
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
                <h2 className="text-xl font-semibold text-[#2e2d51]">
                  Email Confirmed!
                </h2>
                <p className="text-[#5a89bd]">
                  Your email has been confirmed. You can now return to the app.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      // Clear the URL parameters and show the landing page
                      window.history.replaceState({}, document.title, window.location.pathname)
                      setHasAuthParams(false)
                      setAuthResult(null)
                    }}
                    className="bg-[#2e2d51] hover:bg-[#2e2d51]/90 text-white px-6 py-2 rounded-full transition-colors"
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
                <p className="text-[#5a89bd]">
                  Something went wrong confirming your email. Please try again from the app.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      // Clear the URL parameters and show the landing page
                      window.history.replaceState({}, document.title, window.location.pathname)
                      setHasAuthParams(false)
                      setAuthResult(null)
                    }}
                    className="bg-[#2e2d51] hover:bg-[#2e2d51]/90 text-white px-6 py-2 rounded-full transition-colors"
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
