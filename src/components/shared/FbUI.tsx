import React from 'react'
import Link from 'next/link'

interface HexagonIconProps {
  color?: string
  className?: string
  size?: number
}

export function HexagonIcon({ color = 'var(--primary)', className = '', size = 16 }: HexagonIconProps) {
  const width = size
  const height = (size * 17) / 15
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M7.5 0L14.8612 4.25V12.75L7.5 17L0.138784 12.75V4.25L7.5 0Z"
        fill={color}
      />
    </svg>
  )
}

interface SubtitleBadgeProps {
  text: string
  theme?: 'dark' | 'light'
  className?: string
}

export function SubtitleBadge({ text, theme = 'light', className = '' }: SubtitleBadgeProps) {
  const isDark = theme === 'dark'
  const iconColor = isDark ? 'var(--primary)' : 'var(--brand-black)'
  const textColor = isDark ? 'text-primary' : 'text-brand-black'

  return (
    <div className={`inline-flex items-center gap-2 mb-[15px] ${className}`}>
      <HexagonIcon color={iconColor} size={15} />
      <span className={`font-urbanist text-[16px] font-semibold leading-[1.3] ${textColor}`}>
        {text}
      </span>
    </div>
  )
}

interface ArrowIconProps {
  color?: string
  className?: string
  size?: number
}

export function ArrowIcon({ color = 'var(--brand-black)', className = '', size = 24 }: ArrowIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
        fill={color}
      />
    </svg>
  )
}

interface FBButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
  fullWidth?: boolean
  showArrow?: boolean
}

export function FBButton({
  href,
  onClick,
  children,
  variant = 'primary',
  className = '',
  fullWidth = false,
  showArrow = true,
}: FBButtonProps) {
  const isPrimary = variant === 'primary'

  const baseClasses = isPrimary
    ? 'group inline-flex items-center justify-between gap-4 bg-primary text-brand-black font-semibold text-[16px] px-[26px] py-[16px] rounded-[55px] border border-primary hover:bg-brand-black hover:border-brand-black hover:text-primary transition-all duration-300'
    : 'group inline-flex items-center justify-between gap-4 bg-white text-brand-black font-semibold text-[16px] px-[26px] py-[16px] rounded-[55px] border border-white hover:bg-primary hover:border-primary hover:text-brand-black transition-all duration-300'

  const widthClass = fullWidth ? 'w-full' : ''
  const combinedClass = `${baseClasses} ${widthClass} ${className}`.trim()

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <div className="w-6 h-6 relative shrink-0">
          {isPrimary ? (
            <>
              <ArrowIcon
                color="var(--brand-black)"
                className="absolute inset-0 transition-all duration-300 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:opacity-0"
              />
              <ArrowIcon
                color="var(--primary)"
                className="absolute inset-0 -translate-x-2 translate-y-2 -rotate-45 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:rotate-0 group-hover:opacity-100"
              />
            </>
          ) : (
            <ArrowIcon
              color="var(--brand-black)"
              className="absolute inset-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          )}
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClass} type="button">
      {content}
    </button>
  )
}
