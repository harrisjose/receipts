import { AppBreadcrumb } from "@/components/app-breadcrumb";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { NavigationGroup } from "@/types/navigation";

import { Cog, Inbox, MailSearch, UserCog } from "lucide-react";
import { Outlet } from "react-router-dom";

const navLinks: NavigationGroup[] = [
  {
    title: "Receipts",
    links: [
      {
        title: "Collections",
        url: "/",
        icon: Inbox,
      },
      {
        title: "Filters",
        url: "/filters",
        icon: MailSearch,
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        title: "Accounts",
        url: "/settings",
        icon: UserCog,
      },
      {
        title: "Preferences",
        url: "/settings",
        icon: Cog,
      },
    ],
  },
];

export const Layout = () => {
  return (
    <SidebarProvider>
      <AppSidebar links={navLinks} />
      <SidebarInset>
        <nav className="flex items-center gap-2 py-2 px-2">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <AppBreadcrumb links={navLinks.flatMap((group) => group.links)} />
        </nav>
        <section className="py-4 px-4">
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  );
};
