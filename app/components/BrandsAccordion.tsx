'use client';

import { useState } from 'react';
import FadeUp from './FadeUp';

export type BrandItem = {
  name: string;
  role: string;
  description: string;
};

type BrandsAccordionProps = {
  title: string;
  items: BrandItem[];
};

export default function BrandsAccordion({ title, items }: BrandsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <FadeUp className="brands-box">
      <div className="brands-title text-meta">{title}</div>

      <div className="brands-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.name}
              className={`brand-list-item ${isOpen ? 'is-open' : ''}`}
            >
              <button
                type="button"
                className="brand-header"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="brand-name">{item.name}</span>
                <span className="brand-icon">+</span>
              </button>

              <div className="brand-content-wrapper">
                <div className="brand-content">
                  <div className="brand-role text-meta">{item.role}</div>
                  <p className="brand-desc">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </FadeUp>
  );
}
