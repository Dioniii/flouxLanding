"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Brain, Shield, Zap, Star, ArrowRight, Sparkles } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 sm:py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
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

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#2e2d51] mb-6 leading-tight">
              A Place for
              <span className="block text-transparent bg-gradient-to-r from-[#5a89bd] to-[#d4b1cf] bg-clip-text">
                All Your Thoughts
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[#5a89bd] mb-8 leading-relaxed max-w-2xl">
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
                  document.getElementById('waitlist')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
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
            <div className="relative mx-auto w-64 sm:w-72 h-[580px] sm:h-[640px] bg-[#2e2d51] rounded-[2.5rem] p-1.5 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-white h-6 flex items-center justify-between px-6 pt-1">
                  <div className="text-xs font-semibold text-black">9:41</div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 border border-black rounded-sm">
                      <div className="w-3 h-1.5 bg-black rounded-sm m-0.5"></div>
                    </div>
                    <div className="w-4 h-2 border border-black rounded-sm">
                      <div className="w-3 h-1.5 bg-black rounded-sm m-0.5"></div>
                    </div>
                    <div className="w-4 h-2 border border-black rounded-sm">
                      <div className="w-3 h-1.5 bg-black rounded-sm m-0.5"></div>
                    </div>
                  </div>
                </div>

                {/* App Interface */}
                <div className="h-full bg-white flex flex-col">
                  {/* Header Section */}
                  <div className="pt-5 pb-3 px-5">
                    {/* App Title */}
                    <h1 className="text-xl font-medium text-[#2e2d51] text-center mb-1.5">floux</h1>
                    
                    {/* Divider */}
                    <div className="w-full h-[1px] bg-[#e0e0e0] my-1.5"></div>
                    
                    {/* Welcome Text */}
                    <h2 className="text-base font-semibold text-[#2e2d51] text-left mb-0.5">Welcome back, User!</h2>
                    
                    {/* Subtitle */}
                    <p className="text-sm font-medium text-[#5a89bd] text-left">Elevate your thoughts</p>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col items-center justify-center px-5">
                    {/* Wave Animation Background */}
                    <div className="relative w-36 h-36 rounded-full bg-[rgba(90,137,189,0.1)] flex items-center justify-center mb-8">
                      {/* Audio Visualizer */}
                      <div className="flex items-end gap-0.5 h-10">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="w-0.5 bg-[#5a89bd] rounded-full animate-pulse"
                            style={{
                              height: `${10 + (i % 3) * 5}px`,
                              animationDelay: `${i * 0.1}s`,
                              animationDuration: `${1.5 + (i % 2) * 0.5}s`
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>

                    {/* Record Button */}
                    <div className="relative mb-5">
                      <div className="w-16 h-16 bg-[#2e2d51] rounded-full flex items-center justify-center shadow-[0_4px_8px_rgba(0,0,0,0.3)] border-2 border-white">
                        <Mic className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Record Text */}
                    <p className="text-sm font-semibold text-[#2e2d51] text-center mb-2">Tap to start recording</p>
                    
                    {/* Instruction Text */}
                    <p className="text-xs text-[#666666] text-center leading-tight px-4">Your voice will be automatically transcribed into notes</p>
                  </div>

                  {/* Navigation Bar */}
                  <div className="h-16 flex items-center justify-around px-6 border-t border-[#e0e0e0] bg-white mb-8">
                    {/* Record Tab (Active) */}
                    <div className="flex flex-col items-center">
                      <Mic className="w-5 h-5 text-[#2e2d51] mb-1" />
                      <span className="text-xs text-[#2e2d51] font-medium">Record</span>
                    </div>
                    
                    {/* Notes Tab */}
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-[#666666] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="text-xs text-[#666666]">Notes</span>
                    </div>
                    
                    {/* Profile Tab */}
                    <div className="flex flex-col items-center">
                      <svg className="w-5 h-5 text-[#666666] mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span className="text-xs text-[#666666]">Profile</span>
                    </div>
                  </div>

                  {/* Home Indicator */}
                  <div className="h-1 flex justify-center items-center bg-white">
                    <div className="w-12 h-1 bg-black rounded-full"></div>
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

{/* The Enhanced Forgetting Machine */}
<section className="px-4 py-16 sm:py-24 md:py-32 bg-gray-50 relative overflow-hidden">
 {/* Enhanced Grid Pattern with Movement */}
 <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-transparent via-[#5a89bd]/5 to-transparent animate-drift">
   <div className="absolute inset-0" style={{
     backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(46,45,81,0.15) 1px, transparent 0), radial-gradient(circle at 12px 12px, rgba(90,137,189,0.1) 1px, transparent 0)',
     backgroundSize: '24px 24px, 48px 48px'
   }}></div>
 </div>

 <div className="max-w-6xl mx-auto">
   <div className="grid lg:grid-cols-2 gap-16 items-start">
     {/* Left Column - Enhanced Content */}
     <div>
       {/* Header with Subtle Animation */}
       <div className="mb-20">
         <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-[#2e2d51] mb-8 sm:mb-12 leading-[0.9] tracking-tight">
           Your thoughts
           <br />
           <span className="font-light italic text-[#5a89bd] animate-pulse">disappear</span>
         </h2>
       </div>

       {/* Enhanced Content Blocks */}
       <div className="space-y-16">
         {/* Block 1 - Shower Thought 
         <div className="border-l-[1px] border-[#d4b1cf]/30 pl-8 relative overflow-hidden group">
           <div className="text-sm text-[#5a89bd]/60 font-mono mb-2">6:47 AM</div>
           <p className="text-[#2e2d51] text-lg leading-relaxed">
             That breakthrough about quantum consciousness while shampooing...
             <span className="block mt-2 text-[#5a89bd]/50 italic transition-opacity duration-300 group-hover:opacity-80">
               Gone before you reached for the towel.
             </span>
           </p>
         </div>
*/}
         {/* Block 2 - Work Solution 
         <div className="border-l-[1px] border-[#d4b1cf]/30 pl-8 group">
           <div className="text-sm text-[#5a89bd]/60 font-mono mb-2">2:47 PM</div>
           <p className="text-[#2e2d51] text-lg leading-relaxed">
             The elegant solution to restructure everything, crystal clear during lunch?
             <span className="block mt-2 text-[#5a89bd]/60 italic transition-opacity duration-300 group-hover:opacity-80">
               Dissolved somewhere between the salad and coffee.
             </span>
           </p>
         </div>
*/}
         {/* Block 3 - Almost Remember */}
         <div className="border-l-[1px] border-[#d4b1cf]/30 pl-8 group">
           <div className="text-sm text-[#5a89bd]/60 font-mono mb-2">5:23 PM</div>
           <p className="text-[#2e2d51] text-lg leading-relaxed">
             "It was something about... connection? Or was it reflection?"
             <span className="block mt-2 text-[#5a89bd]/40 italic text-sm transition-all duration-300 group-hover:opacity-70 group-hover:translate-y-[-2px]">
               The harder you chase it, the faster it runs.
             </span>
           </p>
         </div>

         {/* Block 4 - Perfect Phrase */}
         <div className="border-l-[1px] border-[#d4b1cf]/30 pl-8 group">
           <div className="text-sm text-[#5a89bd]/60 font-mono mb-2">8:15 PM</div>
           <p className="text-[#2e2d51] text-lg leading-relaxed">
             That perfect phrase for your presentation tomorrow?
             <span className="block mt-2 text-[#5a89bd]/50 italic transition-opacity duration-300 group-hover:opacity-75">
               Evaporated while you went on with your day.
             </span>
           </p>
         </div>

         {/* Block 5 - Life Realization */}
         <div className="border-l-[1px] border-[#d4b1cf]/30 pl-8 group">
           <div className="text-sm text-[#5a89bd]/60 font-mono mb-2">11:45 PM</div>
           <p className="text-[#2e2d51] text-lg leading-relaxed">
             The profound realization about what really matters...
             <span className="block mt-2 text-[#5a89bd]/30 italic opacity-70">
               Lost to the hours of sleep.
             </span>
           </p>
         </div>
       </div>
     </div>

     {/* Right Column - Enhanced Cards */}
     <div className="space-y-8">
       {/* Central Statement Card */}
       <div className="bg-white/80 backdrop-blur-sm border border-[#d4b1cf]/20 rounded-2xl p-8 md:p-12 shadow-lg relative">
         <div className="w-16 h-1 bg-gradient-to-r from-[#d4b1cf] to-[#5a89bd] mx-auto mb-8 rounded-full"></div>
         <p className="text-3xl md:text-4xl font-bold text-[#2e2d51] leading-tight text-center mb-6">
           Your mind is a 
           <span className="block text-transparent bg-gradient-to-r from-[#5a89bd] to-[#d4b1cf] bg-clip-text">
             forgetting machine
           </span>
         </p>
         <div className="w-16 h-1 bg-gradient-to-r from-[#5a89bd] to-[#d4b1cf] mx-auto rounded-full"></div>
       </div>

       {/* Recovery Attempt Card 
       <div className="bg-[#2e2d51]/5 border border-[#d4b1cf]/20 rounded-xl p-6">
         <p className="text-lg text-[#2e2d51] mb-3 font-medium">
           <span className="text-[#5a89bd]">"Wait, what was I just thinking about?"</span>
         </p>
         <p className="text-sm text-[#2e2d51]/70 italic">
           *frantically retracing mental steps*
         </p>
       </div>*/}

       {/* The Question Card */}
       <div className="bg-gradient-to-br from-[#5a89bd]/10 to-[#d4b1cf]/10 border border-[#d4b1cf]/30 rounded-xl p-6 relative">
         <p className="text-xl text-[#5a89bd] mb-4 font-semibold text-center">
           What if nothing ever disappeared again?
         </p>
         
         
         {/* Subtle hint */}
         <div className="text-sm text-center text-[#2e2d51]/60 italic">
           Every fleeting thought, captured forever
         </div>
       </div>

       {/* Memory Statistics Card */}
       <div className="bg-white/60 border border-[#d4b1cf]/20 rounded-xl p-6">
         <div className="text-center">
           <div className="text-2xl font-bold text-[#2e2d51] mb-1">47,382</div>
           <div className="text-sm text-[#5a89bd]/70 mb-3">brilliant thoughts lost this year</div>
           <div className="text-xs text-[#2e2d51]/50 italic">
             (But who's counting? We're not either...)
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</section>

{/* Modern How It Works */}
<section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#5a89bd]/10 to-transparent rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#d4b1cf]/10 to-transparent rounded-full blur-3xl"></div>
  </div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="text-center mb-20">
      <div className="inline-block mb-6">
        <span className="px-4 py-2 bg-gradient-to-r from-[#5a89bd]/10 to-[#d4b1cf]/10 rounded-full text-sm font-medium text-[#2e2d51] border border-[#5a89bd]/20">
          Three Simple Steps
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2e2d51] mb-6 leading-tight">
        From Chaos to Clarity
      </h2>
    </div>

    {/* Steps */}
    <div className="relative">
      {/* Connection Lines for Desktop */}
      <div className="hidden lg:block absolute top-24 left-1/2 w-full max-w-4xl transform -translate-x-1/2">
        <div className="flex justify-between items-center h-2">
          <div className="bg-gradient-to-r from-[#d4b1cf] to-[#5a89bd] h-0.5 w-1/3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse"></div>
          </div>
          <div className="bg-gradient-to-r from-[#d4b1cf] to-[#5a89bd] h-0.5 w-1/3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
        {/* Step 1 */}
        <div className="group bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 text-center relative overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#5a89bd]/5 to-[#d4b1cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon Container */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-[#5a89bd]/20 rounded-full animate-ping"></div>
            <div className="relative bg-gradient-to-br from-[#5a89bd]/20 to-[#5a89bd]/30 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <Mic className="h-10 w-10 text-[#2e2d51] animate-bounce" />
            </div>
          </div>

          <div className="space-y-1 mb-6">
            <div className="text-sm font-mono text-[#5a89bd]/60 tracking-widest uppercase">Step One</div>
            <h3 className="text-2xl font-bold text-[#2e2d51]">Brain Dump</h3>
          </div>

          <p className="text-[#5a89bd]/90 leading-relaxed mb-6 relative z-10">
            Just start talking. Stream of consciousness, half-formed ideas, random thoughts—
            <span className="font-semibold text-[#2e2d51]"> we capture it all</span>.
          </p>

          <div className="text-xs text-[#2e2d51]/50 italic">
            "No pressure, no judgment, just pure expression"
          </div>
        </div>

        {/* Step 2 */}
        <div className="group bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 text-center relative overflow-hidden lg:mt-8 hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#d4b1cf]/5 to-[#5a89bd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon Container */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-[#d4b1cf]/20 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
            <div className="relative bg-gradient-to-br from-[#d4b1cf]/20 to-[#d4b1cf]/30 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <Brain className="h-10 w-10 text-[#2e2d51] animate-pulse" />
            </div>
          </div>

          <div className="space-y-1 mb-6">
            <div className="text-sm font-mono text-[#d4b1cf]/60 tracking-widest uppercase">Step Two</div>
            <h3 className="text-2xl font-bold text-[#2e2d51]">AI Magic</h3>
          </div>

          <p className="text-[#5a89bd]/90 leading-relaxed mb-6 relative z-10">
            Our AI finds the gold in your rambling, connects the dots, and 
            <span className="font-semibold text-[#2e2d51]"> crystallizes your genius</span> into clear insights.
          </p>

          <div className="text-xs text-[#2e2d51]/50 italic">
            "Watch your scattered thoughts become brilliant"
          </div>
        </div>

        {/* Step 3 */}
        <div className="group bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 text-center relative overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e2d51]/5 to-[#5a89bd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Icon Container */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-[#2e2d51]/20 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="relative bg-gradient-to-br from-[#2e2d51]/20 to-[#2e2d51]/30 w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles className="h-10 w-10 text-[#2e2d51] animate-spin" style={{animationDuration: '3s'}} />
            </div>
          </div>

          <div className="space-y-1 mb-6">
            <div className="text-sm font-mono text-[#2e2d51]/60 tracking-widest uppercase">Step Three</div>
            <h3 className="text-2xl font-bold text-[#2e2d51]">Pure Clarity</h3>
          </div>

          <p className="text-[#5a89bd]/90 leading-relaxed mb-6 relative z-10">
            Organized, searchable, and instantly accessible. Your thoughts become a 
            <span className="font-semibold text-[#2e2d51]"> living knowledge base</span> that grows with you.
          </p>

          <div className="text-xs text-[#2e2d51]/50 italic">
            "Never lose a brilliant idea again"
          </div>
        </div>
      </div>
    </div>

  
  </div>
</section>

  

      

      {/* Modern Testimonials */}
<section className="px-4 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden">
 {/* Background Elements */}
 <div className="absolute inset-0 opacity-20">
   <div className="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-[#d4b1cf]/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
   <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-br from-[#5a89bd]/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
 </div>

 <div className="max-w-6xl mx-auto relative z-10">
   {/* Header */}
   <div className="text-center mb-20">
     <div className="inline-block mb-6">
       <span className="px-4 py-2 bg-gradient-to-r from-[#d4b1cf]/10 to-[#5a89bd]/10 rounded-full text-sm font-medium text-[#2e2d51] border border-[#d4b1cf]/20">
         Real Stories
       </span>
     </div>
     <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2e2d51] mb-6 leading-tight">
       Life-Changing Moments
     </h2>
   </div>

   {/* Testimonials Grid */}
   <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
     {/* Testimonial 1 - Featured */}
     <div className="lg:col-span-2 group">
       <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
         {/* Quote Icon */}
         <div className="absolute top-6 right-6 text-[#d4b1cf]/20 text-6xl font-serif">"</div>
         
         {/* Stars */}
           <div className="flex mb-6 gap-1">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="h-5 w-5 fill-[#d4b1cf] text-[#d4b1cf]" />
             ))}
           </div>

         <blockquote className="text-lg md:text-xl text-[#2e2d51] leading-relaxed mb-8 font-medium">
           "I used to lose breakthrough ideas in the shower, during walks, everywhere. Now I just speak them into Floux and they're <span className="bg-gradient-to-r from-[#5a89bd] to-[#d4b1cf] bg-clip-text text-transparent font-bold">instantly organized and searchable</span>. It's like having a perfect memory."
         </blockquote>

         <div className="flex items-center">
           <div className="relative">
             <div className="w-14 h-14 bg-gradient-to-br from-[#d4b1cf]/30 to-[#5a89bd]/30 rounded-full flex items-center justify-center mr-4 ring-2 ring-[#d4b1cf]/20">
               <span className="text-[#2e2d51] font-bold text-lg">E</span>
             </div>
           </div>
           <div>
             <p className="font-bold text-[#2e2d51] text-lg">Emma Rodriguez</p>
             <p className="text-[#5a89bd]/70 font-medium">Product Designer at TechCorp</p>
             <p className="text-xs text-[#2e2d51]/50 mt-1">Verified user  3 months ago</p>
           </div>
         </div>
       </div>
     </div>

     {/* Testimonial 2 */}
     <div className="group">
       <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden h-full">
         {/* Background Gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#5a89bd]/5 to-[#d4b1cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         
         <div className="relative z-10">
           {/* Stars */}
           <div className="flex mb-6 gap-1">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="h-4 w-4 fill-[#5a89bd] text-[#5a89bd]" />
             ))}
           </div>

           <blockquote className="text-[#2e2d51] leading-relaxed mb-6 font-medium">
             "The AI organization is <span className="text-[#5a89bd] font-bold">mind-blowing</span>. It finds connections between my thoughts that I never would have seen."
           </blockquote>

           <div className="flex items-center">
             <div className="w-12 h-12 bg-gradient-to-br from-[#5a89bd]/30 to-[#2e2d51]/30 rounded-full flex items-center justify-center mr-3">
               <span className="text-[#2e2d51] font-bold">J</span>
             </div>
             <div>
               <p className="font-bold text-[#2e2d51]">James Mitchell</p>
               <p className="text-sm text-[#5a89bd]/70">Bestselling Author</p>
             </div>
           </div>
         </div>
       </div>
     </div>

     {/* Testimonial 3 */}
     <div className="group">
       <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden h-full">
         {/* Background Gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#d4b1cf]/5 to-[#2e2d51]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         
         <div className="relative z-10">
           {/* Stars */}
           <div className="flex mb-6 gap-1">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="h-4 w-4 fill-[#d4b1cf] text-[#d4b1cf]" />
             ))}
           </div>

           <blockquote className="text-[#2e2d51] leading-relaxed mb-6 font-medium">
             "Finally freed from the tyranny of <span className="text-[#d4b1cf] font-bold">forgotten genius</span>. Every idea gets captured and refined."
           </blockquote>

           <div className="flex items-center">
             <div className="w-12 h-12 bg-gradient-to-br from-[#d4b1cf]/30 to-[#5a89bd]/30 rounded-full flex items-center justify-center mr-3">
               <span className="text-[#2e2d51] font-bold">R</span>
             </div>
             <div>
               <p className="font-bold text-[#2e2d51]">Ryan Chen</p>
               <p className="text-sm text-[#5a89bd]/70">Tech Entrepreneur</p>
             </div>
           </div>
         </div>
       </div>
     </div>

     {/* Testimonial 4 */}
     <div className="group">
       <div className="bg-white/70 backdrop-blur-sm border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden h-full">
         {/* Background Gradient */}
         <div className="absolute inset-0 bg-gradient-to-br from-[#2e2d51]/5 to-[#d4b1cf]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         
         <div className="relative z-10">
           {/* Stars */}
           <div className="flex mb-6 gap-1">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className="h-4 w-4 fill-[#2e2d51] text-[#2e2d51]" />
             ))}
           </div>

           <blockquote className="text-[#2e2d51] leading-relaxed mb-6 font-medium">
             "My research notes went from chaos to <span className="text-[#2e2d51] font-bold">crystalline clarity</span>. It's like having a research assistant."
           </blockquote>

           <div className="flex items-center">
             <div className="w-12 h-12 bg-gradient-to-br from-[#2e2d51]/30 to-[#5a89bd]/30 rounded-full flex items-center justify-center mr-3">
               <span className="text-[#2e2d51] font-bold">L</span>
             </div>
             <div>
               <p className="font-bold text-[#2e2d51]">Dr. Lisa Thompson</p>
               <p className="text-sm text-[#5a89bd]/70">Neuroscientist</p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>

   {/* Social Proof Stats */}
   <div className="mt-16 text-center">
    {/*
     <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
       <div>
         <div className="text-2xl font-bold text-[#2e2d51] mb-1">50K+</div>
         <div className="text-sm text-[#5a89bd]/70">Ideas Captured</div>
       </div>
       <div>
         <div className="text-2xl font-bold text-[#2e2d51] mb-1">4.9★</div>
         <div className="text-sm text-[#5a89bd]/70">Average Rating</div>
       </div>
       <div>
         <div className="text-2xl font-bold text-[#2e2d51] mb-1">2K+</div>
         <div className="text-sm text-[#5a89bd]/70">Happy Users</div>
       </div>
     </div>*/}
     
       <p className="text-lg font-semibold text-[#5a89bd] mt-8 italic">
         Join us and transform your thinking!
       </p>
     
   </div>
 </div>
</section>

        {/* Mind Break Section */}
      <section id="waitlist" className="px-4 py-16 sm:py-20 bg-gradient-to-br from-[#2e2d51] to-[#5a89bd]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Your Mind Is Brilliant.
            <span className="block text-[#d4b1cf]">Give It a Break.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
            You don't need another note app. You need a space that feels like your mind - fast, fluid, and free. Join our waitlist below.
          </p>
          
          {/* Beehiiv Embed Form */}
          <div className="w-full text-center flex justify-center md:pl-20">
            <script async src="https://subscribe-forms.beehiiv.com/embed.js"></script>
            <iframe 
              src="https://subscribe-forms.beehiiv.com/6bc5aaab-2077-4f7e-9301-afd81c489c3e" 
              className="beehiiv-embed inline-block border-0 rounded-none bg-transparent shadow-none" 
              data-test-id="beehiiv-embed" 
              frameBorder="0" 
              scrolling="no"
              style={{
                width: '510px',
                height: '156px',
                margin: '0',
                borderRadius: '0px 0px 0px 0px !important',
                backgroundColor: 'transparent',
                boxShadow: '0 0 #0000',
                maxWidth: '100%'
              }}
            />
          </div>
        </div>
      </section>

    </div>
  )
} 