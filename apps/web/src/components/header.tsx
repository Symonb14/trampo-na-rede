import Image from 'next/image'
import rocket from '@/assets/rocket.svg'
import { ProfileButton } from './profile-button'
import { Slash } from 'lucide-react'
import { OrganizationSwitcher } from './organization-switcher'
export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src={rocket}
          className="size-6 dark:invert"
          alt="Rocketseat"
        />
        <Slash className="size-3 -rotate-[24deg] text-border" />
        <OrganizationSwitcher />
      </div>
      <div className="flex items-center gap-4">
        <ProfileButton />
      </div>
    </div>
  )
}