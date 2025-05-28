'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EcosystemBenefits from '@/components/ecosystem-benefits';
import Link from 'next/link';
import Image from 'next/image';
import { flywheelSectors } from '@/lib/data';
import { 
  ArrowRight, 
  Users, 
  Palette, 
  Code, 
  Building,
  DollarSign,
  Clock,
  Shield
} from 'lucide-react';

const iconMap = {
  'ngo-microgrants': Users,
  'creator-collectives': Palette,
  'freelancer-ecosystem': Code,
  'real-estate-dao': Building,
};

const benefits = [
  {
    icon: DollarSign,
    title: 'Lower Fees',
    description: 'Reduce operational costs by 60-80% compared to traditional platforms',
    color: '#FF5000'
  },
  {
    icon: Clock,
    title: 'Faster Processing',
    description: 'Instant settlements and automated workflows eliminate delays',
    color: '#1E40AF'
  },
  {
    icon: Shield,
    title: 'Transparent Operations',
    description: 'Every transaction and decision is recorded on-chain for full accountability',
    color: '#FF5000'
  }
];

export default function UseCasesPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sectorsRef, sectorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real-World <span className="bg-gradient-to-r from-[#FF5000] to-[#1E40AF] bg-clip-text text-transparent">Use Cases</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how Hypha DAO transforms traditional industries through decentralized 
              governance, transparent operations, and community-driven innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Organizations Choose DAOs
            </h2>
            <p className="text-lg text-gray-700">
              Concrete advantages that drive real business value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-2 bg-white"
                        style={{ borderColor: benefit.color }}>
                    <CardHeader>
                      <div 
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: `${benefit.color}20` }}
                      >
                        <Icon size={32} style={{ color: benefit.color }} />
                      </div>
                      <CardTitle className="text-gray-900">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section 
        ref={sectorsRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Four Transformative Sectors
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each sector addresses specific pain points while contributing to a 
              self-reinforcing ecosystem of growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {flywheelSectors.map((sector, index) => {
              const Icon = iconMap[sector.id as keyof typeof iconMap];
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 group cursor-pointer bg-white"
                        style={{ borderLeftColor: sector.color }}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div 
                          className="p-3 rounded-full"
                          style={{ backgroundColor: `${sector.color}20` }}
                        >
                          <Icon size={24} style={{ color: sector.color }} />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-gray-900 group-hover:text-opacity-80 transition-colors">
                            {sector.title}
                          </CardTitle>
                        </div>
                        <ArrowRight 
                          size={20} 
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ color: sector.color }}
                        />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{sector.description}</p>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {sector.solutions.slice(0, 2).map((solution, idx) => (
                              <li key={idx} className="text-sm text-gray-700 flex items-start">
                                <div className="w-2 h-2 rounded-full mt-2 mr-2 flex-shrink-0"
                                     style={{ backgroundColor: sector.color }} />
                                {solution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link href={`/sectors/${sector.id}`}>
                          <Button 
                            className="w-full text-white"
                            style={{ backgroundColor: sector.color }}
                          >
                            Learn More
                            <ArrowRight className="ml-2" size={16} />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <EcosystemBenefits />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              Join the growing ecosystem of organizations leveraging blockchain technology 
              for transparent, efficient, and community-driven operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions">
                <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg">
                  Explore Solutions
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/pain-points">
                <Button className="bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-8 py-3 text-lg">
                  See Pain Points We Solve
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}