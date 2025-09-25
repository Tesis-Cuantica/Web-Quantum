import { ProfileForm } from "@/components/profesor/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <ProfileForm />
      </div>
    </div>
  );
}