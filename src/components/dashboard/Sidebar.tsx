
import { useState } from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import { 
  BarChart2, 
  ShoppingCart, 
  Globe, 
  DollarSign, 
  Settings, 
  Users, 
  HelpCircle,
  ChevronRight,
  ChevronDown,
  LogOut,
  FileText,
  Library,
  LayoutList,
  Wrench,
  UserCog
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

interface NavItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
  isActive: boolean;
  children?: NavItemProps[];
  isOpen?: boolean;
  toggleOpen?: () => void;
}

const NavItem = ({ icon, title, href, isActive, children, isOpen, toggleOpen }: NavItemProps) => {
  const hasChildren = children && children.length > 0;
  
  return (
    <div className={cn("mb-1", hasChildren && isOpen && "mb-0")}>
      <Link
        to={hasChildren ? "#" : href}
        onClick={(e) => {
          if (hasChildren) {
            e.preventDefault();
            toggleOpen && toggleOpen();
          }
        }}
        className={cn(
          "flex items-center py-2 px-4 text-sm rounded-md group transition-colors",
          isActive 
            ? "bg-oraxyn-blue text-white" 
            : "text-gray-700 hover:bg-gray-100",
          hasChildren && "justify-between"
        )}
      >
        <div className="flex items-center">
          <span className="mr-3">{icon}</span>
          <span>{title}</span>
        </div>
        
        {hasChildren && (
          <span className={cn("transition-transform", isOpen && "transform rotate-90")}>
            <ChevronRight className="h-4 w-4" />
          </span>
        )}
      </Link>
      
      {hasChildren && isOpen && (
        <div className="mt-1 ml-6 space-y-1">
          {children.map((child, index) => (
            <Link
              key={index}
              to={child.href}
              className={cn(
                "flex items-center py-2 px-4 text-sm rounded-md transition-colors",
                child.isActive 
                  ? "bg-blue-50 text-oraxyn-blue font-medium" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-oraxyn-blue"
              )}
            >
              <span className="mr-3">{child.icon}</span>
              <span>{child.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    'channels': true,
    'tools': false,
    'reports': false
  });
  
  const location = useLocation();
  const { logout, isAdmin } = useAuth();
  
  const toggleMenu = (menuKey: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };
  
  // Define base nav items
  let navItems = [
    {
      title: 'Overview',
      href: '/dashboard',
      icon: <BarChart2 className="h-5 w-5" />,
      exact: true
    },
    {
      title: 'Channels',
      key: 'channels',
      icon: <Globe className="h-5 w-5" />,
      children: [
        {
          title: 'Amazon',
          href: '/platform/amazon',
          icon: <ShoppingCart className="h-4 w-4" />
        },
        {
          title: 'Facebook',
          href: '/platform/facebook',
          icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        },
        {
          title: 'Google',
          href: '/platform/google',
          icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
        }
      ]
    },
    {
      title: 'Campaigns',
      href: '/dashboard/campaigns',
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      title: 'Library',
      href: '/dashboard/library',
      icon: <Library className="h-5 w-5" />
    },
    {
      title: 'Tools',
      key: 'tools',
      icon: <Wrench className="h-5 w-5" />,
      children: [
        {
          title: 'Keyword Generator',
          href: '/dashboard/tools/keywords',
          icon: <LayoutList className="h-4 w-4" />
        },
        {
          title: 'Bid Optimizer',
          href: '/dashboard/tools/optimizer',
          icon: <DollarSign className="h-4 w-4" />
        }
      ]
    },
    {
      title: 'Reports',
      key: 'reports',
      icon: <FileText className="h-5 w-5" />,
      children: [
        {
          title: 'Custom Reports',
          href: '/dashboard/reports/custom',
          icon: <FileText className="h-4 w-4" />
        },
        {
          title: 'Scheduled Reports',
          href: '/dashboard/reports/scheduled',
          icon: <FileText className="h-4 w-4" />
        }
      ]
    },
    {
      title: 'Team',
      href: '/dashboard/team',
      icon: <Users className="h-5 w-5" />
    },
    {
      title: 'Settings',
      href: '/dashboard/settings',
      icon: <Settings className="h-5 w-5" />
    },
    {
      title: 'Help & Support',
      href: '/dashboard/support',
      icon: <HelpCircle className="h-5 w-5" />
    }
  ];

  // Add Admin item if user is an admin
  if (isAdmin) {
    navItems.splice(7, 0, {
      title: 'Admin',
      href: '/dashboard/admin',
      icon: <UserCog className="h-5 w-5" />
    });
  }

  const isActive = (item: any): boolean => {
    if (item.exact) {
      return location.pathname === item.href;
    }
    return location.pathname.startsWith(item.href);
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="h-16 flex items-center px-6">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl text-oraxyn-darkTurquoise">
            <span className="text-oraxyn-orange">Oraxyn</span>
          </Link>
        </div>
        
        <div className="flex-1 flex flex-col overflow-y-auto">
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navItems.map((item, index) => {
              if (item.children) {
                const key = item.key || `menu-${index}`;
                const isMenuOpen = openMenus[key] || false;
                const hasActiveChild = item.children.some(child => isActive(child));
                
                return (
                  <NavItem
                    key={key}
                    icon={item.icon}
                    title={item.title}
                    href="#"
                    isActive={hasActiveChild}
                    children={item.children.map(child => ({
                      ...child,
                      isActive: isActive(child)
                    }))}
                    isOpen={isMenuOpen}
                    toggleOpen={() => toggleMenu(key)}
                  />
                );
              }
              
              return (
                <NavItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  href={item.href}
                  isActive={isActive(item)}
                />
              );
            })}
          </nav>
          
          <div className="border-t border-gray-200 p-4">
            <button 
              onClick={logout}
              className="flex items-center text-gray-700 hover:text-oraxyn-turquoise transition-colors text-sm w-full"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
