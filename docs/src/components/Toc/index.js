import React from 'react';
import './style.scss';

function Toc({ headings, location }) {
  return (
    <div className="Main__Toc row">
      {headings.map(({ depth, value }, idx) => {
        const key = encodeURIComponent(value);
        const isCurrent = location.hash && location.hash.includes(key);
        return (
          <div key={idx} className={`Main__Toc--li${depth}`}>
            <a href={`#${key}`} className={`${isCurrent ? 'current' : ''}`}>
              {value}
            </a>
          </div>
        )
      })}
    </div>
  );
}

export default Toc;