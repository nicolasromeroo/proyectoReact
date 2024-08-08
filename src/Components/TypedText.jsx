import React from 'react';
import Typed from 'typed.js';
import '../assets/styles/styles.css';

const TypedText = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ['Tu destino favorito.'],
      typeSpeed: 60,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: true,
      shuffle: false,
      backDelay: 2000,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      autoInsertCss: true,
      attr: null,
      bindInputFocusEvents: false,
      contentType: 'html',
      onBegin: (self) => {},
      onComplete: (self) => {},
      preStringTyped: (arrayPos, self) => {},
      onStringTyped: (arrayPos, self) => {},
      onLastStringBackspaced: (self) => {},
      onTypingPaused: (arrayPos, self) => {},
      onTypingResumed: (arrayPos, self) => {},
      onReset: (self) => {},
      onStop: (arrayPos, self) => {},
      onStart: (arrayPos, self) => {},
      onDestroy: (self) => {},
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typedContainer w-100">
      <span id="element" ref={el}></span>
    </div>
  );
};

export default TypedText;
