import { Image, TouchableOpacity, View } from "react-native";

import AppButton from "../ui/AppButton";
import AppCard from "../ui/AppCard";
import AppInput from "../ui/AppInput";
import AppText from "../ui/AppText";

export default function EditProfileForm({ form, setForm }) {
  const handleChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const ReadOnlyField = ({ label, value }) => (
    <View
      style={{
        marginBottom: 16,
      }}
    >
      <AppText
        size="small"
        style={{
          opacity: 0.7,
        }}
      >
        {label}
      </AppText>

      <AppText
        weight="600"
        style={{
          marginTop: 4,
        }}
      >
        {value}
      </AppText>
    </View>
  );

  return (
    <>
      {/* FOTO PROFIL */}
      <AppCard>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: form.photo,
            }}
            style={{
              width: 110,
              height: 110,
              borderRadius: 999,
            }}
          />

          <TouchableOpacity
            style={{
              marginTop: 12,
            }}
          >
            <AppText weight="600">Ubah Foto Profil</AppText>
          </TouchableOpacity>
        </View>
      </AppCard>

      <View style={{ height: 16 }} />

      {/* DATA PRIBADI */}
      <AppCard>
        <AppText
          weight="700"
          style={{
            marginBottom: 16,
          }}
        >
          Data Pribadi
        </AppText>

        <AppInput
          label="Nama Lengkap"
          value={form.nama}
          onChangeText={(text) => handleChange("nama", text)}
        />
        <View style={{ height: 10 }} />

        <AppInput
          label="Nomor HP"
          keyboardType="phone-pad"
          value={form.phone}
          onChangeText={(text) => handleChange("phone", text)}
        />
      </AppCard>

      <View style={{ height: 16 }} />

      {/* IDENTITAS */}
      <AppCard>
        <AppText
          weight="700"
          style={{
            marginBottom: 16,
          }}
        >
          Identitas Kependudukan
        </AppText>

        <ReadOnlyField label="NIK" value={form.nik} />

        <ReadOnlyField label="Nomor KK" value={form.kk} />
      </AppCard>

      <View style={{ height: 16 }} />

      {/* ALAMAT */}
      <AppCard>
        <AppText
          weight="700"
          style={{
            marginBottom: 16,
          }}
        >
          Alamat
        </AppText>

        <View
          style={{
            flexDirection: "row",
            gap: 12,
          }}
        >
          <View style={{ flex: 1 }}>
            <AppInput
              label="RT"
              value={form.rt}
              onChangeText={(text) => handleChange("rt", text)}
            />
          </View>

          <View style={{ flex: 1 }}>
            <AppInput
              label="RW"
              value={form.rw}
              onChangeText={(text) => handleChange("rw", text)}
            />
          </View>
        </View>

        <View style={{ height: 10 }} />

        <AppInput
          label="Dusun"
          value={form.dusun}
          onChangeText={(text) => handleChange("dusun", text)}
        />

        <View style={{ height: 10 }} />

        <AppInput
          label="Alamat Lengkap"
          value={form.alamat}
          multiline
          numberOfLines={4}
          onChangeText={(text) => handleChange("alamat", text)}
        />
      </AppCard>

      <View style={{ height: 24 }} />

      <AppButton
        title="Simpan Perubahan"
        onPress={() => {
          console.log(form);
        }}
      />
    </>
  );
}
