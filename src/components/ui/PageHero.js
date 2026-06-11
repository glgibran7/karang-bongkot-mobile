import AppCard from "./AppCard";
import AppText from "./AppText";

export default function PageHero({ title, subtitle }) {
  return (
    <AppCard>
      <AppText size="title" weight="700">
        {title}
      </AppText>

      <AppText
        style={{
          marginTop: 4,
        }}
      >
        {subtitle}
      </AppText>
    </AppCard>
  );
}
