'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent } from '@/components/ui/card';
import { teamData } from '@/lib/data';
import { Users, Code, MessageSquare, Scale } from 'lucide-react';

const departmentIcons = {
  Executive: Users,
  Engineering: Code,
  Operations: MessageSquare,
  Governance: Scale,
};

const departmentColors = {
  Executive: '#FF5000',
  Engineering: '#1E40AF',
  Operations: '#22c55e',
  Governance: '#8b5cf6',
};

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  children?: TeamMember[];
}

const TeamNode = ({ member, level = 0 }: { member: TeamMember; level?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const Icon = departmentIcons[member.department as keyof typeof departmentIcons] || Users;
  const color = departmentColors[member.department as keyof typeof departmentColors];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: level * 0.1, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <Card className="mb-4 hover:shadow-lg transition-all duration-300 border-2 bg-white"
            style={{ borderColor: color }}>
        <CardContent className="p-4 text-center min-w-[200px]">
          <div className="flex justify-center mb-3">
            <div 
              className="p-3 rounded-full"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon size={24} style={{ color }} />
            </div>
          </div>
          <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
          <p className="text-sm text-gray-700 mb-2">{member.role}</p>
          <span 
            className="px-2 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: color }}
          >
            {member.department}
          </span>
        </CardContent>
      </Card>

      {member.children && member.children.length > 0 && (
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-300 transform -translate-x-1/2" />
          
          {/* Horizontal line for multiple children */}
          {member.children.length > 1 && (
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-300" />
          )}
          
          <div className="flex justify-center space-x-8 pt-8">
            {member.children.map((child, index) => (
              <div key={child.id} className="relative">
                {/* Vertical line to child */}
                <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gray-300 transform -translate-x-1/2" />
                <div className="pt-8">
                  <TeamNode member={child} level={level + 1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default function OrgChart() {
  return (
    <div className="w-full overflow-x-auto bg-white">
      <div className="min-w-[800px] flex justify-center p-8">
        <TeamNode member={teamData} />
      </div>
    </div>
  );
}