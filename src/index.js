import { useState, useEffect } from 'react';
require('intersection-observer');
 /**
  * Watch visibility of given element 
  * @watchElement element string name
  */
export default (watchElement) => {
  const [isVisible, setVisibility] = useState(false);
  let element;

  useEffect(() => {
    element = document.querySelector(watchElement);
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(handleObserverUpdate);
    observer.observe(element);
    return function cleanup() {
      observer.unobserve(element);
      setVisibility(false);
    };
  }, []);

  function handleObserverUpdate(entries) {
    const ent = entries[0];
    if (ent.isIntersecting) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }

  return isVisible;
}