'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { RiLinkedinFill, RiMessage2Fill, RiRobot2Fill, RiUserLine, RiCheckboxCircleFill, RiTeamLine } from 'react-icons/ri';
import { useMediaQuery } from "@/hooks/use-media-query";

export interface LinkedInOrbitingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function LinkedInOrbiting({
  className,
  reverse,
  duration = 20,
  radius: initialRadius = 160, // Default for desktop
  path = true,
  iconSize: initialIconSize = 50, // Default for desktop
  speed = 1,
  ...props
}: LinkedInOrbitingProps) {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Adjust radius and icon size based on screen width
  const radius = isMobile ? 100 : isTablet ? 130 : initialRadius;
  const iconSize = isMobile ? 35 : isTablet ? 40 : initialIconSize;

  const calculatedDuration = duration / speed;
  
  const orbitItems = [
    { icon: RiMessage2Fill, color: "#0a66c2", bgColor: "white" },
    { icon: RiRobot2Fill, color: "white", bgColor: "#ff5500" },
    { icon: RiUserLine, color: "#0a66c2", bgColor: "white" },
    { icon: RiTeamLine, color: "white", bgColor: "#0a66c2" },
    { icon: RiCheckboxCircleFill, color: "white", bgColor: "#0a66c2" }
  ];

  return (
    // This container's size is now dynamic to prevent clipping
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        width: `${(radius * 2) + iconSize}px`,
        height: `${(radius * 2) + iconSize}px`,
      }}
    >
      {/* LinkedIn Logo im Zentrum */}
      <div 
        className="absolute z-20 bg-[#0a66c2] rounded-xl flex items-center justify-center shadow-xl"
        style={{
          width: `${iconSize * 1.2}px`,
          height: `${iconSize * 1.2}px`,
        }}
      >
        <RiLinkedinFill 
          className="text-white"
          style={{
            width: `${iconSize * 0.8}px`,
            height: `${iconSize * 0.8}px`,
          }}
        />
      </div>

      {/* Kreisbahn */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <circle
            className="stroke-[#0a66c2]/30 stroke-[1px]"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}
      
      {/* Umlaufende Elemente */}
      {orbitItems.map((item, index) => {
        const angle = (360 / orbitItems.length) * index;
        const IconComponent = item.icon;
        
        return (
          <div
            key={index}
            style={{
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": angle,
            } as React.CSSProperties}
            className={cn(
              "absolute left-1/2 top-1/2",
              "transform-gpu animate-orbit",
              { "[animation-direction:reverse]": reverse },
              className
            )}
          >
            <div 
              className="flex items-center justify-center rounded-xl shadow-lg p-3 transition-transform hover:scale-110 duration-300"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                backgroundColor: item.bgColor
              }}
            >
              <IconComponent style={{ color: item.color, width: '100%', height: '100%' }} />
            </div>
          </div>
        );
      })}

      {/* Innere Kreisbahn mit kleineren Icons */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <circle
            className="stroke-[#0a66c2]/20 stroke-[1px]"
            cx="50%"
            cy="50%"
            r={radius / 1.8}
            fill="none"
            strokeDasharray="2 2"
          />
        </svg>
      )}

      {/* Innere umlaufende Elemente */}
      {orbitItems.slice(0, 3).map((item, index) => {
        const angle = (360 / 3) * index;
        const IconComponent = item.icon;
        
        return (
          <div
            key={`inner-${index}`}
            style={{
              "--duration": `${calculatedDuration * 0.7}s`,
              "--radius": `${radius / 1.8}px`,
              "--angle": angle,
            } as React.CSSProperties}
            className={cn(
              "absolute left-1/2 top-1/2",
              "transform-gpu animate-orbit",
              { "[animation-direction:reverse]": !reverse },
              className
            )}
          >
            <div 
              className="flex items-center justify-center rounded-lg shadow-lg p-2 transition-transform hover:scale-110 duration-300"
              style={{
                width: `${iconSize * 0.7}px`,
                height: `${iconSize * 0.7}px`,
                backgroundColor: item.bgColor
              }}
            >
              <IconComponent style={{ color: item.color, width: '100%', height: '100%' }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}