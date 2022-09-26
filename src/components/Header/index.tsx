import React from 'react';
import DarkMode from '../../DarkMode';
import BasicNominatimSearch from '../BasicNominatimSearch';
import ToggleDrawerButton from '../ToggleDrawerButton';

import './index.less';

export interface HeaderProps extends React.ComponentProps<'div'> { };

export const Header: React.FC<HeaderProps> = ({
  ...restProps
}): JSX.Element => {

  return (
    <div className='Header'>
        <DarkMode />
        <>
        <BasicNominatimSearch />
        <ToggleDrawerButton />
        </>

    </div>
  );
};

export default Header;


