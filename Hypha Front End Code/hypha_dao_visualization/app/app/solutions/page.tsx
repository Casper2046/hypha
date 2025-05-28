'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { flywheelSectors } from '@/lib/data';
import { getSectorImage } from '@/lib/image-utils';
import { 
  CheckCircle, 
  Zap, 
  Shield, 
  Users,
  TrendingUp,
  ArrowRight,
  Coins,
  Globe,
  Lock
} from 'lucide-react';

const coreFeatures = [
  {
    icon: Shield,
    title: 'On-Chain Transparency',
    description: 'Every transaction, vote, and decision is recorded on the blockchain for complete accountability',
    benefits: ['Public audit trail', 'Immutable records', 'Real-time verification'],
    color: '#FF5000'
  },
  {
    icon: Zap,
    title: 'Smart Contract Automation',
    description: 'Automated workflows eliminate intermediaries and reduce processing time to minutes',
    benefits: ['Instant settlements', 'Reduced overhead', 'Programmable logic'],
    color: '#1E40AF'
  },
  {
    icon: Users,
    title: 'Community Governance',
    description: 'Token holders participate in platform decisions through democratic voting mechanisms',
    benefits: ['Collective ownership', 'Aligned incentives', 'Decentralized control'],
    color: '#FF5000'
  },
  {
    icon: Coins,
    title: 'Multi-Token Economy',
    description: 'Separate governance, utility, and reward tokens optimize different aspects of the ecosystem',
    benefits: ['Flexible incentives', 'Value capture', 'Economic sustainability'],
    color: '#1E40AF'
  }
];

const advantages = [
  {
    metric: '90%',
    label: 'Fee Reduction',
    description: 'From 20-35% to 2-3% platform fees',
    color: '#FF5000'
  },
  {
    metric: '99%',
    label: 'Faster Processing',
    description: 'From weeks/months to minutes/hours',
    color: '#1E40AF'
  },
  {
    metric: '100%',
    label: 'Transparency',
    description: 'All operations visible on-chain',
    color: '#FF5000'
  },
  {
    metric: '24/7',
    label: 'Global Access',
    description: 'No geographic or time restrictions',
    color: '#1E40AF'
  }
];

export default function SolutionsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sectorsRef, sectorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [advantagesRef, advantagesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <CheckCircle size={64} className="mx-auto mb-6 text-[#22c55e]" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blockchain-Powered <span className="bg-gradient-to-r from-[#FF5000] to-[#1E40AF] bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hypha DAO leverages proven blockchain technology to eliminate inefficiencies, 
              reduce costs, and create transparent, community-owned platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Core Technology Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Built on battle-tested blockchain infrastructure with a focus on usability and real-world adoption.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 bg-white"
                        style={{ borderLeftColor: feature.color }}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div 
                          className="p-3 rounded-full"
                          style={{ backgroundColor: `${feature.color}20` }}
                        >
                          <Icon size={24} style={{ color: feature.color }} />
                        </div>
                        <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{feature.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <CheckCircle size={16} className="mt-0.5 mr-2 flex-shrink-0 text-green-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section 
        ref={advantagesRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Measurable Improvements
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Concrete metrics that demonstrate the value of decentralized solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={advantagesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 bg-white"
                      style={{ borderColor: advantage.color }}>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: advantage.color }}
                  >
                    {advantage.metric}
                  </div>
                  <div className="font-semibold text-gray-900 mb-2">{advantage.label}</div>
                  <div className="text-sm text-gray-700">{advantage.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector Solutions */}
      <section ref={sectorsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sector-Specific Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Tailored implementations that address the unique challenges of each industry.
            </p>
          </motion.div>

          <div className="space-y-12">
            {flywheelSectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={sectorsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="lg:w-1/3 relative h-64 lg:h-auto">
                      <Image
                        src={getSectorImage(sector.id)}
                        alt={`${sector.title} solutions`}
                        fill
                        className="object-cover"
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"
                        style={{ background: `linear-gradient(45deg, ${sector.color}20, transparent)` }}
                      />
                    </div>
                    <div className="lg:w-2/3 p-8">
                      <div className="flex items-center space-x-3 mb-4">
                        <div 
                          className="w-3 h-12 rounded-full"
                          style={{ backgroundColor: sector.color }}
                        />
                        <h3 className="text-2xl font-bold text-gray-900">{sector.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 text-lg">Our Solutions:</h4>
                        <ul className="space-y-3">
                          {sector.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle size={16} className="mt-1 flex-shrink-0 text-green-500" />
                              <span className="text-gray-700">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: `${sector.color}10` }}>
                        <h5 className="font-semibold text-gray-900 mb-2">Business Model:</h5>
                        <p className="text-sm text-gray-700">{sector.businessModel}</p>
                      </div>

                      <div className="mt-6">
                        <Link href={`/sectors/${sector.id}`}>
                          <Button 
                            className="text-white hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: sector.color }}
                          >
                            View Detailed Implementation
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Hypha DAO?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Our platform combines proven technology with innovative governance models 
              to deliver real-world value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Lock size={32} className="mx-auto mb-4 text-[#FF5000]" />
                  <CardTitle className="text-gray-900">Battle-Tested Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Built on EOS blockchain with multiple security audits and 
                    proven smart contract architecture.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Globe size={32} className="mx-auto mb-4 text-[#1E40AF]" />
                  <CardTitle className="text-gray-900">Global Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Legal frameworks and compliance tools designed for 
                    international operation and regulatory clarity.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Users size={32} className="mx-auto mb-4 text-[#FF5000]" />
                  <CardTitle className="text-gray-900">User-Friendly Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Web interface that feels like familiar tools while 
                    providing full blockchain functionality.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <Link href="/roadmap">
                <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg mr-4">
                  View Implementation Roadmap
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/use-cases">
                <Button className="bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-8 py-3 text-lg">
                  Explore Use Cases
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}