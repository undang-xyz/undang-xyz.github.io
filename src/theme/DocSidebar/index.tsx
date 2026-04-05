import React, { type ReactNode, useEffect } from 'react';
import DocSidebar from '@theme-original/DocSidebar';
import type DocSidebarType from '@theme/DocSidebar';
import type { WrapperProps } from '@docusaurus/types';
import { useMobileSidebar } from '@site/src/theme/SidebarContext';

type Props = WrapperProps<typeof DocSidebarType>;

export default function DocSidebarWrapper(props: Props): ReactNode {
  const { setItems } = useMobileSidebar();

  useEffect(() => {
    if (props.sidebar) {
      setItems(props.sidebar);
    }
  }, [props.sidebar, setItems]);

  return (
    <>
      <DocSidebar {...props} />
    </>
  );
}
