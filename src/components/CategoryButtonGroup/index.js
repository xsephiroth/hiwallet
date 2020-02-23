import React from 'react';
import CategoryButton from '../CategoryButton';
import './CategoryButtonGroup.scss';

const CategoryButtonGroup = ({ categoryId, categories, onChange }) => {
  return (
    <div className="category-button-group">
      {categories?.map(c => (
        <CategoryButton
          key={c.id}
          icon={c.icon}
          choice={c.id === categoryId}
          onClick={() => onChange?.(c.id)}
        >
          {c.name}
        </CategoryButton>
      ))}
    </div>
  );
};

export default CategoryButtonGroup;
