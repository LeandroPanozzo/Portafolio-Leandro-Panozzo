import React, { useState } from 'react';
import { 
  Home, 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun 
} from "lucide-react";
import './NavigationBar.css';

export default function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const iconColor = darkMode ? "#FFFFFF" : "#000000";

  const navItems = [
    { icon: Home, action: scrollToTop, label: "Home", isLink: false },
    { icon: Github, href: "https://github.com/LeandroPanozzo", label: "GitHub", isLink: true },
    { icon: Linkedin, href: "https://linkedin.com/in/leandro-panozzo-42ba34222", label: "LinkedIn", isLink: true },
    { icon: Mail, href: "mailto:leandrowork@gmail.com", label: "Email", isLink: true },
  ];
  
  return (
    <div className="navigation-container-horizontal">
      <div className="navigation-wrapper-horizontal">
        {navItems.map(({ icon: Icon, href, action, label, isLink }) => (
          <NavButton 
            key={label} 
            href={href} 
            onClick={action} 
            isLink={isLink}
          >
            <Icon color={iconColor} className="w-5 h-5" />
            <span className="nav-button-tooltip">{label}</span>
          </NavButton>
        ))}
  
        <div className="nav-divider-horizontal"></div>
  
        <NavButton onClick={toggleDarkMode} isLink={false}>
          {darkMode ? (
            <Sun color={iconColor} className="w-5 h-5" />
          ) : (
            <Moon color={iconColor} className="w-5 h-5" />
          )}
          <span className="nav-button-tooltip">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </NavButton>
      </div>
    </div>
  );
}

const NavButton = ({ children, href, onClick, isLink }) => {
  const buttonProps = isLink 
    ? { 
        href, 
        target: "_blank", 
        rel: "noopener noreferrer", 
      }
    : { 
        onClick 
      };

  return (
    <div className="nav-button">
      {React.createElement(
        isLink ? 'a' : 'button', 
        {
          ...buttonProps,
          className: "w-full h-full flex items-center justify-center",
          style: { background: 'none', border: 'none', cursor: 'pointer' }
        }, 
        children
      )}
    </div>
  );
};