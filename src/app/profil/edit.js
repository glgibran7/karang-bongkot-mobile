import { useState } from "react";

import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";

import EditProfileForm from "../../components/profile/EditProfileForm";

import { profile } from "../../mock/profile";

export default function EditProfilScreen() {
  const [form, setForm] = useState(profile);

  return (
    <AppLayout>
      <AppHeader title="Edit Profil" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <EditProfileForm form={form} setForm={setForm} />
      </AppScrollView>
    </AppLayout>
  );
}
