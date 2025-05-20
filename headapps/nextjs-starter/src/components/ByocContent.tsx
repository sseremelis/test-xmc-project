import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface ByocContentProps {
  title: string;
  label?: string;
}

export const ByocContent = (props: ByocContentProps): JSX.Element => {
  return (
    <div className="container">
      <h2>{props.title || 'BYOC Demo'}</h2>
      <p>ByocContent Component</p>
      <div>{props.title}</div>
      <div>{props.label}</div>
    </div>
  );
};

FEAAS.External.registerComponent(ByocContent, {
  name: 'ByocContent',
  definitions: {
    complex: {
      type: 'object',
      properties: {
        label: { type: 'string' },
        href: { type: 'string' },
      },
    },
  },
  properties: {
    title: {
      type: 'string',
    },
    label: {
      type: 'string',
    },
  },
});
