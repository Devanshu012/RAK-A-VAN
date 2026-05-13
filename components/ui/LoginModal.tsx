'use client'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { X, Eye, EyeOff, Mail, Lock } from 'lucide-react'

interface Props {
  onClose: () => void
}

export default function LoginModal({ onClose }: Props) {
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw]     = useState(false)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire up auth
    console.log({ email, password })
  }

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Card */}
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-full text-c-subtle hover:text-c-text hover:bg-c-surface transition-colors"
        >
          <X size={18} />
        </button>

        <h2 className="font-serif text-3xl text-c-text mb-1">Welcome back</h2>
        <p className="text-sm text-c-muted mb-7">Sign in to your RAK A VAN account</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          <div className="text-right">
            <a href="#" className="text-[13px] text-c-accent hover:underline">Forgot password?</a>
          </div>

          <button type="submit" className="btn-primary justify-center py-3 text-[14px] mt-1">
            Sign In
          </button>
        </form>

        <p className="text-center text-[13px] text-c-muted mt-6">
          Don&apos;t have an account?{' '}
          <Link href="/signup" onClick={onClose} className="text-c-accent font-medium hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
