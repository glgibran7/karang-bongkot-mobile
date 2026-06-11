import { useState } from "react";

import { Alert } from "react-native";

import AppButton from "../../components/ui/AppButton";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";

import AppImagePicker from "../../components/form/AppImagePicker";
import AppInput from "../../components/form/AppInput";
import AppSelect from "../../components/form/AppSelect";
import AppTextarea from "../../components/form/AppTextarea";

import { kategoriAduan } from "../../mock/kategoriAduan";

export default function CreateAduanScreen() {
  const [judul, setJudul] = useState("");

  const [kategori, setKategori] = useState("");

  const [lokasi, setLokasi] = useState("");

  const [deskripsi, setDeskripsi] = useState("");

  const [foto, setFoto] = useState(null);

  const handleSubmit = () => {
    if (!judul.trim()) {
      return Alert.alert("Validasi", "Judul aduan wajib diisi");
    }

    if (!kategori) {
      return Alert.alert("Validasi", "Kategori wajib dipilih");
    }

    if (!deskripsi.trim()) {
      return Alert.alert("Validasi", "Deskripsi wajib diisi");
    }

    if (!foto) {
      return Alert.alert("Validasi", "Foto bukti wajib diunggah");
    }

    console.log({
      judul,
      kategori,
      lokasi,
      deskripsi,
      foto,
    });

    Alert.alert("Berhasil", "Aduan berhasil dikirim");
  };

  return (
    <AppLayout>
      <AppHeader
        title="Buat Aduan"
        subtittle="Isi formulir aduan dengan benar"
        showBack
      />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <AppInput
          label="Judul Aduan"
          value={judul}
          onChangeText={setJudul}
          placeholder="Contoh: Jalan Rusak"
        />

        <AppSelect
          label="Kategori"
          value={kategori}
          options={kategoriAduan}
          onChange={setKategori}
        />

        <AppInput
          label="Lokasi"
          value={lokasi}
          onChangeText={setLokasi}
          placeholder="Lokasi kejadian"
        />

        <AppTextarea
          label="Deskripsi"
          value={deskripsi}
          onChangeText={setDeskripsi}
          placeholder="Jelaskan masalah yang terjadi..."
        />

        <AppImagePicker value={foto} onChange={setFoto} />

        <AppButton title="Kirim Aduan" onPress={handleSubmit} />
      </AppScrollView>
    </AppLayout>
  );
}
