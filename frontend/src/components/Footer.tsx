"use client"

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, DiscIcon as Discord, Mail, ChevronRight, Code2, PuzzleIcon as Chess, ArrowRight } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    setIsSubscribed(true)
    setEmail('')
  }

  const links = {
    product: [
      { name: 'Play Now', href: '/play' },
      { name: 'Learn', href: '/learn' },
      { name: 'Leaderboard', href: '/leaderboard' },
      { name: 'Challenges', href: '/challenges' },
    ],
    resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API', href: '/api' },
      { name: 'Community', href: '/community' },
      { name: 'Blog', href: '/blog' },
    ],
    social: [
      { name: 'GitHub', href: 'https://github.com/codechessers', icon: Github },
      { name: 'Twitter', href: 'https://twitter.com/codechess', icon: Twitter },
      { name: 'Discord', href: 'https://discord.gg/codechess', icon: Discord },
      { name: 'Email', href: 'mailto:contact@codechess.com', icon: Mail },
    ]
  }

  return (
    <footer className="relative text-white mt-auto border-t border-[#b2ff14]/20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-64 h-64 bg-[#b2ff14]/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-12 right-1/4 w-48 h-48 bg-[#b2ff14]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b2ff14]/50 to-transparent"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 text-[#b2ff14]">
              <h3 className="text-2xl font-bold bg-gradient-to-t from-gray-300 via-[#b1ff14ea] to-[#b2ff14] bg-clip-text text-transparent">
                CodeChess
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Challenge your mind with the perfect fusion of chess strategy and coding prowess. Join the ultimate battle of logic and skill.
            </p>
            
            {/* Newsletter */}
            <div className="relative">
              <h4 className="text-sm font-medium mb-2 text-white">Join our newsletter</h4>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-[#b2ff14]/20 focus:border-[#b2ff14]/50 focus:ring-1 focus:ring-[#b2ff14]/50 transition-colors duration-200 text-white placeholder-gray-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-[#b2ff14]/10 hover:bg-[#b2ff14]/20 transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4 text-[#b2ff14]" />
                </button>
              </form>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute text-sm text-[#b2ff14] mt-2"
                >
                  Thanks for subscribing! 🎉
                </motion.p>
              )}
            </div>
          </div>

          {/* Product Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#b2ff14] mb-4">Product</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-[#b2ff14] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#b2ff14] mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 mr-1 text-[#b2ff14] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#b2ff14] mb-4">Connect with Us</h4>
            <div className="grid grid-cols-2 gap-4">
              {links.social.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-[#b2ff14]/10 transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </span>
                    <span>{link.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-[#b2ff14]/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} CodeChess. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
