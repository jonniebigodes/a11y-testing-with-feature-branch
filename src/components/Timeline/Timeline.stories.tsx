import { StoryObj, Meta } from '@storybook/react'
import { useState } from 'react'

import { Timeline, TimelineItemProps } from './Timeline'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Timeline>
export default meta

type Story = StoryObj<typeof meta>

// Basic timeline items
const basicItems: TimelineItemProps[] = [
  {
    id: '1',
    title: 'Order Placed',
    content: 'Your order has been placed successfully',
    active: true,
  },
  {
    id: '2',
    title: 'Processing',
    content: 'Your order is being processed',
  },
  {
    id: '3',
    title: 'Shipped',
    content: 'Your order has been shipped',
  },
  {
    id: '4',
    title: 'Delivered',
    content: 'Your order has been delivered',
  },
]

// Items with dates
const itemsWithDates: TimelineItemProps[] = [
  {
    id: '1',
    title: 'January 2023',
    content: 'Started new position at Company XYZ',
    oppositeContent: '01/01/2023',
    active: true,
  },
  {
    id: '2',
    title: 'March 2023',
    content: 'Completed first major project',
    oppositeContent: '03/15/2023',
  },
  {
    id: '3',
    title: 'May 2023',
    content: 'Received recognition award',
    oppositeContent: '05/22/2023',
  },
  {
    id: '4',
    title: 'September 2023',
    content: 'Promoted to Senior Position',
    oppositeContent: '09/01/2023',
  },
]

// Longer timeline
const longTimelineItems: TimelineItemProps[] = [
  {
    id: '1',
    title: 'Task Created',
    content: 'Task was created by Admin',
    oppositeContent: '9:30 AM',
  },
  {
    id: '2',
    title: 'Task Assigned',
    content: 'Task was assigned to Developer',
    oppositeContent: '10:00 AM',
  },
  {
    id: '3',
    title: 'Development Started',
    content: 'Developer started working on the task',
    oppositeContent: '11:30 AM',
    active: true,
  },
  {
    id: '4',
    title: 'Code Review',
    content: 'Code is pending review',
    oppositeContent: 'Upcoming',
  },
  {
    id: '5',
    title: 'QA Testing',
    content: 'Quality assurance testing',
    oppositeContent: 'Upcoming',
  },
  {
    id: '6',
    title: 'Deployment',
    content: 'Deploy to production',
    oppositeContent: 'Upcoming',
  },
]

// Custom styled items
const coloredItems: TimelineItemProps[] = [
  {
    id: '1',
    title: 'Step 1',
    content: 'First step completed',
    color: '#8bc34a', // Green
    active: true,
  },
  {
    id: '2',
    title: 'Step 2',
    content: 'Second step in progress',
    color: '#2196f3', // Blue
  },
  {
    id: '3',
    title: 'Step 3',
    content: 'Third step pending',
    color: '#ff9800', // Orange
  },
  {
    id: '4',
    title: 'Step 4',
    content: 'Final step pending',
    color: '#f44336', // Red
  },
]

// Basic vertical timeline (default)
export const Default: Story = {
  args: {
    items: basicItems,
  },
}

// Interactive timeline
export const InteractiveTimeline: Story = {
  args: {
    items: basicItems,
  },
  render: (args) => {
    const [activeStep, setActiveStep] = useState(0)

    const items = args.items.map((item, index) => ({
      ...item,
      active: index === activeStep,
    }))

    return (
      <div>
        <Timeline {...args} items={items} />
        <div style={{ marginTop: '24px', display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            style={{
              padding: '8px 16px',
              backgroundColor: activeStep === 0 ? '#e0e0e0' : '#2196f3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: activeStep === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            Previous Step
          </button>
          <button
            onClick={() => setActiveStep(Math.min(items.length - 1, activeStep + 1))}
            disabled={activeStep === items.length - 1}
            style={{
              padding: '8px 16px',
              backgroundColor: activeStep === items.length - 1 ? '#e0e0e0' : '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: activeStep === items.length - 1 ? 'not-allowed' : 'pointer',
            }}
          >
            Next Step
          </button>
        </div>
      </div>
    )
  },
}

// Different dot variants combined
export const MixedDotVariants: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'Step 1',
        content: 'Completed with filled dot',
        dotVariant: 'filled',
        active: true,
      },
      {
        id: '2',
        title: 'Step 2',
        content: 'Upcoming with outlined dot',
        dotVariant: 'outlined',
      },
      {
        id: '3',
        title: 'Step 3',
        content: 'Pending with filled dot',
        dotVariant: 'filled',
      },
    ],
  },
}

// Dark themed timeline
export const DarkTheme: Story = {
  args: {
    items: basicItems,
    color: '#bb86fc', // Purple accent
  },
  render: (args) => (
    <div
      style={{
        backgroundColor: '#121212',
        color: '#ffffff',
        padding: '24px',
        borderRadius: '8px',
      }}
    >
      <Timeline {...args} />
    </div>
  ),
}

// Responsive timeline that changes orientation
export const ResponsiveTimeline: Story = {
  args: {
    items: basicItems,
  },
  render: (args) => {
    const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical')

    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ marginRight: '8px' }}>Timeline Orientation:</label>
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value as 'vertical' | 'horizontal')}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="vertical">Vertical</option>
            <option value="horizontal">Horizontal</option>
          </select>
        </div>
        <Timeline {...args} orientation={orientation} />
      </div>
    )
  },
}
