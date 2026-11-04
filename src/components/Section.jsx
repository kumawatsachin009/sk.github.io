import React from 'react';

const Section = ({ id, index, title, note, children }) => (
  <section id={id} className="section">
    <div className="wrap">
      <div className="section-head">
        <h2 className="section-title">
          <span className="section-index" aria-hidden="true">
            {index}
          </span>
          {title}
        </h2>
        {note ? <span className="section-note">{note}</span> : null}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
