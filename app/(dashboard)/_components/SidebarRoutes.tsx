'use client'

import SidebarItem from "./SidebarItem";
import {LayoutDashboard, Compass} from 'lucide-react'

const guestRoutes = [
  {
    icon: LayoutDashboard,
    label: 'Dashboard',
    href: '/',
  },
  {
    icon: Compass,
    label: 'Browse',
    href: '/search',
  },
];
const SidebarRoutes = () => {
    const routes = guestRoutes;

  return (
  <div className="flex flex-col w-full">{routes.map((route) => <SidebarItem key={route.href} icon={route.icon} label={route.label} href={route.href}/>)}</div>
  );
};

export default SidebarRoutes;
