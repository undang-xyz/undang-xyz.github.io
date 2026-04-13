---
sidebar_position: 5
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WizardNavigation from '@site/src/components/WizardNavigation';

# Kehadiran dan Ucapan (RSVP)

Pantau konfirmasi kehadiran dan baca ucapan selamat dari tamu undangan Anda secara real-time.

<Tabs groupId="rsvp-wizard" queryString="step" defaultValue="notifikasi">
  <TabItem value="notifikasi" label="Notifikasi">
    ### Melalui Notifikasi
    Sistem akan memberikan tanda jika ada tamu yang mengisi RSVP atau memberikan ucapan baru.

    - **Klik Ikon Lonceng**: Temukan ikon lonceng di bagian bawah layar akun Anda.
    ![Ikon Notifikasi](/img/manajemen-tamu/notifikasi-bell.jpg)

    - **Daftar Terbaru**: Klik pada pesan notifikasi untuk melihat detail komentar atau status kehadiran terbaru.
    ![Daftar Notifikasi](/img/manajemen-tamu/list-notifikasi.jpg)

    <WizardNavigation next="manual" nextLabel="Cek Manual" />
  </TabItem>

  <TabItem value="manual" label="Cek Manual">
    ### Melalui Manajemen Tamu
    Anda juga bisa memantau data tamu secara keseluruhan melalui menu pengelola.

    - **Buka Menu**: Klik tombol **"Manajemen Tamu"** di halaman utama.
    ![Menu Manajemen Tamu](/img/manajemen-tamu/menu-manajemen-tamu-rsvp.jpg)
    
    - **Kelola Akses**: Pilih undangan yang diinginkan, lalu klik **"Kelola Akses"**.
    ![Kelola Akses](/img/manajemen-tamu/btn-kelola-akses-rsvp.jpg)

    <WizardNavigation back="notifikasi" next="status-rsvp" nextLabel="Status RSVP" />
  </TabItem>

  <TabItem value="status-rsvp" label="Status RSVP">
    ### Memahami Status RSVP
    Pada daftar tamu, Anda akan melihat label status di bawah masing-masing nama:

    - **Status "YA"**: Tamu telah mengonfirmasi bahwa mereka **Akan Hadir**.
    ![RSVP Ya](/img/manajemen-tamu/rsvp-ya.jpg)

    - **Status "MUNGKIN"**: Tamu masih ragu-ragu atau **Belum Ada Kepastian**.
    ![RSVP Mungkin](/img/manajemen-tamu/rsvp-mungkin.jpg)

    <WizardNavigation back="manual" next="balas-ucapan" nextLabel="Balas Ucapan" />
  </TabItem>

  <TabItem value="balas-ucapan" label="Balas Ucapan">
    ### Membalas Ucapan Tamu
    Berikan apresiasi kepada tamu dengan membalas komentar/ucapan mereka.

    - **Tulis Balasan**: Ketik pesan balasan Anda pada kolom percakapan yang tersedia.
    - **Kirim**: Klik tombol **"Kirim Balasan"**.
    ![Kirim Balasan](/img/manajemen-tamu/kirim-balasan-ucapan.jpg)

    - **Berhasil**: Notifikasi **"Pesan terkirim"** akan muncul jika balasan Anda sudah terbit.
    ![Pesan Terkirim](/img/manajemen-tamu/pesan-balasan-terkirim.jpg)

    <WizardNavigation back="status-rsvp" />
  </TabItem>
</Tabs>
