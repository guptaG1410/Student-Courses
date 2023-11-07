import NavbarRoutes from '@/components/NavbarRoutes';
import MobSidebar from './MobSidebar';

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
