import Link from 'next/link'
import { DrawerIcon } from '../Icons/DrawerIcon'

export function Header() {
  return (
    <header className="p-4 flex justify-between mb-5">
      {/* <img src="/logo-solution-azul.svg" alt="solution center" className='h-[28px]' /> */}
      <div className="flex gap-5">
        <label htmlFor="my-drawer-4">
          <DrawerIcon />
        </label>
      </div>
    </header>
  )
}
