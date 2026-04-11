---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WizardNavigation from '@site/src/components/WizardNavigation';

# Scan QR Code Tamu

Gunakan fitur pemindai QR Code untuk mempercepat proses check-in tamu di lokasi acara secara akurat.

<Tabs groupId="scan-tamu-wizard" queryString="step" defaultValue="akses">
  <TabItem value="akses" label="Akses Menu">
    ### Buka Menu Manajemen Tamu
    Langkah awal adalah masuk ke pengelola tamu dari dashboard utama.

    - **Klik Menu**: Temukan dan klik tombol **"Manajemen Tamu"**.
    
    ![Menu Manajemen Tamu](/img/manajemen-tamu/menu-manajemen-tamu.jpg)

    <WizardNavigation next="pilih" nextLabel="Pilih Undangan" />
  </TabItem>

  <TabItem value="pilih" label="Pilih Undangan">
    ### Pilih Undangan & Kelola Akses
    Tentukan undangan mana yang akan diproses check-in tamunya.

    - **Pilih Desain**: Cari kartu undangan yang sesuai.
    - **Kelola Akses**: Klik tombol **"Kelola Akses"** untuk masuk ke fitur scan.

    ![Kelola Akses](/img/manajemen-tamu/kelola-akses.jpg)

    <WizardNavigation back="akses" next="fitur-scan" nextLabel="Buka Fitur Scan" />
  </TabItem>

  <TabItem value="fitur-scan" label="Fitur Scan">
    ### Buka Fitur Scan
    Aktifkan pemindai di dalam dashboard pengelola akses.

    - **Scan Tamu**: Klik tombol **"Scan Tamu"** untuk membuka jendela kamera.

    ![Tombol Scan Tamu](/img/manajemen-tamu/btn-scan-tamu.jpg)

    <WizardNavigation back="pilih" next="izin-kamera" nextLabel="Izin Kamera" />
  </TabItem>

  <TabItem value="izin-kamera" label="Izin Kamera">
    ### Izinkan Akses Kamera
    Pastikan browser di HP Anda memiliki izin untuk menggunakan kamera.

    - **Pop-up Izin**: Jika muncul permintaan, pilih **"Allow while visiting the site"** atau **"Selalu Izinkan"**.

    ![Izin Kamera](/img/manajemen-tamu/izin-kamera.jpg)

    <WizardNavigation back="fitur-scan" next="kendala" nextLabel="Kendala Kamera" />
  </TabItem>

  <TabItem value="kendala" label="Kendala Kamera">
    ### Mengatasi Kendala Kamera
    Jika muncul pesan **"Kamera tidak tersedia"**, ikuti langkah reset izin di browser:

    - **1. Menu Browser**: Klik ikon titik tiga (⋮) di pojok kanan atas browser.
    ![Menu Browser](/img/manajemen-tamu/menu-browser.jpg)
    
    - **2. Settings**: Pilih menu **"Settings"** atau **"Pengaturan"**.
    ![Settings Browser](/img/manajemen-tamu/settings-browser.jpg)
    
    - **3. Site Settings**: Gulir ke bawah dan pilih **"Site settings"**.
    ![Site Settings](/img/manajemen-tamu/site-settings.jpg)
    
    - **4. Kamera**: Klik pada bagian **"Camera"**.
    ![Camera Settings](/img/manajemen-tamu/camera-settings.jpg)
    
    - **5. Remove Izin**: Temukan `undang.xyz` di daftar **"Not Allowed"**, klik titik tiga, lalu pilih **"Remove"**.
    ![Remove Permission](/img/manajemen-tamu/remove-permission.jpg)

    Setelah dihapus, muat ulang (refresh) halaman dan izinkan kembali akses kamera saat pop-up muncul.

    <WizardNavigation back="izin-kamera" next="proses-scan" nextLabel="Proses Scan" />
  </TabItem>

  <TabItem value="proses-scan" label="Proses Scan">
    ### Proses & Hasil Scan
    Lakukan pemindaian pada kode QR yang dibawa oleh tamu.

    - **Posisi**: Arahkan kamera HP tepat ke arah kode QR yang ada di undangan digital tamu (biasanya di pojok kanan bawah).
    ![QR Tamu](/img/manajemen-tamu/qr-tamu.jpg)

    - **Berhasil**: Jika berhasil, status kehadiran akan muncul secara otomatis.
    ![Check-in Berhasil](/img/manajemen-tamu/check-in-berhasil.jpg)

    - **Lanjut**: Klik **"Scan Tamu Berikutnya"** untuk memproses tamu lain.
    ![Scan Berikutnya](/img/manajemen-tamu/scan-tamu-berikutnya.jpg)

    <WizardNavigation back="kendala" />
  </TabItem>
</Tabs>
