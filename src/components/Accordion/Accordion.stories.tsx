import { StoryObj, Meta } from '@storybook/react'

import { Accordion, AccordionItem } from './Accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof Accordion>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Section 1">
        <p>Content for section 1</p>
      </AccordionItem>
      <AccordionItem title="Section 2">
        <p>Content for section 2</p>
      </AccordionItem>
      <AccordionItem title="Section 3">
        <p>Content for section 3</p>
      </AccordionItem>
    </Accordion>
  ),
}

export const SingleItem: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Single Section">
        <p>This is a single accordion item</p>
      </AccordionItem>
    </Accordion>
  ),
}

export const InitiallyOpen: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Section 1 (Initially Closed)">
        <p>This section starts closed</p>
      </AccordionItem>
      <AccordionItem title="Section 2 (Initially Open)" initiallyOpen>
        <p>This section starts open</p>
      </AccordionItem>
      <AccordionItem title="Section 3 (Initially Closed)">
        <p>This section starts closed</p>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithLongContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Long Content">
        <div>
          <p>
            This accordion item has a lot of content to demonstrate scrolling and expansion
            behavior.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
            ultricies aliquam, nunc nisl aliquet nunc, euismod aliquam nisl nunc euismod nisl.
            Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, euismod aliquam
            nisl nunc euismod nisl.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
            ultricies aliquam, nunc nisl aliquet nunc, euismod aliquam nisl nunc euismod nisl.
            Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, euismod aliquam
            nisl nunc euismod nisl.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
            ultricies aliquam, nunc nisl aliquet nunc, euismod aliquam nisl nunc euismod nisl.
            Nullam euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, euismod aliquam
            nisl nunc euismod nisl.
          </p>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithNestedContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Nested Content">
        <div>
          <h4>Subsection Title</h4>
          <p>Some text in a subsection</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <h4>Another Subsection</h4>
          <p>More content in another subsection</p>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithHTMLContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="HTML Content">
        <div>
          <h3>HTML Content</h3>
          <p>
            This accordion contains <strong>HTML content</strong> with <em>formatting</em>.
          </p>
          <div style={{ backgroundColor: '#f0f0f0', padding: '10px', borderRadius: '5px' }}>
            <code>const example = "This is a code block";</code>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithImages: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Images">
        <div>
          <p>This accordion contains images:</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <div
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: '#e0e0e0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Image Placeholder
            </div>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithCustomStyling: Story = {
  render: () => (
    <div style={{ maxWidth: '400px' }}>
      <Accordion>
        <AccordionItem title="Custom Styled Section">
          <div style={{ padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
            <p>This content has custom styling applied to it.</p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}

export const WithTableContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Table Content">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Age</th>
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>John Doe</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>32</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>New York</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>Jane Smith</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>27</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>London</td>
            </tr>
          </tbody>
        </table>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithFormContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Form Content" initiallyOpen>
        <form>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
            <input
              type="email"
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            />
          </div>
          <button
            type="button"
            style={{
              padding: '8px 16px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
        </form>
      </AccordionItem>
    </Accordion>
  ),
}

export const LongTitles: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="This is a very long accordion title that should demonstrate how the component handles long titles and potentially wraps them onto multiple lines if necessary">
        <p>Content for the long title section</p>
      </AccordionItem>
      <AccordionItem title="Another long title to demonstrate consistent behavior across multiple accordion items with lengthy headers">
        <p>Content for the second long title section</p>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithCallbacks: Story = {
  render: () => (
    <Accordion>
      <AccordionItem
        title="With Toggle Callback"
        onToggle={(isOpen) => console.log(`Accordion toggled: ${isOpen ? 'opened' : 'closed'}`)}
      >
        <p>Check the console when toggling this accordion</p>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithInteractiveContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Interactive Content">
        <div>
          <p>Click the button:</p>
          <button
            onClick={() => alert('Button clicked inside accordion!')}
            style={{
              padding: '8px 16px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Click Me
          </button>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}

export const WithLinks: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Links" initiallyOpen>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ margin: '10px 0' }}>
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }} aria-hidden="true">
              Link 1
            </a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }} aria-hidden="true">
              Link 2
            </a>
          </li>
          <li style={{ margin: '10px 0' }}>
            <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }} aria-hidden="true">
              Link 3
            </a>
          </li>
        </ul>
      </AccordionItem>
    </Accordion>
  ),
}

export const InDifferentSizes: Story = {
  render: () => (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <h4>Small Width</h4>
        <div style={{ maxWidth: '200px' }}>
          <Accordion>
            <AccordionItem title="Small Width">
              <p>Content in a small width container</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h4>Medium Width</h4>
        <div style={{ maxWidth: '400px' }}>
          <Accordion>
            <AccordionItem title="Medium Width">
              <p>Content in a medium width container</p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div>
        <h4>Full Width</h4>
        <Accordion>
          <AccordionItem title="Full Width">
            <p>Content in a full width container</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  ),
}

export const InDarkTheme: Story = {
  render: () => (
    <div style={{ backgroundColor: '#333', padding: '20px' }}>
      <Accordion>
        <AccordionItem title="Dark Theme Section">
          <div style={{ color: 'white' }}>
            <p>This is content on a dark background.</p>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
}

export const WithIconsInContent: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="Content with Icons">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', color: '#4CAF50' }}>✓</div>
            <p style={{ margin: 0 }}>This is a completed item</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px', color: '#f44336' }}>✗</div>
            <p style={{ margin: 0 }}>This is a failed item</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '10px', color: '#2196F3' }}>ℹ</div>
            <p style={{ margin: 0 }}>This is an info item</p>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}
