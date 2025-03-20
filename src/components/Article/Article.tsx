import React, { useState } from 'react'
import styled from 'styled-components'

const ArticleContainer = styled.div<{ isClipped: boolean }>`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  overflow: ${(props) => (props.isClipped ? 'clip' : 'visible')};
  position: relative;
  max-height: ${(props) => (props.isClipped ? '400px' : 'none')};
`

const ArticleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  color: #666;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`

interface ArticleContentProps {
  isClipped: boolean
}

const ArticleContent = styled.div<ArticleContentProps>`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #888;
  text-align: justify;
  position: relative;
  min-height: ${(props) => (props.isClipped ? '300px' : 'auto')};
`

const DecorativeImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #ff6b6b;
`

const DecorativeDiv = styled.div`
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  opacity: 0.1;
  z-index: -1;
`

const ReadMoreButton = styled.button`
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  transition: background-color 0.2s ease;

  &:hover {
    background: #ff5252;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #ff6b6b;
  }
`

const HiddenContent = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`

export const Article: React.FC<{}> = ({}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleReadMore = () => {
    setIsExpanded(true)
  }

  return (
    <ArticleContainer isClipped={isExpanded}>
      <ArticleHeader>
        <ArticleTitle>Understanding Web Accessibility</ArticleTitle>
        <DecorativeImage src="https://picsum.photos/200" alt="" />
      </ArticleHeader>

      <DecorativeDiv />

      <ArticleContent isClipped={isExpanded}>
        <p>
          Web accessibility is crucial for creating an inclusive digital environment. It ensures
          that websites and web applications are usable by people with various disabilities,
          including visual, auditory, physical, speech, cognitive, and neurological disabilities.
        </p>

        <p>
          The Web Content Accessibility Guidelines (WCAG) provide a comprehensive set of
          recommendations for making web content more accessible. These guidelines are organized
          into four main principles: Perceivable, Operable, Understandable, and Robust (POUR).
        </p>

        <p>
          Common accessibility features include proper heading structure, alternative text for
          images, keyboard navigation support, sufficient color contrast, and screen reader
          compatibility. However, many websites still fail to implement these basic accessibility
          requirements.
        </p>

        <HiddenContent isVisible={isExpanded}>
          <p>
            Developers should prioritize accessibility from the start of their projects. This
            includes using semantic HTML elements, providing proper ARIA attributes when necessary,
            and testing with assistive technologies. Regular accessibility audits and user testing
            with people with disabilities can help identify and address accessibility issues.
          </p>

          <p>
            The benefits of accessible web design extend beyond compliance with legal requirements.
            Accessible websites often provide a better user experience for all users, including
            those without disabilities. They tend to be more maintainable, have better SEO
            performance, and reach a broader audience.
          </p>
        </HiddenContent>

        {!isExpanded && (
          <ReadMoreButton
            onClick={handleReadMore}
            aria-expanded={isExpanded}
            aria-controls="hidden-content"
          >
            Read More
          </ReadMoreButton>
        )}
      </ArticleContent>
    </ArticleContainer>
  )
}
