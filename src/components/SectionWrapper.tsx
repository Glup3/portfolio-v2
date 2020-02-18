import React from 'react';

interface SectionWrapperPropsType {
  id: string;
  center?: boolean;
  children: JSX.Element[] | JSX.Element;
}

const SectionWrapper = ({ id, children, center = false }: SectionWrapperPropsType) => {
  return (
    <section>
      <div className="block container">
        <div className={`scrollspy ${center && 'center'}`} id={id}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
