'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OrgChart from '@/components/org-chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { 
  Users, 
  Target, 
  Globe, 
  Heart,
  ArrowRight,
  Code,
  MessageSquare,
  Scale,
  Lightbulb,
  Vote,
  FileText
} from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Transparency',
    description: 'Every decision and transaction is visible on-chain for complete accountability',
    color: '#FF5000'
  },
  {
    icon: Users,
    title: 'Human First',
    description: 'Decisions are made collectively by token holders through democratic processes',
    color: '#1E40AF'
  },
  {
    icon: Globe,
    title: 'Global Impact',
    description: 'Building tools that work for organizations worldwide, regardless of location',
    color: '#FF5000'
  },
  {
    icon: Heart,
    title: 'Sustainable Growth',
    description: 'Creating long-term value for all stakeholders in the ecosystem',
    color: '#1E40AF'
  }
];

const circles = [
  {
    icon: Code,
    name: 'Technology Circle',
    description: 'Develops and maintains the core blockchain infrastructure and user interfaces',
    members: 12,
    color: '#1E40AF',
    responsibilities: [
      'Smart contract development',
      'Frontend and backend systems',
      'Security audits and testing',
      'Technical documentation'
    ]
  },
  {
    icon: MessageSquare,
    name: 'Community Circle',
    description: 'Manages partnerships, marketing, and community engagement initiatives',
    members: 8,
    color: '#22c55e',
    responsibilities: [
      'Strategic partnerships',
      'Marketing and communications',
      'Community support',
      'Educational content'
    ]
  },
  {
    icon: Scale,
    name: 'Governance Circle',
    description: 'Oversees legal compliance, treasury management, and governance processes',
    members: 6,
    color: '#8b5cf6',
    responsibilities: [
      'Legal and regulatory compliance',
      'Treasury management',
      'Governance proposals',
      'Risk management'
    ]
  }
];

const communitySpaceFeatures = [
  {
    icon: Lightbulb,
    title: 'Proposal Creation',
    description: 'Community members can create and submit proposals for new initiatives, funding requests, or governance changes',
    color: '#FF5000'
  },
  {
    icon: Vote,
    title: 'Democratic Voting',
    description: 'Token-weighted voting system ensures fair representation while maintaining democratic principles',
    color: '#1E40AF'
  },
  {
    icon: FileText,
    title: 'Transparent Tracking',
    description: 'All proposals, discussions, and voting results are recorded on-chain for complete transparency',
    color: '#22c55e'
  }
];

export default function OrgChartPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [chartRef, chartInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [circlesRef, circlesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [spaceRef, spaceInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <Users size={64} className="mx-auto mb-6 text-[#FF5000]" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Decentralized <span className="bg-gradient-to-r from-[#FF5000] to-[#1E40AF] bg-clip-text text-transparent">Organization</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hypha DAO operates through autonomous circles, each with specialized expertise 
              and democratic decision-making processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide every decision and shape our organizational culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-2 bg-white"
                        style={{ borderColor: value.color }}>
                    <CardHeader>
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${value.color}20` }}
                      >
                        <Icon size={32} style={{ color: value.color }} />
                      </div>
                      <CardTitle className="text-gray-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <section 
        ref={chartRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={chartInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Organizational Structure
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our decentralized structure enables autonomous decision-making while maintaining 
              coordination across all circles.
            </p>
          </motion.div>

          <OrgChart />
        </div>
      </section>

      {/* Circles Detail */}
      <section ref={circlesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={circlesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Autonomous Circles
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each circle operates independently while contributing to the overall ecosystem goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {circles.map((circle, index) => {
              const Icon = circle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={circlesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 bg-white"
                        style={{ borderLeftColor: circle.color }}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div 
                          className="p-3 rounded-full"
                          style={{ backgroundColor: `${circle.color}20` }}
                        >
                          <Icon size={24} style={{ color: circle.color }} />
                        </div>
                        <div>
                          <CardTitle className="text-gray-900">{circle.name}</CardTitle>
                          <p className="text-sm text-gray-600">{circle.members} members</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{circle.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h4>
                        <ul className="space-y-1">
                          {circle.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <div className="w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0"
                                   style={{ backgroundColor: circle.color }} />
                              {responsibility}
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

      {/* Community Space Section */}
      <section 
        ref={spaceRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={spaceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Community Space
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A dedicated space where community members collaborate on proposals, 
              participate in governance, and shape the future of the ecosystem.
            </p>
          </motion.div>

          {/* Community Space Diagram */}
          <div className="mb-16">
            <Card className="overflow-hidden border-2 border-[#22c55e] bg-white">
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-center text-gray-900 text-2xl">
                  Community Proposals Flow
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {communitySpaceFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={spaceInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="text-center"
                      >
                        <div 
                          className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                          style={{ backgroundColor: `${feature.color}20` }}
                        >
                          <Icon size={40} style={{ color: feature.color }} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-700">{feature.description}</p>
                        
                        {index < communitySpaceFeatures.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                            <ArrowRight size={24} className="text-gray-400" />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Spaces Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={spaceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Card className="bg-white border-2 border-[#FF5000]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Modular Spaces System
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Our innovative Spaces feature allows communities to create modular, 
                  purpose-built environments for specific types of proposals and governance activities.
                </p>
                <Link href="/spaces">
                  <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg">
                    Explore Spaces Feature
                    <ArrowRight className="ml-2" size={20} />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Governance Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={spaceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Democratic Governance
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              All major decisions are made through transparent, token-weighted voting processes 
              that ensure community input and accountability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-[#FF5000]">Proposal Creation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Any token holder can submit proposals for community consideration 
                    and discussion.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-[#1E40AF]">Community Voting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Token-weighted voting ensures proportional representation 
                    while maintaining democratic principles.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-[#FF5000]">Transparent Execution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Approved proposals are executed automatically through 
                    smart contracts with full transparency.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions">
                <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg">
                  Learn About Our Solutions
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button className="bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-8 py-3 text-lg">
                  View Development Roadmap
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}