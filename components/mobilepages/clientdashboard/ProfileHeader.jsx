import profile from "@/public/assets/client_user_1.png";
import Image from "next/image";

function ProfileHeader() {
  return (
    <div className="profileHeader">
      <div className="profileText">
        <h5 className="mdHeading">Good Morning 🔥</h5>
        <h2 className="lgHeading">Ethan Matthews</h2>
      </div>
      <div className="profileImage">
        <Image src={profile} alt="profile" className="profileImageImg" />
        <div className="onlineStatus"></div>
      </div>
    </div>
  );
}

export default ProfileHeader;
