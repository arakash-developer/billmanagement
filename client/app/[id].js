import { useRouter } from "next/router";
import ProfileInfo from "../../components/ProfileInfo";

const ProfilePage = () => {
    const router = useRouter();
    const { id } = router.query; // URL থেকে id সংগ্রহ করা

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mt-6">
                Profile Page for User: {id}
            </h1>
            <ProfileInfo />
        </div>
    );
};

export default ProfilePage;
