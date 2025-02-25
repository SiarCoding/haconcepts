'use client';

import { cn } from "@/lib/utils";
import React from "react";
import { RiLinkedinFill, RiMessage2Fill, RiRobot2Fill, RiUserLine, RiCheckboxCircleFill, RiTeamLine } from 'react-icons/ri';

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
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: LinkedInOrbitingProps) {
  const calculatedDuration = duration / speed;
  
  // LinkedIn-spezifische Icons und Farben
  const orbitItems = [
    { icon: RiMessage2Fill, color: "#0a66c2", bgColor: "white" },
    { icon: RiRobot2Fill, color: "white", bgColor: "#ff5500" },
    { icon: RiUserLine, color: "#0a66c2", bgColor: "white" },
    { icon: RiTeamLine, color: "white", bgColor: "#0a66c2" },
    { icon: RiCheckboxCircleFill, color: "white", bgColor: "#0a66c2" }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* LinkedIn Logo im Zentrum */}
      <div className="absolute z-20 w-20 h-20 bg-[#0a66c2] rounded-xl flex items-center justify-center shadow-xl">
        <RiLinkedinFill className="w-12 h-12 text-white" />
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
            r={radius / 2}
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
              "--radius": `${radius / 2}px`,
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