import { cn } from '@/lib/utils'
import { PropsWithChildren, FC } from 'react'

interface Props {
  className?: string
}

const MaxWidthWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
