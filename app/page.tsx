'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import type { NextPage } from 'next'



const CulturePro: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your submission!')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: ''
    })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-4 px-6 border-b">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold">LOGO</a>
          <ul className="hidden md:flex space-x-6">
            <li><a href="app\Home.tsx" className="hover:text-primary">Home</a></li>
            <li><a href="app\casestudies.tsx" className="hover:text-primary">Case Studies</a></li>
            <li><a href="app\pricing.tsx" className="hover:text-primary">Pricing</a></li>
            <li><a href="app\featured.tsx" className="hover:text-primary">Featured</a></li>
            <li><a href="app/contact.tsx" className="hover:text-primary">Contact</a></li>
          </ul>
          <div className="space-x-2">
            <Button variant="outline">Sign in</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      <main>
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold mb-4">Culture Pro</h1>
              <p className="text-xl text-muted-foreground mb-4">AI-Based Employee Engagement Platform</p>
              <p className="mb-6">In professional and personal engagements, one major challenge is how to create lasting engagement typically hire employees based on their functional.</p>
              <Button size="lg">Talk to our expert today</Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003763.jpg?t=st=1732514739~exp=1732518339~hmac=d29110d2dd9596a21616dea2f93a42664abbdb2a971d7cb03d469c1a10c4bf7e&w=900" 
                alt="AI-powered workspace"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-10 px-6 bg-muted">
          <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
          <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab121c368c0f3c1a8ca5e_Frame%202087325962.svg" alt="" />
          <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab121ded9009bc4efd720_Frame%202087325959.svg" alt="" />
          <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab1231c0265f85185458a_Frame%202087325958.svg" alt="" />
          <img src="https://cdn.prod.website-files.com/60ebdc9660a5ca3465dd2b4e/657ab1211fb97ff1a55330df_Frame%202087325957.svg" alt="" />

          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">How Culture Pro Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'AI-Driven Persona Mapping', description: 'Track and analyze your cultural metrics with intelligent data visualization', image: 'https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003763.jpg?uid=R134916054&ga=GA1.1.1232746911.1728624937&semt=ais_hybrid' },
                { title: 'Customizable Dictionaries', description: 'Train your AI with customized words unique to cultural development', image: '2nd.jpg' },
                { title: 'Visual Reports & Insights', description: 'Get comprehensive data-driven insights for better decision making', image: '3rd.jpg' }
              ].map((card, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <img src="https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003763.jpg?uid=R134916054&ga=GA1.1.1232746911.1728624937&semt=ais_hybrid"  />
                    
                    <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Culture Pro AI-Based Employee Engagement Platform</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Enhance', description: 'Upgrade your workplace culture with our innovative solutions designed to foster engagement and boost productivity.' },
                { title: 'Inspire', description: 'Unleash your team\'s potential and drive success in a collaborative and empowering environment.' },
                { title: 'Transform', description: 'Immerse yourself in a holistic engagement experience that nurtures both individual and organizational growth.' }
              ].map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <a href="#" className="text-primary font-semibold hover:underline">Services →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    {/* Left Column: Text Content */}
    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
      <h2 className="text-3xl font-bold mb-4">Our Stories</h2>
      <h3 className="text-xl font-semibold mb-4">
        Culture Pro AI-Based Employee Engagement Platform
      </h3>
      <p className="mb-4">
        At Culture Pro, we take more than just a platform; we are a catalyst for creating a thriving workplace culture. 
        Our cutting-edge AI technology is tailored to enhance employee engagement while providing meaningful insights.
      </p>
      <p>
        With features that focus on personalized insights and a supportive atmosphere, we aim to empower every employee 
        to contribute to a vibrant workplace. Whether you are looking to boost morale, increase productivity, or foster innovation, 
        join us on the path to a more engaged and fulfilled workforce.
      </p>
    </div>

    {/* Right Column: Image */}
    <div className="md:w-1/2 flex justify-center">
      <Image
        src="/blockchain-certificates-play-important-role-certification-our-lives_1300345-1505.jpg"
        alt="Team Culture"
        width={600}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


        <section className="py-20 px-6 bg-muted">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Our solutions</h2>
            <p className="text-xl text-muted-foreground mb-10">Customized strategies to elevate your employee engagement experience</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'AI-driven insights', description: 'Data-backed analysis to understand employee' },
                { title: 'Team-building initiatives', description: 'Engaging activities for team dynamics' },
                { title: 'Feedback systems', description: 'Structured channels for employee voice and input' },
                { title: 'Workshops', description: 'Interactive sessions for refreshing workplace' },
                { title: 'Wellness programs', description: 'Supportive initiatives for overall job emotional' },
                { title: 'Remote engagement tools', description: 'Virtual solutions maintaining strong workplace' }
              ].map((solution, index) => (
                <Button key={index} variant="outline" className="h-auto p-6 text-left flex flex-col items-start hover:bg-accent">
                  <h3 className="text-lg font-semibold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <span className="text-primary">→</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    {/* Form Section */}
    <div>
      <h2 className="text-3xl font-bold text-center md:text-left mb-4">Get in touch with us</h2>
      <p className="text-xl text-muted-foreground text-center md:text-left mb-10">
        Get in touch with our Team AI-Based Employee Engagement Platform
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <Input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleInputChange}
          required
        />
        <Button type="submit" className="w-full">Continue</Button>
      </form>
    </div>

    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src=""
        width={800}
        height={1000}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>

      </main>

      <footer className="bg-primary text-primary-foreground py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Desk</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Contact us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-2">
              <li><a href="tel:+15551234567" className="hover:underline">+1 (555) 123-4567</a></li>
              <li><a href="mailto:info@culturepro.com" className="hover:underline">info@culturepro.com</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CulturePro