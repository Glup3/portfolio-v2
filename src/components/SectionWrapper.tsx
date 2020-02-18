import React from 'react';
import styled from 'styled-components';

interface SectionWrapperPropsType {
  id: string;
  center?: boolean;
  children: JSX.Element[] | JSX.Element;
}

const SectionContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionWrapper = ({ id, children, center = false }: SectionWrapperPropsType) => {
  return (
    <section>
      <SectionContainer className="container">
        <div className={`scrollspy ${center && 'center'}`} id={id}>
          {children}
        </div>
      </SectionContainer>
    </section>
  );
};

export default SectionWrapper;
