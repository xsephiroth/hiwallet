import React, { useEffect, useRef } from 'react';
import './Note.scss';

const Note = ({ onActiveChange, ...props }) => {
  const ref = useRef();
  useEffect(() => {
    const current = ref.current;

    const enter = () => onActiveChange && onActiveChange(true);
    const leave = () => onActiveChange && onActiveChange(false);

    if (current) {
      current.addEventListener('mouseenter', enter);
      current.addEventListener('mouseleave', leave);
    }

    return () => {
      if (current) {
        current.removeEventListener('mouseenter', enter);
        current.removeEventListener('mouseleave', leave);
      }
    };
  }, [ref, onActiveChange]);

  return (
    <textarea
      className="note"
      placeholder="备注"
      {...props}
      ref={ref}
    ></textarea>
  );
};

export default Note;
