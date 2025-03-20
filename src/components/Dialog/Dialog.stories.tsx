import React, { useState } from 'react'
import { StoryObj, Meta } from '@storybook/react'
import { fn, userEvent, screen, within } from '@storybook/test'

import { Dialog } from './Dialog'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClose: fn(),
  },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

// Dialog with actions
export const WithActions: Story = {
  args: {
    open: true,
    title: 'Confirm Action',
    children: <p>Are you sure you want to proceed with this action?</p>,
    actions: (
      <>
        <button
          style={{
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: 'white',
            cursor: 'pointer',
          }}
        >
          Cancel
        </button>
        <button
          style={{
            padding: '8px 16px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Confirm
        </button>
      </>
    ),
  },
}

export const LargeDialog: Story = {
  args: {
    open: true,
    title: 'Large Dialog',
    children: (
      <div>
        <p>This is a large dialog with more content.</p>
        <p>It has multiple paragraphs to demonstrate the larger size.</p>
        <p>You can fit more content in a large dialog.</p>
      </div>
    ),
    size: 'large',
  },
}

/* export const FullscreenDialog: Story = {
  args: {
    open: true,
    title: 'Fullscreen Dialog',
    children: (
      <div style={{ padding: '20px' }}>
        <h3>Fullscreen Content</h3>
        <p>This dialog takes up the entire screen.</p>
        <p>It's useful for mobile views or when you need to display a lot of content.</p>
        <div
          style={{
            height: '200px',
            backgroundColor: '#f5f5f5',
            padding: '20px',
            marginTop: '20px',
          }}
        >
          <p>Additional content area</p>
        </div>
      </div>
    ),
    size: 'fullscreen',
  },
} */

// Dialog with long content (scrolling)
export const ScrollingContent: Story = {
  args: {
    open: true,
    title: 'Scrolling Content',
    children: (
      <div>
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>
            This is paragraph {i + 1}. It contains some text to demonstrate scrolling in the dialog.
          </p>
        ))}
      </div>
    ),
  },
}

// Dialog without close button
export const WithoutCloseButton: Story = {
  args: {
    open: true,
    title: 'No Close Button',
    children: <p>This dialog doesn't have a close button in the header.</p>,
    showCloseButton: false,
  },
}

// Interactive Dialog
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
export const InteractiveDialog: Story = {
  args: {
    open: false,
    children: <></>,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => {
      setIsOpen(false)
    }

    return (
      <div>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Open Dialog
        </button>

        <Dialog
          {...args}
          open={isOpen}
          onClose={handleClose}
          title="Interactive Dialog"
          actions={
            <>
              <button
                onClick={handleClose}
                style={{
                  padding: '8px 16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleClose}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#2196f3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Confirm
              </button>
            </>
          }
        >
          <p>This is an interactive dialog that you can open and close.</p>
        </Dialog>
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }))
  },
}

/* export const InteractiveDialogWithCloseButton: Story = {
  ...InteractiveDialog,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByRole('button', { name: 'Open Dialog' }))
    await sleep(2000)
    await userEvent.click(screen.getByRole('button', { name: 'Close' }))
  },
} */
