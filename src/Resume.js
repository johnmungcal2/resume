import Avatar from './AvatarComponent';
import Contacts from './ContactsComponent';
import Interests from './InterestsComponent';
import Achievements from './AchievementsComponent';
import ProfileInfo from './ProfileInfoComponent';

function Resume() {
  return (
  <div style={{ backgroundColor: 'black' }}>
      <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div>
        <Avatar />
        <Contacts />
        <Interests />
        <Achievements />
      </div>
      <div>
        <ProfileInfo />
      </div>
    </div>
    </div>
  );
}

export default Resume;
