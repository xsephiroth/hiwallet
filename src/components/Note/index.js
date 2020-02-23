import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './Note.scss';

const Note = ({ onActiveChange, ...props }) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const current = ref.current;

    const enter = () => {
      setEditing(true);
      onActiveChange && onActiveChange(true);
    };
    const leave = () => {
      setEditing(false);
      onActiveChange && onActiveChange(false);
    };

    if (current) {
      current.addEventListener('mouseenter', enter);
      current.addEventListener('focus', enter);

      current.addEventListener('mouseleave', leave);
      current.addEventListener('blur', leave);
    }

    return () => {
      if (current) {
        current.removeEventListener('mouseenter', enter);
        current.removeEventListener('focus', enter);

        current.removeEventListener('mouseleave', leave);
        current.removeEventListener('blur', leave);
      }
    };
  }, [ref, onActiveChange]);

  return (
    <textarea
      // className="note"
      className={classnames('note', { editing })}
      placeholder="备注"
      {...props}
      ref={ref}
    ></textarea>
  );
};

export default Note;
