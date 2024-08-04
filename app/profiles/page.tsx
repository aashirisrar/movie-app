import { getCurrentUser } from "@/app/actions/getCurrentUser";

import ProfileAvatarComponent from "@/components/profiles/ProfileAvatarComponent";

const ProfiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <div className="text-white flex justify-center items-center h-full">
        Not logged In
      </div>
    );

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <ProfileAvatarComponent currentUser={currentUser} />
        </div>
      </div>
    </div>
  );
};

export default ProfiesPage;
