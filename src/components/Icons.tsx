import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export function PhoneIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.7 20.28 11.91C20.28 16.45 16.59 20.14 12.05 20.14C10.56 20.14 9.12 19.74 7.87 18.99L7.57 18.82L4.45 19.64L5.28 16.59L5.09 16.29C4.26 14.97 3.82 13.46 3.82 11.91C3.82 7.37 7.51 3.67 12.05 3.67ZM9.05 7.42C8.86 7.42 8.56 7.49 8.3 7.78C8.04 8.06 7.31 8.75 7.31 10.15C7.31 11.55 8.33 12.9 8.47 13.09C8.61 13.28 10.43 16.14 13.27 17.25C15.63 18.17 16.11 17.98 16.63 17.94C17.15 17.89 18.3 17.25 18.54 16.58C18.78 15.9 18.78 15.33 18.71 15.2C18.64 15.08 18.45 15.01 18.16 14.87C17.87 14.72 16.44 14.02 16.18 13.92C15.91 13.82 15.72 13.78 15.53 14.06C15.34 14.35 14.78 15.01 14.61 15.2C14.45 15.4 14.28 15.42 13.99 15.28C13.7 15.13 12.77 14.83 11.67 13.85C10.82 13.09 10.24 12.15 10.08 11.86C9.91 11.57 10.06 11.42 10.21 11.27C10.34 11.14 10.5 10.93 10.65 10.76C10.8 10.59 10.85 10.46 10.95 10.27C11.05 10.07 11 9.9 10.93 9.76C10.85 9.61 10.29 8.24 10.05 7.67C9.82 7.12 9.58 7.2 9.4 7.19C9.23 7.19 9.05 7.42 9.05 7.42Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function ScaleIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M12 3v18" />
      <path d="M4 6h16" />
      <path d="M4 6l-3 7h6l-3-7z" />
      <path d="M20 6l-3 7h6l-3-7z" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function MillPulleyIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 4v4" />
      <path d="M12 16v4" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
    </svg>
  );
}

export function GrainStalkIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M2 22s6-4 10-10c3-4 8-8 10-8-1 3-5 7-9 10C9 18 2 22 2 22z" />
      <path d="M12 12l4-2" />
      <path d="M9 15l4-1" />
      <path d="M15 9l4-3" />
    </svg>
  );
}

export function OilCanIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M12 2v4" />
      <path d="M7 6h10l-1 14H8L7 6z" />
      <path d="M10 11a2 2 0 1 0 4 0c0-1.5-2-3-2-3s-2 1.5-2 3z" />
    </svg>
  );
}

export function DocumentTextIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

export function ShieldVerifiedIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ className = "w-6 h-6", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function Rotate3DIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M21.5 2v6h-6" />
      <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-1.19" />
    </svg>
  );
}

export function InfoCircleIcon({ className = "w-4 h-4", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
