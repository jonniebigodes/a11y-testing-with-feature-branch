import * as React from 'react'
import styled, { css } from 'styled-components'

import { Icon } from '../Icon'

const AccordionContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
`

const AccordionItemContainer = styled.div(
  ({ theme: { borderRadius } }) => css`
    border: 1px solid #e0e0e0;
    border-radius: ${borderRadius.xs};
    margin-bottom: 8px;
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }
  `
)

const AccordionHeader = styled.button<{ isOpen: boolean }>(
  ({ isOpen }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px;
    background-color: ${isOpen ? '#f5f5f5' : 'white'};
    border: none;
    cursor: pointer;
    text-align: left;
    font-weight: 600;
    font-size: 16px;

    &:hover {
      background-color: #f5f5f5;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #c0c0c0;
    }
  `
)

const AccordionIcon = styled.div<{ isOpen: boolean }>`
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  display: flex;
  align-items: center;
`

const AccordionContent = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? '16px' : '0 16px')};
  max-height: ${({ isOpen }) => (isOpen ? '1000px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: white;
  border-top: ${({ isOpen }) => (isOpen ? '1px solid #e0e0e0' : 'none')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
`

type AccordionItemProps = {
  /**
   * Title of the accordion item
   */
  title: string
  /**
   * Content of the accordion item
   */
  children: React.ReactNode
  /**
   * Whether the accordion item is initially open
   */
  initiallyOpen?: boolean
  /**
   * Callback when accordion is toggled
   */
  onToggle?: (isOpen: boolean) => void
}

/**
 * Accordion Item component to be used inside Accordion
 */
export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  initiallyOpen = false,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = React.useState(initiallyOpen)

  const handleToggle = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    if (onToggle) {
      onToggle(newIsOpen)
    }
  }

  return (
    <AccordionItemContainer>
      <AccordionHeader
        isOpen={isOpen}
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {title}
        <AccordionIcon isOpen={isOpen}>
          <Icon name="chevron-down" size={16} />
        </AccordionIcon>
      </AccordionHeader>
      <AccordionContent
        isOpen={isOpen}
        id={`accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        {children}
      </AccordionContent>
    </AccordionItemContainer>
  )
}

type AccordionProps = {
  /**
   * Children must be AccordionItem components
   */
  children: React.ReactNode
  /**
   * Allow multiple items to be open at once
   */
  allowMultiple?: boolean
}

/**
 * Accordion component for displaying collapsible content panels
 */
export const Accordion: React.FC<AccordionProps> = ({ children, allowMultiple = false }) => {
  return <AccordionContainer>{children}</AccordionContainer>
}
