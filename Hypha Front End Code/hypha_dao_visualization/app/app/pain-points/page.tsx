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
  AlertTriangle, 
  DollarSign, 
  Clock, 
  Shield,
  Users,
  TrendingDown,
  ArrowRight
} from 'lucide-react';

const commonPainPoints = [
  {
    icon: DollarSign,
    title: 'High Fees & Overhead',
    description: 'Traditional platforms extract 8-35% in fees, reducing value for participants',
    examples: ['Patreon: 8-12% + processing', 'Upwork: Up to 20%', 'NGO overhead: 25-35%'],
    color: '#FF5000'
  },
  {
    icon: Clock,
    title: 'Slow Processing',
    description: 'Lengthy approval processes and delayed payments hurt cash flow',
    examples: ['Grant disbursement: Months', 'Freelancer payments: 7-14 days', 'Real estate exits: Years'],
    color: '#1E40AF'
  },
  {
    icon: Shield,
    title: 'Lack of Transparency',
    description: 'Opaque decision-making and unverifiable impact data erode trust',
    examples: ['Self-reported impact', 'Closed selection processes', 'Hidden fee structures'],
    color: '#FF5000'
  },
  {
    icon: Users,
    title: 'Platform Dependency',
    description: 'Users have no ownership or voice in platform governance',
    examples: ['De-platforming risk', 'Unilateral policy changes', 'No revenue sharing'],
    color: '#1E40AF'
  }
];

export default function PainPointsPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [painPointsRef, painPointsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [sectorsRef, sectorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            <AlertTriangle size={64} className="mx-auto mb-6 text-[#FF5000]" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Current Industry <span className="text-[#FF5000]">Pain Points</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Traditional platforms create barriers, extract excessive value, and limit 
              participant control. Here's what needs to change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common Pain Points */}
      <section ref={painPointsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={painPointsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Universal Challenges
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These problems affect every sector, reducing efficiency and limiting growth potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonPainPoints.map((painPoint, index) => {
              const Icon = painPoint.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={painPointsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 bg-white"
                        style={{ borderLeftColor: painPoint.color }}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div 
                          className="p-3 rounded-full"
                          style={{ backgroundColor: `${painPoint.color}20` }}
                        >
                          <Icon size={24} style={{ color: painPoint.color }} />
                        </div>
                        <CardTitle className="text-gray-900">{painPoint.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{painPoint.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                        <ul className="space-y-1">
                          {painPoint.examples.map((example, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start">
                              <TrendingDown size={16} className="mt-0.5 mr-2 flex-shrink-0 text-red-500" />
                              {example}
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

      {/* Sector-Specific Pain Points */}
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
              Sector-Specific Challenges
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each industry faces unique obstacles that prevent optimal value creation and distribution.
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
                        alt={`${sector.title} challenges`}
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
                        <h4 className="font-semibold text-gray-900 text-lg">Current Pain Points:</h4>
                        <ul className="space-y-3">
                          {sector.painPoints.map((painPoint, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <AlertTriangle size={16} className="mt-1 flex-shrink-0 text-red-500" />
                              <span className="text-gray-700">{painPoint}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6">
                        <Link href={`/sectors/${sector.id}`}>
                          <Button 
                            className="text-white hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: sector.color }}
                          >
                            See How We Solve This
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

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Cost of Inaction
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
              These pain points don't just inconvenience users—they represent billions 
              in lost value and missed opportunities for innovation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF5000] mb-2">$50B+</div>
                <div className="text-gray-700">Lost to platform fees annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#1E40AF] mb-2">72%</div>
                <div className="text-gray-700">Of creators want platform ownership</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF5000] mb-2">45 days</div>
                <div className="text-gray-700">Average grant processing time</div>
              </div>
            </div>

            <Link href="/solutions">
              <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg">
                Discover Our Solutions
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}