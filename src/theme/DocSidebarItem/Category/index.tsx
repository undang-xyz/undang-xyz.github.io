import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import { useMobileSidebar } from '@site/src/theme/SidebarContext';
import { Highlight } from '@site/src/utils/highlight';

export default function CategoryWrapper(props: any) {
  const { searchQuery } = useMobileSidebar();

  // Create a version of the item with the label highlighted
  const itemWithHighlight = {
    ...props.item,
    label: <Highlight text={props.item.label} query={searchQuery} /> as unknown as string,
  };

  return (
    <>
      <Category {...props} item={itemWithHighlight} />
    </>
  );
}
