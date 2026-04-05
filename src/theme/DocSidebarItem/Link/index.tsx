import React, { type ReactNode } from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import type LinkType from '@theme/DocSidebarItem/Link';
import type { WrapperProps } from '@docusaurus/types';
import { useMobileSidebar } from '@site/src/theme/SidebarContext';
import { Highlight } from '@site/src/utils/highlight';

type Props = WrapperProps<typeof LinkType>;

export default function LinkWrapper(props: Props): ReactNode {
  const { searchQuery } = useMobileSidebar();

  // Create a version of the item with the label highlighted
  const itemWithHighlight = {
    ...props.item,
    label: <Highlight text={props.item.label} query={searchQuery} /> as unknown as string,
  };

  return (
    <>
      <Link {...props} item={itemWithHighlight} />
    </>
  );
}
