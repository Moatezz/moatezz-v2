import { useEffect, useState } from 'react';
import { contact } from '../../portfolio';
import './Contact.css';

const Contact = () => {
  if (!contact.email) return null;
  const [state, setState] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setState(false);
    }, 1000);
    if (state) {
      return timer;
    }
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return (
    <section className="section contact center" id="contact">
      <h2 className="section__title">Contact</h2>
      <p className="section__description" style={{ marginBottom: 34 }}>
        moatezzchabane@gmail.com
      </p>
      <a
        href={`mailto:${contact.email}`}
        onClick={() => {
          setState(true);
          navigator.clipboard.writeText('moatezzchabane@gmail.com');
        }}
      >
        <span
          type="button"
          className="btn btn--outline"
          style={{
            // cool animation
            transform: state ? 'translateY(0)' : 'translateY(10px)',
            // cool expanding animation
            transition: 'transform 1s ease-in-out',
          }}
        >
          {state ? 'Copied to clipboard' : 'Email me'}
        </span>
      </a>
    </section>
  );
};

export default Contact;
