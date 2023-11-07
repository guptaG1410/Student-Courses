'use client';

import { usePathname } from 'next/navigation';
import SidebarItem from './SidebarItem';
import { LayoutDashboard, Compass, List, BarChart2Icon } from 'lucide-react';

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

const teacherRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/teacher/courses',
  },
  {
    icon: BarChart2Icon,
    label: 'Analytics',
    href: '/teacher/analytics',
  },
];

const SidebarRoutes = () => {
  const pathname = usePathname();

  const isTeacherRoute = pathname?.includes('/teacher');
  const routes = isTeacherRoute ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebarRoutes;
