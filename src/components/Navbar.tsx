import * as React from 'react'
import { Icon, Dropdown, Image, Menu } from 'semantic-ui-react'

import { Explorer, Session } from '../types'

const logo = require('../images/logo-small.png')

interface NavbarProps{
  active: string
  explorer: Explorer
  session: Session
  onClickLogin: () => void
  onClickLogout: () => void
  onRecordCreate: () => void
}

function renderMenuItemUser (props: NavbarProps) {
  const { explorer, session, onClickLogin, onClickLogout, onRecordCreate } = props
  if (session && explorer) {
    return (
      <Menu.Item className="user" color={'green'}>
        <Image src={explorer.photo ? explorer.photo : logo} />
        <Dropdown 
          text={explorer.displayName ? explorer.displayName : explorer.email}
          pointing
        >
          <Dropdown.Menu>
            <Dropdown.Item>
              <Icon name='user' />
              <span className='text'>Profile</span>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={(e) => onClickLogout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )
  } else {
    return (
      <Menu.Item
        name="user"
        active={props.active === 'user'}
        onClick={(e) => onClickLogin()}
      >
        Login
      </Menu.Item>
    )
  }
}
const Navbar: React.SFC<NavbarProps> = (props: NavbarProps) => {
  const { onRecordCreate, active } = props
  return (
    <Menu borderless fluid>
      <Menu.Item className="brand" name='brand'>
        <Image src={logo}/>
        Kuntur
      </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item
        name="explorers"
        active={active === 'explorers'}
        onClick={(e) => console.log('click')}
      >
        <Icon name="eye" />
        Explorers
      </Menu.Item>

      <Menu.Item
        name="records"
        active={active === 'records'}
        onClick={(e) => onRecordCreate()}
      >
        <Icon name="book" />
        Records
      </Menu.Item>

      <Menu.Item
        name="places"
        active={active === 'places'}
        onClick={(e) => console.log('click')}
      >
        <Icon name="world" />
        Places
      </Menu.Item>
      {renderMenuItemUser(props)}
    </Menu.Menu>
    </Menu>
  )
}

export default Navbar;
