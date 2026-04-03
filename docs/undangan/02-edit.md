---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WizardNavigation from '@site/src/components/WizardNavigation';

# Edit Undangan

Ikuti langkah-langkah di bawah ini untuk mengubah informasi pada undangan yang sudah Anda buat.

<Tabs groupId="edit-wizard" queryString="step" defaultValue="navigasi">
  <TabItem value="navigasi" label="1. Navigasi & Pilih">
    ### Langkah 1: Pilih Undangan
    Masuk ke menu "Undangan Saya" dan pilih undangan yang ingin diedit.

    - **Pilih Menu**: Buka menu **Undangan Saya**.
    ![Pilih Menu Undangan Saya](/img/hapus-undangan/pilih-menu-undangan-saya.jpg)

    - **Klik Edit**: Tekan ikon edit pada kartu undangan yang sesuai.
    ![Klik Tombol Edit](/img/edit-undangan/pilih-icon-edit.jpg)

    <WizardNavigation next="edit-konten" nextLabel="Edit Konten Dasar" />
  </TabItem>

  <TabItem value="edit-konten" label="2. Edit Undangan">
    ### Langkah 2: Edit Undangan (WYSIWYG)
    Anda dapat mengedit halaman undangan secara langsung (WYSIWYG). Teks bisa langsung diganti pada tampilan.

    - **Edit Cover**: Sesuaikan foto, judul, atau informasi pada halaman cover undangan.
    ![Edit Cover](/img/edit-undangan/edit-cover.jpg)

    - **Edit Konten**: Perbarui detail cerita, galeri, dan teks lainnya langsung di halaman.
    ![Edit Konten](/img/edit-undangan/edit-isi-undangan.jpg)

    - **Ganti Gambar**: Klik pada gambar yang ingin diganti, lalu pilih gambar baru dari galeri Anda.
    ![Ganti Gambar](/img/edit-undangan/ganti-gambar.jpg)

    <WizardNavigation back="navigasi" next="pengaturan" nextLabel="Pengaturan Lanjut" />
  </TabItem>

  <TabItem value="pengaturan" label="3. Pengaturan Lanjut">
    ### Langkah 3: Pengaturan Lanjut
    Atur detail acara, visibilitas, dan fitur tambahan lainnya.

    - **Waktu & Tempat**: Atur waktu acara, tempat, dan detail lokasi.
    ![Pengaturan Lanjut](/img/edit-undangan/pengaturan-lanjut-undangan.jpg)

    - **Gift Love**: Tambahkan rekening atau dompet digital (bisa lebih dari 1 rekening).
    ![Gift Love](/img/edit-undangan/gift-love.jpg)

    - **Visibilitas Undangan**: Atur apakah undangan bisa diakses publik atau privat.
    ![Visibilitas Undangan](/img/edit-undangan/atur-visibilitas-tampilan-undangan.jpg)
    
    Dan masih banyak lagi pengaturan lainnya yang bisa Anda atur sesuai dengan kebutuhan Anda.
    
    <WizardNavigation back="edit-konten" next="simpan" nextLabel="Simpan Perubahan" />
  </TabItem>

  <TabItem value="simpan" label="4. Simpan">
    ### Langkah 4: Simpan Perubahan
    Pastikan semua data dan pengaturan sudah benar sebelum menyimpan.

    - **Klik Simpan**: Tekan tombol simpan untuk mengaplikasikan semua perubahan.

    :::danger Perhatian
    Dengan mengedit undangan, perubahan akan langsung terlihat oleh tamu yang mengakses link undangan setelah Anda menyimpannya.
    :::

    <WizardNavigation back="pengaturan" />
  </TabItem>
</Tabs>
