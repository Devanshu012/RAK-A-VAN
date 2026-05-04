'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react'

export default function SignUpPage() {
  const [name, setName]         = useState('')
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [showPw, setShowPw]     = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirm) return alert('Passwords do not match')
    // TODO: wire up auth
    console.log({ name, email, password })
  }

  return (
    <main className="min-h-screen bg-[#FAFAF9] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/logo.png/icon.png"
              alt="RAK A VAN"
              width={130}
              height={38}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-[0_4px_32px_rgba(0,0,0,0.06)] border border-[#E8E6E1] p-8">
          <h1 className="font-serif text-3xl text-c-text mb-1">Create account</h1>
          <p className="text-sm text-c-muted mb-7">Join 10,000+ Australian tradies</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Full name */}
            <div className="flex items-center gap-3 border border-[#E8E6E1] rounded-xl px-4 py-3 focus-within:border-c-accent transition-colors">
              <User size={16} className="text-c-subtle shrink-0" />
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="flex-1 text-[14px] bg-transparent outline-none text-c-text placeholder:text-c-subtle"
              />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 border border-[#E8E6E1] rounded-xl px-4 py-3 focus-within:border-c-accent transition-colors">
              <Mail size={16} className="text-c-subtle shrink-0" />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="flex-1 text-[14px] bg-transparent outline-none text-c-text placeholder:text-c-subtle"
              />
            </div>

            {/* Password */}
            <div className="flex items-center gap-3 border border-[#E8E6E1] rounded-xl px-4 py-3 focus-within:border-c-accent transition-colors">
              <Lock size={16} className="text-c-subtle shrink-0" />
              <input
                type={showPw ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="flex-1 text-[14px] bg-transparent outline-none text-c-text placeholder:text-c-subtle"
              />
              <button type="button" onClick={() => setShowPw(!showPw)} className="text-c-subtle hover:text-c-text transition-colors">
                {showPw ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            {/* Confirm password */}
            <div className="flex items-center gap-3 border border-[#E8E6E1] rounded-xl px-4 py-3 focus-within:border-c-accent transition-colors">
              <Lock size={16} className="text-c-subtle shrink-0" />
              <input
                type={showPw ? 'text' : 'password'}
                placeholder="Confirm password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                className="flex-1 text-[14px] bg-transparent outline-none text-c-text placeholder:text-c-subtle"
              />
            </div>

            <p className="text-[12px] text-c-subtle leading-relaxed">
              By creating an account you agree to our{' '}
              <a href="#" className="text-c-accent hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-c-accent hover:underline">Privacy Policy</a>.
            </p>

            <button type="submit" className="btn-primary justify-center py-3 text-[14px] mt-1">
              Create Account
            </button>
          </form>

          <p className="text-center text-[13px] text-c-muted mt-6">
            Already have an account?{' '}
            <Link href="/" className="text-c-accent font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
