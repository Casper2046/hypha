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
  ArrowLeft, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  TrendingUp,
  Users,
  Palette,
  Code,
  Building,
  ArrowRight
} from 'lucide-react';
import { notFound } from 'next/navigation';

const iconMap = {
  'ngo-microgrants': Users,
  'creator-collectives': Palette,
  'freelancer-ecosystem': Code,
  'real-estate-dao': Building,
};

interface SectorPageProps {
  params: {
    id: string;
  };
}

export default function SectorPage({ params }: SectorPageProps) {
  const sector = flywheelSectors.find(s => s.id === params.id);
  
  if (!sector) {
    notFound();
  }

  const Icon = iconMap[sector.id as keyof typeof iconMap];
  const sectorImage = getSectorImage(sector.id);
  const sectorColor = sector.color === '#0077C8' ? '#1E40AF' : sector.color;
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [painPointsRef, painPointsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [solutionsRef, solutionsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [scenarioRef, scenarioInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 bg-white"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={sectorImage}
            alt={`${sector.title} industry`}
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
          >
            <Link href="/use-cases" className="inline-flex items-center text-gray-700 hover:text-[#FF5000] mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Use Cases
            </Link>
            
            <div className="flex items-center space-x-4 mb-6">
              <div 
                className="p-4 rounded-full bg-white shadow-lg border-2"
                style={{ borderColor: sectorColor }}
              >
                <Icon size={48} style={{ color: sectorColor }} />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {sector.title}
                </h1>
                <p className="text-xl text-gray-700 mt-2">
                  {sector.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section ref={painPointsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={painPointsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
              <AlertTriangle size={32} className="mr-4 text-red-500" />
              Current Pain Points
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              The challenges that prevent this industry from reaching its full potential.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sector.painPoints.map((painPoint, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={painPointsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle size={20} className="mt-1 flex-shrink-0 text-red-500" />
                      <p className="text-gray-700">{painPoint}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section 
        ref={solutionsRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle size={32} className="mr-4 text-green-500" />
              Our Solutions
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              How Hypha DAO addresses these challenges through blockchain technology and decentralized governance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sector.solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 bg-white"
                      style={{ borderLeftColor: sectorColor }}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-1 flex-shrink-0 text-green-500" />
                      <p className="text-gray-700">{solution}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-2 bg-white" style={{ borderColor: sectorColor }}>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 flex items-center">
                  <DollarSign size={28} className="mr-3" style={{ color: sectorColor }} />
                  Business Model
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">{sector.businessModel}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Practical Scenario Section */}
      <section 
        ref={scenarioRef}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={scenarioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp size={32} className="mr-4" style={{ color: sectorColor }} />
              Real-World Example
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl">
              A practical scenario showing how this solution works in practice.
            </p>
          </motion.div>

          <Card className="border-2 bg-white" style={{ borderColor: sectorColor }}>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{sector.scenario}"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Benefits Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={scenarioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Why This Matters
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-[#FF5000]">Lower Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Reduce operational overhead by 60-80% compared to traditional platforms
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-[#1E40AF]">Faster Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Automated smart contracts eliminate delays and manual processing
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <CardTitle className="text-[#FF5000]">Full Transparency</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Every transaction and decision is recorded on-chain for accountability
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/solutions">
                <Button className="bg-[#FF5000] hover:bg-[#E04500] text-white px-8 py-3 text-lg">
                  Explore All Solutions
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/roadmap">
                <Button className="bg-white border-2 border-[#1E40AF] text-[#1E40AF] hover:bg-[#1E40AF] hover:text-white px-8 py-3 text-lg">
                  View Implementation Timeline
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}