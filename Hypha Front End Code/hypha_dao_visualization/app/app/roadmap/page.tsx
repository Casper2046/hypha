'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import RoadmapTimeline from '@/components/roadmap-timeline';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { imageUrls } from '@/lib/image-utils';
import { 
  Map, 
  Target, 
  Rocket, 
  TrendingUp,
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Users,
  Code,
  Palette,
  Building
} from 'lucide-react';

const milestones = [
  {
    icon: CheckCircle,
    title: 'Foundation Complete',
    description: 'Core DAO infrastructure and smart contracts deployed',
    status: 'completed',
    color: '#22c55e'
  },
  {
    icon: Clock,
    title: 'Multi-Sector Launch',
    description: 'NGO and Creator platforms in active beta testing',
    status: 'in-progress',
    color: '#FF5000'
  },
  {
    icon: Target,
    title: 'Ecosystem Integration',
    description: 'Cross-platform features and shared reputation system',
    status: 'planned',
    color: '#1E40AF'
  },
  {
    icon: Rocket,
    title: 'Global Expansion',
    description: 'International partnerships and regulatory compliance',
    status: 'planned',
    color: '#8b5cf6'
  }
];

const upcomingFeatures = [
  {
    title: 'Advanced Analytics Dashboard',
    description: 'Real-time insights into DAO performance and ecosystem health',
    timeline: 'Q4 2025',
    color: '#FF5000',
    icon: TrendingUp
  },
  {
    title: 'Mobile Application',
    description: 'Native mobile apps for iOS and Android platforms',
    timeline: 'Q1 2026',
    color: '#1E40AF',
    icon: Users
  },
  {
    title: 'AI-Powered Matching',
    description: 'Intelligent project and talent matching across sectors',
    timeline: 'Q2 2026',
    color: '#FF5000',
    icon: Code
  },
  {
    title: 'Layer 2 Integration',
    description: 'Enhanced scalability and reduced transaction costs',
    timeline: 'Q3 2026',
    color: '#1E40AF',
    icon: Building
  }
];

const visionMetrics = [
  {
    value: '1M+',
    label: 'Active Users',
    description: 'Global community members',
    color: '#FF5000'
  },
  {
    value: '10,000+',
    label: 'Active DAOs',
    description: 'Organizations using the platform',
    color: '#1E40AF'
  },
  {
    value: '$1B+',
    label: 'Total Value Managed',
    description: 'Assets under DAO governance',
    color: '#FF5000'
  },
  {
    value: '100+',
    label: 'Countries',
    description: 'Global reach and adoption',
    color: '#1E40AF'
  }
];

export default function RoadmapPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [milestonesRef, milestonesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visionRef, visionInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrls.technologyRoadmap}
            alt="Technology roadmap"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Map size={64} className="mx-auto mb-6 text-[#FF5000]" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Development <span className="bg-gradient-to-r from-[#FF5000] to-[#1E40AF] bg-clip-text text-transparent">Roadmap</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our strategic plan for building the most comprehensive DAO ecosystem, 
              with clear milestones and measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Current Milestones */}
      <section ref={milestonesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={milestonesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Current Progress
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Track our journey from concept to global ecosystem with transparent progress updates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={milestonesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-2 bg-white"
                        style={{ borderColor: milestone.color }}>
                    <CardHeader>
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${milestone.color}20` }}
                      >
                        <Icon size={32} style={{ color: milestone.color }} />
                      </div>
                      <CardTitle className="text-gray-900">{milestone.title}</CardTitle>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: milestone.color }}
                      >
                        {milestone.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section 
        ref={timelineRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Detailed Timeline
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Phase-by-phase development plan with specific deliverables and target dates.
            </p>
          </motion.div>

          <RoadmapTimeline />
        </div>
      </section>

      {/* Upcoming Features */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Upcoming Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Innovative capabilities that will enhance the ecosystem and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 bg-white"
                        style={{ borderLeftColor: feature.color }}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div 
                            className="p-3 rounded-full"
                            style={{ backgroundColor: `${feature.color}20` }}
                          >
                            <Icon size={24} style={{ color: feature.color }} />
                          </div>
                          <CardTitle className="text-gray-900">{feature.title}</CardTitle>
                        </div>
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-medium text-white"
                          style={{ backgroundColor: feature.color }}
                        >
                          {feature.timeline}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        ref={visionRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Long-Term Vision
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              By 2027, Hypha DAO will be the leading platform for decentralized organizations, 
              supporting millions of users across hundreds of sectors worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {visionMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={visionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 bg-white"
                      style={{ borderColor: metric.color }}>
                  <div 
                    className="text-4xl md:text-5xl font-bold mb-2"
                    style={{ color: metric.color }}
                  >
                    {metric.value}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-700">{metric.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <Card className="bg-white border-2 border-[#FF5000] p-8">
              <CardContent>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join the Future of Organizations
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                  Be part of the transformation from traditional hierarchical structures 
                  to transparent, efficient, and community-driven organizations.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/use-cases">
                    <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg">
                      Explore Use Cases
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                  <Link href="/org-chart">
                    <Button className="bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-8 py-3 text-lg">
                      Meet the Team
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built on Proven Technology
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Our roadmap is backed by battle-tested blockchain infrastructure 
              and innovative governance mechanisms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Code size={32} className="mx-auto mb-4 text-[#FF5000]" />
                  <CardTitle className="text-gray-900">Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Audited smart contracts on EOS blockchain ensure 
                    security and reliability for all operations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Palette size={32} className="mx-auto mb-4 text-[#1E40AF]" />
                  <CardTitle className="text-gray-900">User Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Intuitive interfaces that make blockchain technology 
                    accessible to non-technical users.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Building size={32} className="mx-auto mb-4 text-[#FF5000]" />
                  <CardTitle className="text-gray-900">Scalable Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Modular design allows for rapid scaling and 
                    adaptation to diverse organizational needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}