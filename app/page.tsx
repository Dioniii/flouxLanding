"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Brain, Shield, Zap, Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    
    // Let the form submit naturally to ConvertKit
    // The form will handle the submission to ConvertKit's servers
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4b1cf]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5a89bd]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-[#d4b1cf]/20 text-[#2e2d51] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Voice Notes
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-[#2e2d51] mb-6 leading-tight">
              A Place for
              <span className="block text-transparent bg-gradient-to-r from-[#5a89bd] to-[#d4b1cf] bg-clip-text">
                All Your Thoughts
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-[#5a89bd] mb-8 leading-relaxed max-w-2xl">
              You think fast. Ideas come in moments. Floux captures them before they disappear.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2e2d51]">99.9%</div>
                <div className="text-sm text-[#5a89bd]">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2e2d51]">&lt;2s</div>
                <div className="text-sm text-[#5a89bd]">Transcription</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2e2d51]">100%</div>
                <div className="text-sm text-[#5a89bd]">Private</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#2e2d51] hover:bg-[#2e2d51]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                onClick={() => {
                  document.getElementById('waitlist-section')?.scrollIntoView({ 
                    behavior: 'smooth' 
                  })
                }}
              >
                Start Capturing Your Mind
                <Mic className="ml-2 h-5 w-5" />
              </Button>
              
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-[#5a89bd]">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                End-to-end encrypted
              </div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Instant sync
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Phone Mockup */}
            <div className="relative mx-auto w-80 h-[600px] bg-[#2e2d51] rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-[#2e2d51] h-8 flex items-center justify-center">
                  <div className="w-20 h-1 bg-white/30 rounded-full"></div>
                </div>

                {/* App Interface */}
                <div className="p-6 h-full bg-gradient-to-br from-white to-[#f8f9ff]">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-[#2e2d51] font-semibold text-lg">Good morning!</h3>
                      <p className="text-[#5a89bd] text-sm">Ready to capture your thoughts?</p>
                    </div>
                    <div className="w-10 h-10 bg-[#d4b1cf]/20 rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-[#2e2d51]" />
                    </div>
                  </div>

                  {/* Recording Button */}
                  <div className="text-center mb-8">
                    <div className="relative inline-block">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#5a89bd] to-[#d4b1cf] rounded-full flex items-center justify-center shadow-lg">
                        <Mic className="w-10 h-10 text-white" />
                      </div>
                      {/* Pulse Animation */}
                      <div className="absolute inset-0 w-24 h-24 bg-[#5a89bd]/30 rounded-full animate-ping"></div>
                    </div>
                    <p className="text-[#2e2d51] font-medium mt-4">Tap to record</p>
                  </div>

                  {/* Recent Notes */}
                  <div className="space-y-3">
                    <h4 className="text-[#2e2d51] font-medium text-sm">Recent Notes</h4>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#d4b1cf]/20">
                      <p className="text-[#2e2d51] text-sm font-medium mb-1">Meeting ideas</p>
                      <p className="text-[#5a89bd] text-xs">2 minutes ago</p>
                    </div>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#d4b1cf]/20">
                      <p className="text-[#2e2d51] text-sm font-medium mb-1">Grocery list</p>
                      <p className="text-[#5a89bd] text-xs">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg border border-[#d4b1cf]/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[#2e2d51] text-sm font-medium">Transcribing...</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-[#d4b1cf]/20">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#5a89bd]" />
                <span className="text-[#2e2d51] text-sm font-medium">Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e2d51] text-center mb-16">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#d4b1cf]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mic className="h-8 w-8 text-[#2e2d51]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e2d51] mb-4">1. Speak Freely</h3>
              <p className="text-[#5a89bd] leading-relaxed">
                Let it all out. No filters. No perfect wording. Floux listens as you think out loud.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#5a89bd]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-[#2e2d51]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e2d51] mb-4">2. Your Voice Becomes Clarity</h3>
              <p className="text-[#5a89bd] leading-relaxed">
                Floux transforms your voice into clear, organized notes — like magic.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#2e2d51]/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-[#2e2d51]" />
              </div>
              <h3 className="text-xl font-semibold text-[#2e2d51] mb-4">3. Always With You, Always Private</h3>
              <p className="text-[#5a89bd] leading-relaxed">
                Your thoughts are yours. Floux keeps them safe, accessible, and organized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Second Brain */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e2d51] text-center mb-16">Why floux</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#d4b1cf]/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-[#2e2d51] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#2e2d51] mb-3">Feel Safe Sharing Anything</h3>
                <p className="text-[#5a89bd] text-sm">
                  Your most personal ideas are protected with secure, private storage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#d4b1cf]/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-[#2e2d51] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#2e2d51] mb-3">Capture Moments Before They Disappear</h3>
                <p className="text-[#5a89bd] text-sm">
                  Floux is built for speed — so you never lose a spark of inspiration.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#d4b1cf]/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Brain className="h-12 w-12 text-[#2e2d51] mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-[#2e2d51] mb-3">Find Mental Clarity</h3>
                <p className="text-[#5a89bd] text-sm">
                  Let Floux remember for you, so your mind can finally breathe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e2d51] text-center mb-16">See It In Action</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <img src="/mobile-recording-app.png" alt="Recording Interface" className="w-full rounded-xl" />
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <img src="/transcription-app-screen.png" alt="Transcription View" className="w-full rounded-xl" />
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg md:col-span-2 lg:col-span-1">
              <img src="/mobile-notes-library.png" alt="Notes Library" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e2d51] text-center mb-16">What People Are Saying</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-[#d4b1cf]/30">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#d4b1cf] text-[#d4b1cf]" />
                  ))}
                </div>
                <p className="text-[#5a89bd] mb-4 italic">
                  "This app helps me remember everything! I can capture ideas on the go and find them instantly later."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#d4b1cf]/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#2e2d51] font-semibold">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e2d51]">Sarah Chen</p>
                    <p className="text-sm text-[#5a89bd]">Product Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#d4b1cf]/30">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#d4b1cf] text-[#d4b1cf]" />
                  ))}
                </div>
                <p className="text-[#5a89bd] mb-4 italic">
                  "Finally, a note-taking app that actually understands how I think. The transcription is incredibly
                  accurate."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#5a89bd]/30 rounded-full flex items-center justify-center mr-3">
                    <span className="text-[#2e2d51] font-semibold">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#2e2d51]">Marcus Johnson</p>
                    <p className="text-sm text-[#5a89bd]">Writer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mind Break Section */}
      <section id="waitlist-section" className="px-4 py-20 bg-gradient-to-br from-[#2e2d51] to-[#5a89bd]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Your Mind Is Brilliant.
            <span className="block text-[#d4b1cf]">Give It a Break.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            You don't need another note app. You need a space that feels like your mind — fast, fluid, and free.
          </p>
          
          {!isSubmitted ? (
            <form 
              action="https://app.convertkit.com/forms/6513611d07/subscriptions" 
              method="post" 
              className="max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  name="email_address"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-0 text-[#2e2d51] placeholder:text-[#5a89bd] px-6 py-4 text-lg rounded-full shadow-lg"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="bg-white hover:bg-white/90 text-[#2e2d51] px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all font-semibold whitespace-nowrap"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </div>
              <p className="text-white/70 text-sm mt-3">Be the first to know when Floux launches.</p>
            </form>
          ) : (
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 inline-block">
                <p className="text-white text-lg font-semibold">🎉 You're on the list!</p>
                <p className="text-white/80 text-sm">We'll notify you when Floux is ready.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Footer 
      <section className="px-4 py-16 bg-[#2e2d51]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to capture your thoughts?</h2>
          <p className="text-[#d4b1cf] text-lg mb-8">
            Join thousands of users who trust floux with their ideas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white border-0 text-[#2e2d51] placeholder:text-[#5a89bd]"
            />
            <Button
              size="lg"
              className="bg-[#d4b1cf] hover:bg-[#d4b1cf]/90 text-[#2e2d51] font-semibold px-8 whitespace-nowrap"
            >
              Get Early Access
            </Button>
          </div>

          <p className="text-[#5a89bd] text-sm mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>
      */}
    </div>
  )
}
