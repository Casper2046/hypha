'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { roadmapData } from '@/lib/data';
import { CheckCircle, Clock, Calendar } from 'lucide-react';

const statusColors = {
  completed: '#22c55e',
  'in-progress': '#FF5000',
  planned: '#1E40AF',
};

const statusIcons = {
  completed: CheckCircle,
  'in-progress': Clock,
  planned: Calendar,
};

export default function RoadmapTimeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF5000] to-[#1E40AF] hidden md:block" />
      
      <div className="space-y-8">
        {roadmapData.map((item, index) => {
          const StatusIcon = statusIcons[item.status as keyof typeof statusIcons];
          const statusColor = statusColors[item.status as keyof typeof statusColors];
          
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-4 h-4 rounded-full border-4 border-white shadow-lg hidden md:block"
                   style={{ backgroundColor: statusColor }} />
              
              {/* Content card */}
              <div className="md:ml-20">
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 bg-white"
                      style={{ borderLeftColor: statusColor }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-gray-900 flex items-center space-x-2">
                        <StatusIcon size={20} style={{ color: statusColor }} />
                        <span>{item.title}</span>
                      </CardTitle>
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: statusColor }}
                      >
                        {item.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#FF5000]">
                      {item.phase}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.items.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{task}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 text-sm text-gray-600">
                      {item.startDate} - {item.endDate}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}