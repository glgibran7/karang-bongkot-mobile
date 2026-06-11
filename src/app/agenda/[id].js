import { useLocalSearchParams } from "expo-router";

import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";
import AppText from "../../components/ui/AppText";

import { agenda } from "../../mock/agenda";

export default function AgendaDetailScreen() {
  const { id } = useLocalSearchParams();

  const item = agenda.find((a) => a.id === Number(id));

  if (!item) return null;

  return (
    <AppLayout>
      <AppHeader title="Agenda" subtittle="Detail Agenda" showBack />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
        }}
      >
        <AppText size="title" weight="700">
          {item.title}
        </AppText>

        <AppText
          style={{
            marginTop: 16,
          }}
        >
          📅 {item.date}
        </AppText>

        <AppText>🕒 {item.time}</AppText>

        <AppText>📍 {item.location}</AppText>

        <AppText
          style={{
            marginTop: 20,
            lineHeight: 24,
          }}
        >
          {item.description}
        </AppText>
      </AppScrollView>
    </AppLayout>
  );
}
