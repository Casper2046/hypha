'use client';

import React, { useCallback, useMemo } from 'react';
import { 
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  ConnectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { flywheelSectors } from '@/lib/data';
import { 
  Users, 
  Palette, 
  Code, 
  Building,
  ArrowRight
} from 'lucide-react';

const iconMap = {
  'ngo-microgrants': Users,
  'creator-collectives': Palette,
  'freelancer-ecosystem': Code,
  'real-estate-dao': Building,
};

const CustomNode = ({ data }: { data: any }) => {
  const router = useRouter();
  const Icon = iconMap[data.id as keyof typeof iconMap] || Users;

  const handleClick = () => {
    router.push(`/sectors/${data.id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer group"
      onClick={handleClick}
    >
      <div
        className="relative p-6 rounded-xl shadow-lg border-2 bg-white transition-all duration-300 group-hover:shadow-xl"
        style={{
          borderColor: data.color,
          minWidth: '200px',
          minHeight: '120px',
        }}
      >
        <div className="flex flex-col items-center text-center space-y-3">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: `${data.color}20` }}
          >
            <Icon 
              size={24} 
              style={{ color: data.color }}
            />
          </div>
          <div>
            <h3 
              className="font-bold text-sm leading-tight text-gray-900"
            >
              {data.name}
            </h3>
            <p className="text-xs text-gray-600 mt-1 opacity-80">
              {data.description.substring(0, 50)}...
            </p>
          </div>
          <ArrowRight 
            size={16} 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ color: data.color }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

export default function FlywheelDiagram() {
  const initialNodes: Node[] = useMemo(() => 
    flywheelSectors.map((sector, index) => ({
      id: sector.id,
      type: 'custom',
      position: sector.position,
      data: {
        id: sector.id,
        name: sector.name,
        description: sector.description,
        color: sector.color === '#0077C8' ? '#1E40AF' : sector.color,
      },
      draggable: false,
    })), []
  );

  const initialEdges: Edge[] = useMemo(() => [
    {
      id: 'e1-2',
      source: 'ngo-microgrants',
      target: 'creator-collectives',
      animated: true,
      style: { stroke: '#FF5000', strokeWidth: 3 },
      type: 'smoothstep',
    },
    {
      id: 'e2-3',
      source: 'creator-collectives',
      target: 'freelancer-ecosystem',
      animated: true,
      style: { stroke: '#1E40AF', strokeWidth: 3 },
      type: 'smoothstep',
    },
    {
      id: 'e3-4',
      source: 'freelancer-ecosystem',
      target: 'real-estate-dao',
      animated: true,
      style: { stroke: '#FF5000', strokeWidth: 3 },
      type: 'smoothstep',
    },
    {
      id: 'e4-1',
      source: 'real-estate-dao',
      target: 'ngo-microgrants',
      animated: true,
      style: { stroke: '#1E40AF', strokeWidth: 3 },
      type: 'smoothstep',
    },
  ], []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className="w-full h-[600px] bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionMode={ConnectionMode.Loose}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        attributionPosition="bottom-left"
      >
        <Background color="#f3f4f6" gap={20} />
        <Controls 
          className="bg-white border border-gray-200 rounded-lg shadow-md"
          showInteractive={false}
        />
      </ReactFlow>
      
      {/* Center logo/title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center bg-white rounded-full p-6 shadow-lg border-2 border-gray-200"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Hypha Flywheel
          </h2>
          <p className="text-sm text-gray-600">
            Ecosystem
          </p>
        </motion.div>
      </div>
    </div>
  );
}