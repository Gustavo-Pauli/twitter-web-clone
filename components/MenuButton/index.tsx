import React from 'react';
import { MenuCategories as Categories } from '../MenuBar';
import { 
  Container,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
 } from './styles';


interface MenuInterface {
  category: Categories;
  active?: boolean;
}

function renderIcon(category: Categories, active?: boolean) {
  switch(category) {
    case "Home": return <HomeIcon fill={active}/>
    case "Explore": return <ExploreIcon fill={active}/>
    case "Notifications": return <NotificationsIcon fill={active}/>
    case "Messages": return <MessagesIcon fill={active}/>
    case "Bookmarks": return <BookmarksIcon fill={active}/>
    case "Lists": return <ListsIcon fill={active}/>
    case "Profile": return <ProfileIcon fill={active}/>
    case "More": return <MoreIcon />
    default: return;
  }
}

function addRemoveWhenSmall(category: Categories) {
  if (category === "Bookmarks" || category === "Lists") {
    return "RemoveWhenSmall"
  }
}

const MenuButton: React.FC<MenuInterface> = ({ category, active }) => {
  return (
    <Container active={active} className={addRemoveWhenSmall(category)}>
      <div>
        {renderIcon(category, active)}
        <span>{category}</span>
      </div>
    </Container>
  );
}

export default MenuButton;