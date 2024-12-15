import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function DropDownmenu({title}) {
  return (
    <Menu>
      <MenuButton>{title}</MenuButton>
      <MenuItems anchor="bottom" className="w-[var(--button-width)]">
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            SFO
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            ATL
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            LAX
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            PVG
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            MSP
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}