---
sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import WizardNavigation from '@site/src/components/WizardNavigation';

# Hapus Undangan

Ikuti langkah-langkah di bawah ini untuk menghapus undangan yang sudah tidak Anda perlukan.

<Tabs groupId="hapus-wizard" queryString="step" defaultValue="navigasi">
  <TabItem value="navigasi" label="1. Navigasi">
    ### Langkah 1: Pilih Menu Undangan Saya
    Masuk ke dashboard Anda dan temukan menu untuk mengelola koleksi undangan Anda.

    - **Buka Menu**: Klik pada menu **"Undangan Saya"** di sidebar.
    
    ![Pilih Menu Undangan Saya](/img/hapus-undangan/pilih-menu-undangan-saya.jpg)

    <WizardNavigation next="proses" nextLabel="Proses Hapus" />
  </TabItem>

  <TabItem value="proses" label="2. Hapus & Validasi">
    ### Langkah 2: Proses Hapus & Cek Status
    Temukan undangan yang ingin dihapus dan periksa status publikasinya.

    - **Klik Hapus**: Tekan ikon tempat sampah (trash) pada kartu undangan.

    ![Klik Tombol Hapus](/img/hapus-undangan/tekan-icon-trash.jpg)

    - **Pesan Error?**: Jika muncul peringatan tidak bisa menghapus, periksa status undangan Anda.
    
    ![tidak bisa hapus undangan](/img/hapus-undangan/tidak-bisa-hapus-undangan.jpg)
       
    :::warning Syarat Penghapusan
    Undangan hanya dapat dihapus jika statusnya adalah **Draft** (tidak published). Jika statusnya masih **Published**, Anda harus mengubahnya ke draft terlebih dahulu.
    :::
    
    ![pastikan status undangan tidak published](/img/hapus-undangan/pastikan-status-undangan-tidak-published.jpg)

    <WizardNavigation back="navigasi" next="konfirmasi" nextLabel="Konfirmasi Akhir" />
  </TabItem>

  <TabItem value="konfirmasi" label="3. Konfirmasi">
    ### Langkah 3: Konfirmasi Akhir
    Setelah status menjadi draft, Anda dapat menyelesaikan proses penghapusan.

    - **Konfirmasi**: Klik tombol **"Hapus Permanen"** pada jendela konfirmasi yang muncul untuk menghapus data secara permanen.

    ![Konfirmasi Hapus Undangan](/img/hapus-undangan/hapus-undangan.jpg)

    :::danger Penghapusan Permanen
    Dengan menghapus undangan, semua data yang terkait (termasuk data tamu dan buku tamu) akan dihapus secara permanen dan tidak dapat dikembalikan.
    :::

    <WizardNavigation back="proses" />
  </TabItem>
</Tabs>
