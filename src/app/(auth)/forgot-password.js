import AppCard from "../../components/ui/AppCard";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppText from "../../components/ui/AppText";

export default function ForgotPasswordScreen() {
  return (
    <AppLayout>
      <AppHeader title="Lupa Password" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
        }}
      >
        <AppCard>
          <AppText weight="700">Hubungi Admin Desa</AppText>

          <AppText
            style={{
              marginTop: 8,
            }}
          >
            Jika Anda lupa password akun, silakan hubungi admin desa untuk
            melakukan reset password.
          </AppText>
        </AppCard>
      </AppScrollView>
    </AppLayout>
  );
}
