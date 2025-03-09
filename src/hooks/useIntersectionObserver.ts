import { useEffect, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  target: string; // CSS selector string for querySelector
}

const useIntersectionObserver = (options: IntersectionObserverOptions): boolean => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);

    const element: Element | null = document.querySelector(options.target);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return isVisible;
};

export default useIntersectionObserver;