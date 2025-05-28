export const flywheelSectors = [
  {
    id: 'ngo-microgrants',
    name: 'NGO Micro-Grants',
    title: 'NGO Micro-Grants Platforms',
    description: 'Transparent, efficient micro-grant distribution with on-chain accountability',
    position: { x: 400, y: 100 },
    color: '#FF5000',
    painPoints: [
      '25-35% of every dollar is lost to administrative overhead and audit costs',
      'Slow disbursement (months) and opaque selection process',
      'Donor trust declines because impact data are self-reported, not verifiable'
    ],
    solutions: [
      'On-chain treasury where every grant proposal, vote, and payment is publicly auditable',
      '"Circles" of reviewers stake reputation badges; smart-contracts release funds automatically when impact proofs are uploaded',
      'Platform charges 2% on incoming donations (vs > 15% typical NGO back-office)',
      'Reviewers earn governance tokens; unspent treasury earns yield in on-chain MMF to cover infra costs'
    ],
    businessModel: 'Platform charges 2% on incoming donations (vs > 15% typical NGO back-office). Reviewers earn governance tokens; unspent treasury earns yield in on-chain MMF to cover infra costs.',
    scenario: '"Latin-x Youth Climate Fund DAO" receives $1M from philanthropic LPs. Teachers submit micro-grant proposals (≤ $5k). Token-weighted voting by regional Circle finalizes winners in 72h; funds auto-stream. Field photos, GPS data, and receipts are hashed to IPFS → verifier oracles sign completion → next tranche releases. Average admin take falls below 4%.'
  },
  {
    id: 'creator-collectives',
    name: 'Creator Collectives',
    title: 'Creators / Fan Funding Collective',
    description: 'Decentralized creator funding with fan ownership and governance',
    position: { x: 700, y: 300 },
    color: '#0077C8',
    painPoints: [
      'Centralized platforms (Patreon) keep 8-12% + processing fees',
      'Creators are de-platform-able and have zero say in roadmap',
      'Fans get no upside beyond perks'
    ],
    solutions: [
      'Revenue flows into a shared DAO treasury; 0-2% protocol fee',
      'NFT or fungible "FAN" tokens give holders voting rights on which projects get green-lit',
      'Smart-contracts split income (sales, streaming, merch) instantly among creators & token holders',
      '2% swap fee each time $FAN trades on DEX'
    ],
    businessModel: '2% swap fee each time $FAN trades on DEX. 5% of merch revenue streams into DAO treasury (governs marketing spend). Treasury deploys idle funds in yield strategies voted by token holders to cover cloud/render costs.',
    scenario: '"Indie-Anime Collective DAO": 3 illustrators, 2 musicians, 1 animator. Fans buy $FAN at launch → treasury raises $250k. DAO votes on episode budgets, selects freelance storyboarders from talent pool DAO-to-DAO. When the series sells to a streamer, 80% of revenue auto-routes to contributors, 20% to token buy-back + treasury. Fans see token price appreciate and influence Season 2.'
  },
  {
    id: 'freelancer-ecosystem',
    name: 'Freelancer Ecosystem',
    title: 'Freelancer Ecosystem',
    description: 'Decentralized freelance marketplace with portable reputation and fair fees',
    position: { x: 400, y: 500 },
    color: '#FF5000',
    painPoints: [
      'Upwork deducts up to 20% from freelancer income until $10k/client is reached',
      'Disputes resolved unilaterally by the platform',
      'No portable reputation; each marketplace is a silo'
    ],
    solutions: [
      'Job escrow lives in a Hypha sub-DAO smart-contract; flat 3% protocol fee covers chain gas + governance pool',
      'Peer juries (random-selected badge holders) arbitrate disputes; jurors are slashed if vote against majority',
      'Reputation badge is an on-chain NFT: instantly verifiable across any DAO',
      'Optional subscription (20 USDC/mo) for premium analytics + AI proposal writer'
    ],
    businessModel: '3% fee on every escrow. Optional subscription (20 USDC/mo) for premium analytics + AI proposal writer. Jury pool earns split of dispute fees; staked governance token accrues value with platform volume.',
    scenario: '"DevGuild DAO" – 5,000 React & Solidity devs. A SaaS client posts bounty 5k USDC → escrow. Short-list Circle scores proposals; winner starts work. Code delivered, client signs hash, funds release within minutes. If disputed, 7-member jury rules in 48h. Effective cost to dev: 3% vs 20%. Reputation NFT boosts their rate in future gigs anywhere on-chain.'
  },
  {
    id: 'real-estate-dao',
    name: 'Real Estate DAO',
    title: 'Real-World-Asset (RWA) Property DAO – Fractional Ownership',
    description: 'Fractional real estate ownership with transparent governance and instant liquidity',
    position: { x: 100, y: 300 },
    color: '#0077C8',
    painPoints: [
      'Traditional real-estate syndicates have high minimums ($50k+), 6-8% acquisition & 2% management fees',
      'Cap-table updates require lawyers; secondary exit requires broker',
      'Small investors lack governance voice'
    ],
    solutions: [
      'Property SPV wrapped in Hypha DAO; ERC-20 "PROP" tokens represent pro-rata equity',
      'Token-gated votes approve budgets, refinancing, or sale',
      'Rental income distributed automatically each month to token holders',
      'Secondary liquidity on DEX 24/7'
    ],
    businessModel: '1% origination fee and 0.5% annual protocol fee (vs traditional 8%+2%). DAO treasury owns 2% PROP reserve; collects pro-rata rent to fund platform dev. Service providers (property manager, auditor) are paid in USDC via bounties approved by token vote.',
    scenario: '"Solar-Lofts DAO": 40-unit building valued $4M. Sponsor seeds 10% equity, sells 3.6M PROP tokens at $1 each to 900 global retail investors. DAO votes to install rooftop solar; smart-contract pays contractor drawdowns. Rent flows from Stripe → on-chain → holders weekly; tokens trade on RWA-DEX if someone wants to cash out same day (no 5-year lock-up).'
  }
];

export const roadmapData = [
  {
    id: '1',
    title: 'Q1 2024',
    phase: 'Foundation',
    items: [
      'Core DAO infrastructure development',
      'Smart contract security audits',
      'Initial community building',
      'Legal framework establishment'
    ],
    status: 'completed',
    startDate: '2024-01-01',
    endDate: '2024-03-31'
  },
  {
    id: '2',
    title: 'Q4 2025',
    phase: 'NGO Platform Launch',
    items: [
      'NGO micro-grants platform beta',
      'First pilot partnerships with climate organizations',
      'Governance token distribution',
      'Community onboarding programs'
    ],
    status: 'planned',
    startDate: '2025-10-01',
    endDate: '2025-12-31'
  },
  {
    id: '3',
    title: 'Q4 2025',
    phase: 'Creator Ecosystem',
    items: [
      'Creator collective tools launch',
      'Fan token mechanisms implementation',
      'Revenue sharing protocols',
      'Content creator partnerships'
    ],
    status: 'planned',
    startDate: '2025-10-01',
    endDate: '2025-12-31'
  },
  {
    id: '4',
    title: 'Q1 2026',
    phase: 'Freelancer Platform',
    items: [
      'Freelancer marketplace beta launch',
      'Reputation system implementation',
      'Dispute resolution mechanisms',
      'Developer community growth initiatives'
    ],
    status: 'planned',
    startDate: '2026-01-01',
    endDate: '2026-03-31'
  },
  {
    id: '5',
    title: 'Q2 2026',
    phase: 'Real Estate Integration',
    items: [
      'RWA tokenization platform launch',
      'Property DAO templates and tools',
      'Regulatory compliance framework',
      'Institutional partnership program'
    ],
    status: 'planned',
    startDate: '2026-04-01',
    endDate: '2026-06-30'
  },
  {
    id: '6',
    title: 'Q3 2026',
    phase: 'Spaces Feature Launch',
    items: [
      'Modular spaces system deployment',
      'Advanced proposal management tools',
      'Cross-platform integrations',
      'Community governance enhancements'
    ],
    status: 'planned',
    startDate: '2026-07-01',
    endDate: '2026-09-30'
  },
  {
    id: '7',
    title: 'Q4 2026',
    phase: 'Ecosystem Maturity',
    items: [
      'Advanced analytics dashboard',
      'AI-powered matching systems',
      'Global expansion initiatives',
      'Mobile application suite'
    ],
    status: 'planned',
    startDate: '2026-10-01',
    endDate: '2026-12-31'
  },
  {
    id: '8',
    title: 'Q1 2027',
    phase: 'Global Scale',
    items: [
      'Multi-chain deployment',
      'Enterprise partnership program',
      'Regulatory compliance worldwide',
      'Ecosystem sustainability initiatives'
    ],
    status: 'planned',
    startDate: '2027-01-01',
    endDate: '2027-03-31'
  }
];

export const teamData = {
  id: 'foundation',
  name: 'Hypha DAO Foundation',
  role: 'Decentralized Leadership',
  department: 'Executive',
  children: [
    {
      id: 'tech',
      name: 'Technology Circle',
      role: 'Technical Development',
      department: 'Engineering',
      children: [
        {
          id: 'blockchain',
          name: 'Blockchain Team',
          role: 'Smart Contract Development',
          department: 'Engineering'
        },
        {
          id: 'frontend',
          name: 'Frontend Team',
          role: 'User Interface Development',
          department: 'Engineering'
        },
        {
          id: 'security',
          name: 'Security Team',
          role: 'Security & Auditing',
          department: 'Engineering'
        },
        {
          id: 'devops',
          name: 'DevOps Team',
          role: 'Infrastructure & Deployment',
          department: 'Engineering'
        }
      ]
    },
    {
      id: 'community',
      name: 'Community Circle',
      role: 'Community & Partnerships',
      department: 'Operations',
      children: [
        {
          id: 'partnerships',
          name: 'Partnership Team',
          role: 'Strategic Partnerships',
          department: 'Operations'
        },
        {
          id: 'marketing',
          name: 'Marketing Team',
          role: 'Growth & Marketing',
          department: 'Operations'
        },
        {
          id: 'support',
          name: 'Community Support',
          role: 'User Support & Education',
          department: 'Operations'
        }
      ]
    },
    {
      id: 'governance',
      name: 'Governance Circle',
      role: 'DAO Governance',
      department: 'Governance',
      children: [
        {
          id: 'legal',
          name: 'Legal Team',
          role: 'Legal & Compliance',
          department: 'Governance'
        },
        {
          id: 'treasury',
          name: 'Treasury Team',
          role: 'Treasury Management',
          department: 'Governance'
        },
        {
          id: 'research',
          name: 'Research Team',
          role: 'Economic Research & Analysis',
          department: 'Governance'
        }
      ]
    }
  ]
};

export const hyphaAdvantages = [
  {
    title: 'Modular "Circle + Role + Badge" Framework',
    description: 'Each vertical can spin up fit-for-purpose governance without writing Solidity',
    icon: 'layers'
  },
  {
    title: 'Multi-Token Economy Built-In',
    description: 'Seamless separation of governance, utility, and reward tokens',
    icon: 'coins'
  },
  {
    title: 'Compliant Constitution & Legal Wrappers',
    description: 'Already drafted legal frameworks save months of legal work',
    icon: 'scale'
  },
  {
    title: 'DAO-to-DAO Interoperability',
    description: 'Four verticals can exchange labor, liquidity, and reputation from day one',
    icon: 'network'
  },
  {
    title: 'Battle-Tested UX',
    description: 'Non-technical stakeholders use a web app that feels like Slack + Trello',
    icon: 'users'
  }
];

export const ecosystemMetrics = {
  totalValueLocked: 2500000, // $2.5M
  activeDAOs: 150,
  communityMembers: 5000,
  successfulProjects: 300,
  averageFeeReduction: 85, // 85% reduction from traditional platforms
  processingTimeImprovement: 99, // 99% faster than traditional methods
  transparencyScore: 100, // 100% transparency
  globalAccessibility: 24 // 24/7 access
};

export const spacesData = {
  overview: {
    title: 'Modular Spaces System',
    description: 'Create purpose-built environments for specific types of proposals and governance activities',
    benefits: [
      'Customizable proposal workflows',
      'Specialized voting mechanisms',
      'Integrated discussion forums',
      'Automated execution protocols'
    ]
  },
  types: [
    {
      id: 'governance-space',
      name: 'Governance Space',
      description: 'For constitutional changes, treasury decisions, and strategic planning',
      features: ['Multi-stage voting', 'Quorum requirements', 'Time-locked execution'],
      color: '#8b5cf6'
    },
    {
      id: 'project-space',
      name: 'Project Space',
      description: 'For funding requests, milestone tracking, and project management',
      features: ['Budget allocation', 'Milestone voting', 'Progress tracking'],
      color: '#FF5000'
    },
    {
      id: 'community-space',
      name: 'Community Space',
      description: 'For general discussions, feedback collection, and community initiatives',
      features: ['Open discussions', 'Sentiment polling', 'Community rewards'],
      color: '#22c55e'
    },
    {
      id: 'technical-space',
      name: 'Technical Space',
      description: 'For protocol upgrades, security proposals, and technical decisions',
      features: ['Code review', 'Technical validation', 'Expert voting'],
      color: '#0077C8'
    }
  ]
};