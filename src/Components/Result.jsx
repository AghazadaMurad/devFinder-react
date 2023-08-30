// Components
import ProfilePhoto from "./ProfilePhoto";
import Name from "./Name";
import Username from "./Username";
import Date from "./Date";
import Bio from "./Bio";
import Info from "./Info";

const Result = ({ user }) => {
  return (
    <div
      id="result"
      className="bg-[#1e2a47] w-[730px] rounded-2xl mt-5 flex-col items-center py-8 flex "
    >
      <div className="flex items-center justify-between w-[650px]">
        <ProfilePhoto src={user.avatar_url} />
        <div className="h-full w-[480px] relative">
          <Name>{user.name}</Name>
          <div className="text-blue-600 mt-1">
            <Username>{user.login}</Username>
          </div>
          <Date date={user.created_at} />
        </div>
      </div>

      <div className="w-[650px] flex flex-col items-end">
        <Bio>{user.bio}</Bio>
        <div className="flex items-center justify-around bg-[#141d2f] h-20 w-[480px] rounded-xl mb-5">
          <Info name="Repos" num={user.public_repos} />
          <Info name="Followers" num={user.followers} />
          <Info name="Following" num={user.following} />
        </div>
      </div>
    </div>
  );
};

export default Result;
