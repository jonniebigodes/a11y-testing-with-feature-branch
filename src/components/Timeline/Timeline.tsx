import * as React from 'react'
import styled, { css } from 'styled-components'

export type TimelineOrientation = 'vertical' | 'horizontal'
export type TimelineAlign = 'left' | 'right' | 'alternate'
export type TimelineDotVariant = 'filled' | 'outlined'

export interface TimelineItemProps {
  /**
   * Unique identifier for the timeline item
   */
  id: string
  /**
   * Content to display
   */
  content: React.ReactNode
  /**
   * Optional date/title/label
   */
  title?: React.ReactNode
  /**
   * Custom dot element
   */
  dot?: React.ReactNode
  /**
   * Color of the timeline item dot
   */
  color?: string
  /**
   * Optional opposite content (for alternate view)
   */
  oppositeContent?: React.ReactNode
  /**
   * Whether this item is the active/current one
   */
  active?: boolean
  /**
   * Whether to disable the default connector
   */
  disableConnector?: boolean
  /**
   * Variant of the dot
   */
  dotVariant?: TimelineDotVariant
}

export interface TimelineProps {
  /**
   * Array of timeline items
   */
  items: TimelineItemProps[]
  /**
   * Orientation of the timeline
   */
  orientation?: TimelineOrientation
  /**
   * Alignment of the timeline
   */
  align?: TimelineAlign
  /**
   * Additional CSS class
   */
  className?: string
  /**
   * Color of the timeline
   */
  color?: string
  /**
   * Whether to reverse the items order
   */
  reverse?: boolean
  /**
   * Default dot variant
   */
  dotVariant?: TimelineDotVariant
  /**
   * Whether to animate on hover
   */
  animate?: boolean
}

const Container = styled.div<{
  orientation: TimelineOrientation
  reverse: boolean
}>`
  display: flex;
  flex-direction: ${({ orientation, reverse }) => {
    if (orientation === 'vertical') {
      return reverse ? 'column-reverse' : 'column'
    }
    return reverse ? 'row-reverse' : 'row'
  }};

  ${({ orientation }) =>
    orientation === 'horizontal' &&
    css`
      width: 100%;
      overflow-x: auto;
      padding: 16px 0;
    `}
`

const TimelineItem = styled.div<{
  orientation: TimelineOrientation
  align: TimelineAlign
  isLast: boolean
  active: boolean
  animate: boolean
}>`
  display: flex;
  position: relative;
  padding-bottom: ${({ orientation, isLast }) =>
    orientation === 'vertical' && !isLast ? '20px' : '0'};
  padding-right: ${({ orientation, isLast }) =>
    orientation === 'horizontal' && !isLast ? '20px' : '0'};
  flex: ${({ orientation }) => (orientation === 'horizontal' ? '1' : 'none')};
  min-width: ${({ orientation }) => (orientation === 'horizontal' ? '160px' : 'auto')};

  ${({ orientation, align }) =>
    orientation === 'vertical' &&
    align === 'alternate' &&
    css`
      flex-direction: row;

      &:nth-child(even) {
        flex-direction: row-reverse;

        .timeline-content-container {
          align-items: flex-end;
          margin-left: 0;
          margin-right: 16px;
          text-align: right;
        }

        .timeline-opposite-content {
          text-align: left;
          align-items: flex-start;
          margin-right: 0;
          margin-left: 16px;
        }
      }
    `}

  ${({ orientation, align }) =>
    orientation === 'vertical' &&
    align === 'right' &&
    css`
      flex-direction: row-reverse;

      .timeline-content-container {
        align-items: flex-end;
        margin-left: 0;
        margin-right: 16px;
        text-align: right;
      }

      .timeline-opposite-content {
        text-align: left;
        align-items: flex-start;
        margin-right: 0;
        margin-left: 16px;
      }
    `}
    
  ${({ active, animate }) =>
    animate &&
    css`
      &:hover {
        .timeline-dot {
          transform: scale(1.2);
        }

        .timeline-content-container {
          transform: translateY(-2px);
        }
      }

      ${active &&
      css`
        .timeline-dot {
          transform: scale(1.2);
        }
      `}
    `}
`

const TimelineConnector = styled.div<{
  orientation: TimelineOrientation
  color: string
  active: boolean
  isLast: boolean
}>`
  position: absolute;
  background-color: ${({ color }) => color};
  opacity: ${({ active }) => (active ? 1 : 0.4)};

  ${({ orientation, isLast }) =>
    orientation === 'vertical'
      ? css`
          width: 2px;
          bottom: 0;
          top: 18px;
          left: 7px;
          display: ${isLast ? 'none' : 'block'};
        `
      : css`
          height: 2px;
          right: 0;
          top: 7px;
          left: 18px;
          display: ${isLast ? 'none' : 'block'};
        `}
`

const TimelineDot = styled.div<{
  color: string
  active: boolean
  variant: TimelineDotVariant
  animate: boolean
}>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  flex-shrink: 0;
  z-index: 1;
  transition: ${({ animate }) => (animate ? 'transform 0.2s, box-shadow 0.2s' : 'none')};

  ${({ variant, color }) =>
    variant === 'filled'
      ? css`
          background-color: ${color};
          border: 2px solid ${color};
        `
      : css`
          background-color: #fff;
          border: 2px solid ${color};
        `}

  ${({ active }) =>
    active &&
    css`
      box-shadow: 0 0 0 4px rgba(0, 119, 204, 0.2);
    `}
`

const TimelineContentContainer = styled.div<{
  orientation: TimelineOrientation
  animate: boolean
}>`
  display: flex;
  flex-direction: column;
  margin-left: ${({ orientation }) => (orientation === 'vertical' ? '16px' : '0')};
  margin-top: ${({ orientation }) => (orientation === 'horizontal' ? '16px' : '0')};
  transition: ${({ animate }) => (animate ? 'transform 0.2s' : 'none')};
`

const TimelineOppositeContent = styled.div<{
  orientation: TimelineOrientation
}>`
  display: flex;
  flex-direction: column;
  margin-right: ${({ orientation }) => (orientation === 'vertical' ? '16px' : '0')};
  margin-top: ${({ orientation }) => (orientation === 'horizontal' ? '16px' : '0')};
  text-align: right;
  min-width: 80px;
  color: #757575;
`

const TimelineContent = styled.div<{
  active: boolean
}>`
  padding: 12px 16px;
  background-color: ${({ active }) => (active ? '#f5f9ff' : '#f5f5f5')};
  border-radius: 4px;
  border-left: ${({ active }) => (active ? '3px solid #0077cc' : 'none')};
`

const TimelineTitle = styled.div<{
  active: boolean
}>`
  font-weight: ${({ active }) => (active ? '600' : '500')};
  margin-bottom: 8px;
  color: ${({ active }) => (active ? '#0077cc' : '#333')};
`

export const Timeline: React.FC<TimelineProps> = ({
  items,
  orientation = 'vertical',
  align = 'left',
  className,
  color = '#0077cc',
  reverse = false,
  dotVariant = 'filled',
  animate = true,
}) => {
  // Validation - horizontal timeline can't have alternate alignment
  const finalAlign = orientation === 'horizontal' ? 'left' : align

  return (
    <Container className={className} orientation={orientation} reverse={reverse} role="img">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        const itemColor = item.color || color
        const itemDotVariant = item.dotVariant || dotVariant

        return (
          <TimelineItem
            key={item.id}
            orientation={orientation}
            align={finalAlign}
            isLast={isLast}
            active={!!item.active}
            animate={animate}
            role="article"
          >
            {finalAlign === 'alternate' && item.oppositeContent && orientation === 'vertical' && (
              <TimelineOppositeContent
                orientation={orientation}
                className="timeline-opposite-content"
              >
                {item.oppositeContent}
              </TimelineOppositeContent>
            )}

            <div>
              {item.dot ? (
                <div className="timeline-dot">{item.dot}</div>
              ) : (
                <TimelineDot
                  color={itemColor}
                  active={!!item.active}
                  variant={itemDotVariant}
                  animate={animate}
                  className="timeline-dot"
                />
              )}

              {!item.disableConnector && (
                <TimelineConnector
                  orientation={orientation}
                  color={itemColor}
                  active={!!item.active}
                  isLast={isLast}
                />
              )}
            </div>

            <TimelineContentContainer
              orientation={orientation}
              animate={animate}
              className="timeline-content-container"
            >
              {item.title && <TimelineTitle active={!!item.active}>{item.title}</TimelineTitle>}
              <TimelineContent active={!!item.active}>{item.content}</TimelineContent>
            </TimelineContentContainer>
          </TimelineItem>
        )
      })}
    </Container>
  )
}
