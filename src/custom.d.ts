declare module '*.svg?react' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// declare module '*.svg?react' {
//   import * as React from 'react';

//   const ReactComponent: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;

//   export default ReactComponent;
// }
