import React from 'react'
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../constants/data';

const CoreConcepts = () => {
    return (
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((item, index) => {
            return <CoreConcept key={index} {...item} />;
          })}
        </ul>
      </section>
    );
}

export default CoreConcepts