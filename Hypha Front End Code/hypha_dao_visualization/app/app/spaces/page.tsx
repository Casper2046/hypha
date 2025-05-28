'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { spacesData } from '@/lib/data';
import { 
  Layers, 
  ArrowRight, 
  Settings, 
  Vote, 
  MessageSquare,
  Code,
  Zap,
  Shield,
  Users,
  CheckCircle
} from 'lucide-react';

const spaceIcons = {
  'governance-space': Settings,
  'project-space': Zap,
  'community-space': Users,
  'technical-space': Code,
};

const workflowSteps = [
  {
    icon: Layers,
    title: 'Create Space',
    description: 'Set up a modular space tailored to your specific governance needs',
    color: '#FF5000'
  },
  {
    icon: Settings,
    title: 'Configure Rules',
    description: 'Define voting mechanisms, quorum requirements, and execution protocols',
    color: '#1E40AF'
  },
  {
    icon: Vote,
    title: 'Submit Proposals',
    description: 'Community members create and submit proposals within the space',
    color: '#22c55e'
  },
  {
    icon: MessageSquare,
    title: 'Discuss & Vote',
    description: 'Engage in structured discussions and participate in democratic voting',
    color: '#8b5cf6'
  },
  {
    icon: CheckCircle,
    title: 'Execute Results',
    description: 'Approved proposals are automatically executed through smart contracts',
    color: '#FF5000'
  }
];

export default function SpacesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [overviewRef, overviewInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [typesRef, typesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [workflowRef, workflowInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [diagramRef, diagramInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <Layers size={64} className="mx-auto mb-6 text-[#FF5000]" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modular <span className="bg-gradient-to-r from-[#FF5000] to-[#1E40AF] bg-clip-text text-transparent">Spaces</span> System
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Create purpose-built environments for specific types of proposals and governance activities. 
              Each space is customizable, secure, and designed for optimal community participation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section ref={overviewRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={overviewInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {spacesData.overview.title}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              {spacesData.overview.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spacesData.overview.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={overviewInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-2 border-[#FF5000]/20 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-[#FF5000]/20 mx-auto mb-4 flex items-center justify-center">
                      <CheckCircle size={24} className="text-[#FF5000]" />
                    </div>
                    <p className="text-gray-700 font-medium">{benefit}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Types Section */}
      <section 
        ref={typesRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={typesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Space Types
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Different types of spaces optimized for specific governance activities and decision-making processes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spacesData.types.map((space, index) => {
              const Icon = spaceIcons[space.id as keyof typeof spaceIcons];
              return (
                <motion.div
                  key={space.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={typesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 bg-white"
                        style={{ borderLeftColor: space.color }}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div 
                          className="p-3 rounded-full"
                          style={{ backgroundColor: `${space.color}20` }}
                        >
                          <Icon size={24} style={{ color: space.color }} />
                        </div>
                        <div>
                          <CardTitle className="text-gray-900">{space.name}</CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{space.description}</p>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {space.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <div className="w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0"
                                   style={{ backgroundColor: space.color }} />
                              {feature}
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

      {/* Workflow Section */}
      <section ref={workflowRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Spaces Work
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined workflow that makes governance accessible, transparent, and efficient.
            </p>
          </motion.div>

          <div className="relative">
            {/* Workflow Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {workflowSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center relative"
                  >
                    <div 
                      className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}20` }}
                    >
                      <Icon size={32} style={{ color: step.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-700">{step.description}</p>
                    
                    {/* Arrow for desktop */}
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                        <ArrowRight size={20} className="text-gray-400" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Diagram Section */}
      <section 
        ref={diagramRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={diagramInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Spaces Architecture
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Visual representation of how modular spaces integrate within the Hypha DAO ecosystem.
            </p>
          </motion.div>

          <div className="flex justify-center">
            <Card className="overflow-hidden border-2 border-[#FF5000] max-w-4xl bg-white">
              <CardContent className="p-0">
                <Image
                  src="/Screenshot 2025-05-27 at 2.23.58 PM.png"
                  alt="Spaces system architecture diagram"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={diagramInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Use Spaces?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Spaces provide the flexibility and structure needed for effective decentralized governance 
              while maintaining the security and transparency of blockchain technology.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Shield size={32} className="mx-auto mb-4 text-[#FF5000]" />
                  <CardTitle className="text-gray-900">Secure by Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Built-in security measures and smart contract validation 
                    ensure proposal integrity and execution safety.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Settings size={32} className="mx-auto mb-4 text-[#1E40AF]" />
                  <CardTitle className="text-gray-900">Highly Customizable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Tailor voting mechanisms, discussion formats, and execution 
                    protocols to match your community's specific needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <Users size={32} className="mx-auto mb-4 text-[#22c55e]" />
                  <CardTitle className="text-gray-900">Community Focused</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Designed to encourage participation and ensure every 
                    community member has a voice in the decision-making process.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/use-cases">
                <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg">
                  See Spaces in Action
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button className="bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-8 py-3 text-lg">
                  View Development Timeline
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}