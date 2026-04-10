---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WizardNavigation from '@site/src/components/WizardNavigation';

# Template WhatsApp

Sesuaikan pesan yang akan dikirimkan kepada tamu Anda melalui WhatsApp agar lebih personal dan informatif.

<Tabs groupId="wa-template-wizard" queryString="step" defaultValue="akses">
  <TabItem value="akses" label="Akses Template">
    ### Akses Template
    Langkah pertama adalah membuka menu pengaturan template pesan.

    - **Buka Menu**: Pada dashboard Manajemen Tamu, klik tombol **"Template WhatsApp"**.
    
    ![Tombol Template WhatsApp](/img/manajemen-tamu/btn-template-wa.jpg)

    <WizardNavigation next="edit" nextLabel="Edit Pesan" />
  </TabItem>

  <TabItem value="edit" label="Edit Pesan">
    ### Edit Pesan & Variabel
    Anda dapat menyesuaikan isi pesan sesuai keinginan. Gunakan variabel otomatis agar pesan lebih personal.

    - **Isi Pesan**: Ketik pesan Anda di tab **Edit**.
    - **Variabel Otomatis**:
      - `{name}`: Akan otomatis berubah menjadi nama tamu.
      - `{link}`: Akan otomatis menjadi link undangan khusus tamu tersebut.
      - `{code}`: Akan otomatis menampilkan Access Token tamu.

    ![Edit Template WhatsApp](/img/manajemen-tamu/edit-template-wa.jpg)
    
    :::info Info Variabel
    Anda tidak perlu mendefinisikan ulang variabel ini. Sistem akan secara otomatis menyesuaikan isinya untuk setiap tamu.
    :::

    <WizardNavigation back="akses" next="pratinjau" nextLabel="Cek Pratinjau" />
  </TabItem>

  <TabItem value="pratinjau" label="Pratinjau">
    ### Cek Pratinjau
    Pastikan susunan kalimat dan variabel sudah terlihat benar sebelum disimpan.

    - **Tab Pratinjau**: Pilih tab **Pratinjau** untuk melihat simulasi pesan yang akan diterima tamu (contoh: simulasi untuk tamu bernama Budi Santoso).

    ![Pratinjau Template WhatsApp](/img/manajemen-tamu/pratinjau-template-wa.jpg)

    <WizardNavigation back="edit" next="simpan" nextLabel="Simpan & Reset" />
  </TabItem>

  <TabItem value="simpan" label="Simpan & Reset">
    ### Simpan & Reset
    Selesaikan pengaturan template Anda.

    - **Simpan**: Klik tombol **"Simpan"** untuk menerapkan perubahan.
    ![Tombol Simpan](/img/manajemen-tamu/simpan-template-wa.jpg)

    - **Reset**: Jika ingin mengembalikan pesan ke format awal (default), klik tombol **"Reset"**.
    ![Tombol Reset](/img/manajemen-tamu/reset-template-wa.jpg)

    <WizardNavigation back="pratinjau" next="bagikan" nextLabel="Cara Berbagi" />
  </TabItem>

  <TabItem value="bagikan" label="Bagikan">
    ### Bagikan ke WhatsApp
    Setelah template siap, Anda bisa langsung mengirimkannya ke tamu.

    - **Klik Ikon WhatsApp**: Klik ikon WhatsApp pada baris tamu untuk langsung mengirimkan pesan sesuai template ke nomor yang terdaftar.

    ![Bagikan ke WhatsApp](/img/manajemen-tamu/share-wa.jpg)

    <WizardNavigation back="simpan" />
  </TabItem>
</Tabs>
