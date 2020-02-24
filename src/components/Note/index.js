import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import './Note.scss';

const Note = ({ onActiveChange, className, ...props }) => {
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
      current.addEventListener('focus', enter);
      current.addEventListener('blur', leave);
    }

    return () => {
      if (current) {
        current.removeEventListener('focus', enter);
        current.removeEventListener('blur', leave);
      }
    };
  }, [ref, onActiveChange]);

  return (
    <textarea
      className={classnames('note', { editing }, className)}
      placeholder="备注"
      {...props}
      ref={ref}
    ></textarea>
  );
};

export default Note;
