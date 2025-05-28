'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRightLeft, 
  Shield, 
  Layers,
  Network,
  Coins,
  TrendingUp
} from 'lucide-react';

const ecosystemBenefits = [
  {
    icon: ArrowRightLeft,
    title: 'Cross-Sector Collaboration',
    description: 'NGOs fund projects delivered by creators and freelancers, creating seamless value flows across sectors.',
    examples: [
      'Climate NGO commissions educational content from creators',
      'Real estate DAO hires freelance developers for platform',
      'Creator collective receives micro-grant for social impact project'
    ],
    color: '#FF5000'
  },
  {
    icon: Shield,
    title: 'Portable Reputation',
    description: 'Build reputation once, use everywhere. On-chain credentials work across all platforms in the ecosystem.',
    examples: [
      'Freelancer reputation transfers between projects',
      'Creator badges unlock funding opportunities',
      'NGO reviewer status applies across grant platforms'
    ],
    color: '#1E40AF'
  },
  {
    icon: Layers,
    title: 'Shared Infrastructure',
    description: 'Common governance tools, treasury management, and smart contracts reduce costs for everyone.',
    examples: [
      'Unified voting mechanisms across all DAOs',
      'Shared legal and compliance frameworks',
      'Common treasury and payment infrastructure'
    ],
    color: '#FF5000'
  },
  {
    icon: Network,
    title: 'Network Effects',
    description: 'As more participants join, the ecosystem becomes more valuable for everyone.',
    examples: [
      'Larger talent pool for all sectors',
      'More funding opportunities available',
      'Enhanced liquidity and market depth'
    ],
    color: '#1E40AF'
  },
  {
    icon: Coins,
    title: 'Tokenomics Alignment',
    description: 'All participants use or earn Hypha tokens, creating aligned incentives across the ecosystem.',
    examples: [
      'Governance participation rewards',
      'Cross-platform fee discounts',
      'Ecosystem growth benefits all token holders'
    ],
    color: '#FF5000'
  },
  {
    icon: TrendingUp,
    title: 'Feedback Loop',
    description: 'Each successful project increases trust, attracting more users and generating more value.',
    examples: [
      'Success stories drive adoption',
      'Increased volume funds development',
      'Better features attract diverse use cases'
    ],
    color: '#1E40AF'
  }
];

export default function EcosystemBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Integrated Ecosystem Benefits
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The real power emerges when these sectors work together, creating 
            network effects and shared value across the entire ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecosystemBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 bg-white"
                      style={{ borderLeftColor: benefit.color }}>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div 
                        className="p-3 rounded-full"
                        style={{ backgroundColor: `${benefit.color}20` }}
                      >
                        <Icon size={24} style={{ color: benefit.color }} />
                      </div>
                      <CardTitle className="text-gray-900">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{benefit.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {benefit.examples.map((example, idx) => (
                          <li key={idx} className="text-xs text-gray-700 flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full mt-1.5 mr-2 flex-shrink-0"
                                 style={{ backgroundColor: benefit.color }} />
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
  );
}