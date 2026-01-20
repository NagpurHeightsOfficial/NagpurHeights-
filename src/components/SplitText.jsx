'use client';

import {
  useEffect,
  useRef,
  useState,
  createElement,
  useMemo,
  useCallback
} from 'react';
import { gsap } from 'gsap';
import './TextType.css';

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = false, // 🔒 DEFAULT FALSE
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const [hasCompleted, setHasCompleted] = useState(false); // ✅ NEW

  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const textArray = useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return;
    return textColors[currentTextIndex % textColors.length];
  };

  /* -----------------------------------------
     VISIBILITY OBSERVER
  ------------------------------------------ */
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  /* -----------------------------------------
     CURSOR BLINK (STOPS AFTER COMPLETE)
  ------------------------------------------ */
  useEffect(() => {
    if (!showCursor || !cursorRef.current || hasCompleted) return;

    gsap.set(cursorRef.current, { opacity: 1 });
    gsap.to(cursorRef.current, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    return () => gsap.killTweensOf(cursorRef.current);
  }, [showCursor, cursorBlinkDuration, hasCompleted]);

  /* -----------------------------------------
     TYPING LOGIC (RUNS ONLY ONCE)
  ------------------------------------------ */
  useEffect(() => {
    if (!isVisible || hasCompleted) return;

    let timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode
      ? currentText.split('').reverse().join('')
      : currentText;

    if (currentCharIndex < processedText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + processedText[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
      }, variableSpeed ? getRandomSpeed() : typingSpeed);
    } else {
      // ✅ Typing finished — HARD STOP
      setHasCompleted(true);

      if (onSentenceComplete) {
        onSentenceComplete(currentText, currentTextIndex);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    isVisible,
    typingSpeed,
    textArray,
    currentTextIndex,
    reverseMode,
    variableSpeed,
    getRandomSpeed,
    hasCompleted,
    onSentenceComplete
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && !hasCompleted;

  return createElement(
    Component,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...props
    },
    <span
      className="text-type__content"
      style={{ color: getCurrentTextColor() || 'inherit' }}
    >
      {displayedText}
    </span>,
    showCursor && (
      <span
        ref={cursorRef}
        className={`text-type__cursor ${cursorClassName} ${
          shouldHideCursor ? 'text-type__cursor--hidden' : ''
        }`}
      >
        {cursorCharacter}
      </span>
    )
  );
};

export default TextType;
