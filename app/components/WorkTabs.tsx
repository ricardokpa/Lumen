'use client';

import { useState } from 'react';
import ContactModal from './ContactModal';
import FadeUp from './FadeUp';

export type WorkTab = {
  id: string;
  label: string;
  srTitle: string;
  description: string;
  ctaLabel: string;
};

type WorkTabsProps = {
  tabs: WorkTab[];
  formAction: string;
};

export default function WorkTabs({ tabs, formAction }: WorkTabsProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState('New Inquiry from Work Together page');

  return (
    <>
      <FadeUp delay={1} className="tabs-list" role="tablist" aria-label="Client Categories">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={`tab-btn-${tab.id}`}
            className={`cta-bracket text-meta ${activeId === tab.id ? 'is-active' : ''}`}
            role="tab"
            aria-selected={activeId === tab.id}
            aria-controls={`tab-${tab.id}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </FadeUp>

      <FadeUp delay={2} className="tabs-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${activeId === tab.id ? 'is-active' : ''}`}
            id={`tab-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-btn-${tab.id}`}
          >
            <h2 className="sr-only">{tab.srTitle}</h2>
            <p className="text-body-large">{tab.description}</p>
            <button
              type="button"
              className="cta-bracket text-meta"
              aria-label={`Start a conversation about ${tab.label.toLowerCase()}`}
              onClick={() => {
                setModalSubject(`New Inquiry (${tab.label}) from Work Together page`);
                setIsModalOpen(true);
              }}
            >
              {tab.ctaLabel}
            </button>
          </div>
        ))}
      </FadeUp>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formAction={formAction}
        subject={modalSubject}
      />
    </>
  );
}