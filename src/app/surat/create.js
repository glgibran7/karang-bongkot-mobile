import { useState } from "react";
import { Alert } from "react-native";

import AppButton from "../../components/ui/AppButton";
import AppHeader from "../../components/ui/AppHeader";
import AppLayout from "../../components/ui/AppLayout";
import AppScrollView from "../../components/ui/AppScrollView";

// import AppFilePicker from "../../components/form/AppFilePicker";
import AppInput from "../../components/form/AppInput";
import AppSelect from "../../components/form/AppSelect";
import AppTextarea from "../../components/form/AppTextarea";

import { jenisSurat } from "../../mock/jenisSurat";

export default function CreateSuratScreen() {
  const [jenis, setJenis] = useState("");

  const [nama, setNama] = useState("");

  const [nik, setNik] = useState("");

  const [telepon, setTelepon] = useState("");

  const [keperluan, setKeperluan] = useState("");

  //   const [lampiran, setLampiran] = useState(null);

  const handleSubmit = () => {
    if (!jenis) return alert("Pilih jenis surat");

    if (!nama) return alert("Nama wajib diisi");

    if (!nik) return alert("NIK wajib diisi");

    Alert.alert("Berhasil", "Pengajuan surat berhasil dikirim.");
    console.log({
      jenis,
      nama,
      nik,
      telepon,
      keperluan,
      //   lampiran,
    });
  };

  return (
    <AppLayout>
      <AppHeader
        title="Form Pengajuan Surat"
        subtittle="Isi form dengan benar dan sesuai"
        showBack
      />

      <AppScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 40,
        }}
      >
        <AppSelect
          label="Jenis Surat"
          value={jenis}
          options={jenisSurat}
          onChange={setJenis}
        />

        <AppInput label="Nama Lengkap" value={nama} onChangeText={setNama} />

        <AppInput
          label="NIK"
          value={nik}
          keyboardType="numeric"
          onChangeText={setNik}
        />

        <AppInput
          label="Nomor HP"
          value={telepon}
          keyboardType="phone-pad"
          onChangeText={setTelepon}
        />

        <AppTextarea
          label="Keperluan"
          value={keperluan}
          onChangeText={setKeperluan}
        />

        {/* <AppFilePicker value={lampiran} onChange={setLampiran} /> */}

        <AppButton title="Kirim Pengajuan" onPress={handleSubmit} />
      </AppScrollView>
    </AppLayout>
  );
}
