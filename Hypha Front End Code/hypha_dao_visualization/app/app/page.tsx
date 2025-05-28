'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FlywheelDiagram from '@/components/flywheel-diagram';
import EcosystemBenefits from '@/components/ecosystem-benefits';
import StatsCounter from '@/components/stats-counter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe, 
  Users,
  TrendingUp,
  CheckCircle,
  Layers
} from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Transparent Governance',
    description: 'Every decision, vote, and transaction is recorded on-chain for complete transparency and accountability.',
    color: '#FF5000'
  },
  {
    icon: Zap,
    title: 'Instant Settlements',
    description: 'Smart contracts enable automatic fund distribution and instant payments without intermediaries.',
    color: '#1E40AF'
  },
  {
    icon: Layers,
    title: 'Modular Spaces',
    description: 'Create purpose-built environments for specific types of proposals and governance activities.',
    color: '#FF5000'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Decisions are made collectively by token holders through democratic voting mechanisms.',
    color: '#1E40AF'
  }
];

const stats = [
  { label: 'Active DAOs', value: 150, suffix: '+', color: '#FF5000' },
  { label: 'Total Value Locked', value: 2.5, prefix: '$', suffix: 'M', color: '#1E40AF' },
  { label: 'Community Members', value: 5000, suffix: '+', color: '#FF5000' },
  { label: 'Successful Projects', value: 300, suffix: '+', color: '#1E40AF' }
];

export default function HomePage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-white"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Main heading with improved styling */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                The Future of{' '}
                <span className="bg-gradient-to-r from-[#FF5000] to-[#1E40AF] bg-clip-text text-transparent">
                  Organizations
                </span>
              </h1>
              
              <div className="h-4"></div>
              
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Hypha DAO creates a self-reinforcing ecosystem where NGOs, creators, freelancers, 
                and real estate investors collaborate through transparent, efficient blockchain technology.
              </p>
            </div>

            {/* CTA buttons with improved styling */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/use-cases">
                <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore Use Cases
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/spaces">
                <Button className="bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Discover Spaces
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flywheel Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Interactive Flywheel Ecosystem
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Click on any sector to explore how Hypha DAO transforms traditional industries 
              through decentralized governance, transparent operations, and community ownership.
            </p>
          </motion.div>
          
          <FlywheelDiagram />
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Hypha DAO?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Built on proven blockchain technology with a focus on real-world utility and sustainable growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-opacity-50 bg-white"
                        style={{ borderColor: feature.color }}>
                    <CardHeader className="text-center">
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <Icon size={32} style={{ color: feature.color }} />
                      </div>
                      <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ecosystem Benefits */}
      <EcosystemBenefits />

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Growing Ecosystem
            </h2>
            <p className="text-lg text-gray-700">
              Join thousands of organizations and individuals building the future of work.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <StatsCounter
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className={`text-4xl md:text-5xl font-bold mb-2`}
                  duration={2.5}
                />
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF5000] to-[#1E40AF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join the Revolution?
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Start building your decentralized organization today with Hypha DAO's 
              proven tools and supportive community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/use-cases">
                <Button className="bg-white text-[#FF5000] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/org-chart">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E40AF] px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Meet the Team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}