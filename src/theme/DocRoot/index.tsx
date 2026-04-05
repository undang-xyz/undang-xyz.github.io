import React, { type ReactNode } from 'react';
import DocRoot from '@theme-original/DocRoot';
import type DocRootType from '@theme/DocRoot';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof DocRootType>;

const HIDE_NAVBAR_STYLE = `
  .navbar, .announcementBar {
    display: none !important;
    height: 0 !important;
    min-height: 0 !important;
    overflow: hidden !important;
    pointer-events: none !important;
  }
  .main-wrapper {
    padding-top: 0 !important;
  }
`;

export default function DocRootWrapper(props: Props): ReactNode {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: HIDE_NAVBAR_STYLE }} />
            <DocRoot {...props} />
        </>
    );
}
