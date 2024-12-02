import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { NavigationLink } from "@/types/navigation";
import { useLocation } from "react-router";

export function AppBreadcrumb({ links }: { links: NavigationLink[] }) {
  const location = useLocation();
  const activeLink = links.find((link) => link.url === location.pathname);

  return (
    <Breadcrumb className="drag-none">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#/main/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {activeLink && (
          <BreadcrumbItem>
            <BreadcrumbLink href={"#/main" + activeLink.url}>
              {activeLink.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
