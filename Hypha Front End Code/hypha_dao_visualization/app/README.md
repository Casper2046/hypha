# Hypha DAO Ecosystem Visualization

An interactive NextJS web application that visualizes the Hypha DAO flywheel ecosystem, featuring clickable sectors for NGO micro-grants, creator collectives, freelancers, and real estate DAOs.

## Features

- **Interactive Flywheel Diagram**: Central visualization with clickable sectors using React Flow
- **Comprehensive Navigation**: Overview, Use Cases, Pain Points, Solutions, Roadmap, and Org Chart views
- **Detailed Sector Pages**: Individual pages for each flywheel sector with pain points, solutions, and example flows
- **Responsive Design**: Optimized for desktop and mobile devices
- **Verida Branding**: Consistent use of #FF5000 (orange) and #0077C8 (blue) color scheme
- **Interactive Visualizations**: Animated components with scroll-triggered animations
- **Dark/Light Mode Support**: System-aware theme switching

## Technology Stack

- **Framework**: NextJS 14 with React 18
- **Styling**: Tailwind CSS with custom Verida branding
- **Animations**: Framer Motion with scroll-triggered effects
- **Visualizations**: React Flow for interactive diagrams
- **Database**: Prisma with PostgreSQL
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hypha-dao-ecosystem
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and add your database URL:
```
DATABASE_URL="postgresql://username:password@localhost:5432/hypha_dao"
```

4. Set up the database:
```bash
npm run db:push
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # NextJS app directory
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with navigation
│   ├── page.tsx           # Homepage with flywheel
│   ├── use-cases/         # Use cases overview page
│   ├── pain-points/       # Industry pain points page
│   ├── solutions/         # Blockchain solutions page
│   ├── roadmap/           # Development roadmap page
│   ├── org-chart/         # Organization structure page
│   └── sectors/[id]/      # Dynamic sector detail pages
├── components/            # Reusable React components
│   ├── ui/               # Base UI components
│   ├── flywheel-diagram.tsx  # Interactive flywheel visualization
│   ├── navigation.tsx     # Sticky header navigation
│   ├── roadmap-timeline.tsx  # Timeline component
│   └── org-chart.tsx      # Organization chart
├── lib/                   # Utility functions and data
│   ├── data.ts           # Static data for sectors and roadmap
│   └── utils.ts          # Helper functions
├── prisma/               # Database schema and migrations
│   └── schema.prisma     # Database schema definition
└── public/               # Static assets
```

## Key Components

### Flywheel Diagram
The central interactive visualization built with React Flow, featuring:
- Clickable sector nodes with hover effects
- Animated connections between sectors
- Responsive layout that adapts to screen size
- Custom styling matching Verida branding

### Navigation
Sticky header with:
- Responsive design for mobile and desktop
- Active state indicators
- Smooth transitions and hover effects
- Mobile hamburger menu

### Sector Pages
Dynamic pages for each sector including:
- Pain points analysis
- Blockchain solutions
- Business model explanation
- Real-world implementation scenarios

### Roadmap Timeline
Interactive timeline showing:
- Development phases with status indicators
- Detailed milestone descriptions
- Progress tracking with visual indicators
- Responsive design for all devices

## Customization

### Branding
The application uses Verida's brand colors defined in `tailwind.config.ts`:
- Primary Orange: `#FF5000`
- Secondary Blue: `#0077C8`
- Dark Blue: `#003366`

### Data Management
Sector data, roadmap items, and team information are managed in `lib/data.ts` for easy editing without code changes.

### Animations
Scroll-triggered animations are implemented using Framer Motion and React Intersection Observer for smooth, performant user experiences.

## Database Schema

The application uses Prisma with the following main entities:
- **Sectors**: Flywheel sector information
- **RoadmapItems**: Development timeline data
- **TeamMembers**: Organization structure data

## Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables
Ensure the following environment variables are set in production:
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Authentication secret (if auth is added)
- `NEXTAUTH_URL`: Application URL (if auth is added)

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For questions or support, please contact the Hypha DAO development team or create an issue in the repository.