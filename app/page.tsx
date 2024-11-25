'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg';
}) => {
  const baseStyles = 'font-medium rounded-md transition-colors'
  const variantStyles = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
  }
  const sizeStyles = {
    default: 'h-10 px-4 py-2',
    lg: 'h-11 px-8'
  }

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Input = ({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await new Promise(resolve => setTimeout(resolve, 1000))
    setFormSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Input type="text" name="firstName" placeholder="First Name" required aria-label="First Name" />
        <Input type="text" name="lastName" placeholder="Last Name" required aria-label="Last Name" />
      </div>
      <Input type="email" name="email" placeholder="Email" required aria-label="Email" />
      <Input type="tel" name="phone" placeholder="Phone" required aria-label="Phone" />
      <Input type="text" name="company" placeholder="Company" required aria-label="Company" />
      <Button type="submit" className="w-full">Continue</Button>
      {formSubmitted && (
        <p className="mt-4 text-green-600 text-center" role="alert">Thank you for your submission!</p>
      )}
    </form>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-foreground">
      <header className="border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <Link href="/" className="font-bold text-2xl">LOGO</Link>
            <Link href="Home" className="home">Home</Link>
            <Link href="How it works" className="home">How it works</Link>
            <Link href="Pricing" className="home">Pricing</Link>
            <Link href="Features" className="home">Features</Link>
            <Link href="contact" className="home">Contact</Link>
            <div className="flex space-x-4">
              <Button variant="outline">Sign in</Button>
              <Button>Get Started</Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Culture Pro</h1>
                <p className="text-xl text-muted-foreground mb-4">AI-Based Employee Engagement Platform</p>
                <p className="mb-6">
                  In professional and personal engagements, one major challenge is how to create lasting engagement.
                  We typically hire employees based on their functional skills.
                </p>
                <Button size="lg">Talk to our expert today</Button>
              </div>
              <div className="md:w-1/2">
                <img src="futuristic-business-scene-with-ultra-modern-ambiance_23-2151003765 (1).jpg" alt="ai image" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-around items-center flex-wrap gap-8">
            <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab121c368c0f3c1a8ca5e_Frame%202087325962.svg" alt="" />
            <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab121ded9009bc4efd720_Frame%202087325959.svg" alt="" />
            <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab1231c0265f85185458a_Frame%202087325958.svg" alt="" />
            <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab1231c0265f85185458a_Frame%202087325958.svg" alt="" />
            <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab12184d5fa2b41caca87_Frame%202087325963.svg" alt="" />

            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How Culture Pro Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI-Driven Persona Mapping',
                  description: 'Track and analyze your cultural metrics with intelligent data visualization'
                },
                {
                  title: 'Customizable Dictionaries',
                  description: 'Train your AI with customized words unique to cultural development'
                },
                {
                  title: 'Visual Reports & Insights',
                  description: 'Get comprehensive data-driven insights for better decision making'
                }
              ].map((item, index) => (
                <img src="1stt.jpg" alt="" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Culture Pro AI-Based Employee Engagement Platform</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Enhance',
                  description: 'Upgrade your workplace culture with our innovative solutions designed to foster engagement and boost productivity.'
                },
                {
                  title: 'Inspire',
                  description: 'Unleash your team\'s potential and drive success in a collaborative and empowering environment.'
                },
                {
                  title: 'Transform',
                  description: 'Immerse yourself in a holistic engagement experience that nurtures both individual and organizational growth.'
                }
              ].map((item, index) => (
                <div key={index} className="rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="mb-4">{item.description}</p>
                  <Link href="#" className="text-primary font-bold">Services →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-4">Our Stories</h2>
                <h3 className="text-xl font-semibold mb-4">Culture Pro AI-Based Employee Engagement Platform</h3>
                <p className="mb-4">
                  At Culture Pro, we are more than just a platform; we are a catalyst for creating a thriving workplace
                  culture. Our cutting-edge AI technology is tailored to enhance employee engagement while providing
                  meaningful insights.
                </p>
                <p>
                  With features that focus on personalized insights and a supportive atmosphere, we aim to empower every
                  employee to contribute to a vibrant workplace. Whether you are looking to boost morale, increase
                  productivity, or foster innovation, join us on the path to a more engaged and fulfilled workforce.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="C:\Users\kingb\OneDrive\Desktop\my-sample-next-js\blockchain-certificates-play-important-role-certification-our-lives_1300345-1505.jpg"
                  alt="Team Culture"
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Our solutions</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Customized strategies to elevate your employee engagement experience
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'AI-driven insights',
                'Team-building initiatives',
                'Feedback systems',
                'Workshops',
                'Wellness programs',
                'Remote engagement tools'
              ].map((solution, index) => (
                <button key={index} className="solution-btn text-left border border-border rounded-lg p-6 hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-2">{solution}</h3>
                  <p className="text-muted-foreground mb-4">Customized solution for {solution.toLowerCase()}</p>
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Get in touch with us</h2>
              <p className="text-xl text-muted-foreground text-center mb-8">
                Connect with our AI-Based Employee Engagement Platform team
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="text-foreground border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Company',
                links: ['About us', 'Careers', 'Partners']
              },
              {
                title: 'Support',
                links: ['Help Desk', 'FAQs', 'Contact us']
              },
              {
                title: 'Get in touch',
                links: ['+1 (555) 123-4567', 'help@example.com']
              }
            ].map((section, index) => (
              <div key={index}>
                <h4 className="text-primary font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-muted-foreground hover:text-foreground">{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}