"use client"; // This makes the component a client component

import { useRouter } from 'next/navigation';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"; // Adjust the import path as needed

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  // Handler function for navigation
  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="menubar-container">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Map</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onSelect={() => handleNavigation('/')}>
                Home
              </MenubarItem>
              <MenubarItem onSelect={() => handleNavigation('/about')}>
                About
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onSelect={() => handleNavigation('/captains-log')}>
                Captain&apos;s Log
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem onSelect={() => handleNavigation('/projects')}>
                Projects
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="content-container">
        {children} {/* This will render the content of each page */}
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        {/* Footer content, if any */}
      </footer>
    </div>
  );
};

export default ClientLayout;
