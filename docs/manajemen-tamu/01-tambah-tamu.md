---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WizardNavigation from '@site/src/components/WizardNavigation';

# Menambah Tamu

Ikuti panduan di bawah ini untuk menambahkan tamu ke daftar undangan Anda.

<Tabs groupId="tambah-tamu-wizard" queryString="step" defaultValue="opsi">
  <TabItem value="opsi" label="Klik Tambah Tamu">
    ### Klik Tambah Tamu
    Di dashboard Manajemen Tamu, Anda bisa memilih cara untuk menambahkan tamu.

    - **Tambah Manual**: Klik tombol **"+ Tambah Tamu"** untuk membuka form.
    - **Metode**: Anda bisa menambah satu per satu atau impor sekaligus (massal).

    ![Tombol Tambah Tamu](/img/manajemen-tamu/klik-tambah-tamu.jpg)

    <WizardNavigation next="isi-data" nextLabel="Isi Data Tamu" />
  </TabItem>

  <TabItem value="isi-data" label="Isi Data">
    ### Isi Data
    Lengkapi detail tamu yang akan diundang.

    - **Nama Lengkap**: Masukkan nama tamu (misal: Budi Santoso).
    - **WhatsApp**: Gunakan format nomor yang benar (misal: 62812...).
    - **Kategori**: Pilih label seperti VIP, Teman, atau Keluarga.

    ![Form Tambah Tamu](/img/manajemen-tamu/form-tambah-tamu-final.jpg)

    - **Simpan**: Klik **"Buat Entri Tamu"** untuk menyelesaikan.

    <WizardNavigation back="opsi" next="token" nextLabel="Cek Access Token" />
  </TabItem>

  <TabItem value="token" label="Access Token">
    ### Access Token
    Sistem akan otomatis memberikan kode akses untuk setiap tamu.

    - **Cek Token**: Kode angka muncul di bawah nama tamu.
    - **Fungsi**: Digunakan sebagai password jika undangan bersifat **Private**.

    ![Access Token Tamu](/img/manajemen-tamu/access-token.jpg)

    <WizardNavigation back="isi-data" next="public" nextLabel="Tamu Public" />
  </TabItem>

  <TabItem value="public" label="Tamu Public">
    ### Tamu Public
    Jika undangan Anda bersifat **Public**, Anda bisa menggunakan link otomatis.

    - **Format Link**: `https://undang.xyz/i/nama-undangan?to=NamaTamu`
    - **Kelebihan**: Cepat dan praktis tanpa perlu mendaftarkan tamu satu per satu di dashboard.

    <WizardNavigation back="token" />
  </TabItem>
</Tabs>
