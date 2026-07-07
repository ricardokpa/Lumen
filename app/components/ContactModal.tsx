'use client';

import { useEffect } from 'react';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  formAction: string;
  subject?: string;
};

export default function ContactModal({
  isOpen,
  onClose,
  formAction,
  subject = 'New Inquiry',
}: ContactModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      className={`modal-overlay ${isOpen ? 'is-open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-content">
        <button type="button" className="cta-bracket text-meta modal-close" onClick={onClose}>
          Close
        </button>

        <h2 className="modal-title">Let&apos;s Talk</h2>

        <form action={formAction} method="POST">
          <input type="hidden" name="_subject" value={subject} />

          <div className="form-group">
            <label htmlFor="name" className="text-meta">
              Name
            </label>
            <input type="text" id="name" name="name" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="text-meta">
              Email
            </label>
            <input type="email" id="email" name="email" className="form-input" required />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="text-meta">
              Message
            </label>
            <textarea id="message" name="message" className="form-textarea" required />
          </div>

          <button type="submit" className="cta-bracket text-meta">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
