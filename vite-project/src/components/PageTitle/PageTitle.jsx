/* eslint-disable react/prop-types */
import { Slash } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function PageTitle({ title, items }) {
  return (
    <div className="flex justify-between">
      <h4 className="page-title">{title}</h4>
      <BreadcrumbWithCustomSeparator items={items} />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function BreadcrumbWithCustomSeparator({ items }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Shreyu</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash />
        </BreadcrumbSeparator>
        {items &&
          items?.length > 0 &&
          items.map((item, index) => {
            return item.active ? (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
            ) : (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <Slash />
                </BreadcrumbSeparator>
              </>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
